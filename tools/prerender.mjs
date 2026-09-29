#!/usr/bin/env node
/*
  Writes the finished page content into the HTML, so search engines, link previews and AI tools that don't run
  JavaScript can still read the text. It runs on every push to main (.github/workflows/pages.yml), which then
  publishes the result; nothing it writes is committed.

  How: serves the site on a local port, opens each page in headless Chrome with reduced motion (so no animation
  states end up in the markup), and copies the rendered header, main and footer into a copy of the site in _site/.
  In the browser, js/main.js swaps that copy for the live version.

  Run it locally with `node tools/prerender.mjs`, then open _site/ through any local server to check the result.
  Needs Node 18+ and Google Chrome (or set CHROME=/path/to/chrome). No packages to install.
*/
import http from "node:http";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync, spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "_site");
const pages = ["index.html", "stories.html", "services.html", "faqs.html", "contact.html"];
const leaveOut = new Set([".git", ".github", ".gitignore", ".DS_Store", "tools", "_site", "README.md"]);

const types = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css",
  ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".gif": "image/gif",
  ".mp4": "video/mp4", ".woff2": "font/woff2", ".json": "application/json", ".xml": "application/xml", ".txt": "text/plain"
};

function findChrome() {
  if (process.env.CHROME) return process.env.CHROME;
  const mac = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  if (fs.existsSync(mac)) return mac;
  for (const name of ["google-chrome", "google-chrome-stable", "chromium", "chromium-browser"]) {
    try {
      return execFileSync("which", [name], { encoding: "utf8" }).trim();
    } catch {
      // not installed under this name
    }
  }
  throw new Error("Chrome not found; set CHROME=/path/to/chrome");
}

// a bare static server for the repo folder
function serve() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
    const file = path.join(root, urlPath.endsWith("/") ? urlPath + "index.html" : urlPath);
    if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      res.writeHead(404, { Connection: "close" }).end();
      return;
    }
    // closing each connection lets headless Chrome exit as soon as the page is done
    res.writeHead(200, { "Content-Type": types[path.extname(file).toLowerCase()] || "application/octet-stream", Connection: "close" });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

// The rendered DOM of one page, after its scripts have run, in a throwaway profile so any open Chrome is untouched.
// Chrome prints the page within a second or two but sometimes lingers before quitting, so it is closed as soon as
// the whole page has arrived.
function renderedDom(chrome, url) {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), "prerender-"));
  const args = [
    "--headless=new", `--user-data-dir=${profile}`, "--no-first-run", "--no-default-browser-check",
    "--disable-extensions", "--disable-background-networking", "--disable-component-update", "--disable-sync",
    "--disable-gpu", "--hide-scrollbars", "--mute-audio",
    "--force-prefers-reduced-motion", "--window-size=1280,800",
    "--dump-dom", url
  ];
  if (process.platform === "linux") args.unshift("--no-sandbox"); // GitHub's Ubuntu runners block Chrome's sandbox
  return new Promise((resolve, reject) => {
    const proc = spawn(chrome, args, { stdio: ["ignore", "pipe", "ignore"] });
    let dom = "";
    let done = false;
    const finish = (error) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      proc.kill("SIGKILL");
      if (error) reject(error);
      else resolve(dom);
    };
    const timer = setTimeout(() => finish(new Error(`Chrome timed out on ${url}`)), 90000);
    proc.stdout.setEncoding("utf8");
    proc.stdout.on("data", (chunk) => {
      dom += chunk;
      if (dom.includes("</html>")) finish();
    });
    proc.on("error", finish);
    proc.on("exit", () => {
      // the profile can only go once Chrome has fully stopped writing to it
      setTimeout(() => fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 }), 200);
      finish(dom.includes("</html>") ? undefined : new Error(`Chrome quit without a page for ${url}`));
    });
  });
}

function inner(dom, pattern, label) {
  const match = dom.match(pattern);
  if (!match || !match[1].trim()) throw new Error(`No rendered ${label} found`);
  return match[1];
}

function copySite(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    if (leaveOut.has(entry.name)) continue;
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copySite(src, dest);
    else fs.copyFileSync(src, dest);
  }
}

const chrome = findChrome();
const server = await serve();
const base = `http://127.0.0.1:${server.address().port}/`;

try {
  fs.rmSync(out, { recursive: true, force: true });
  copySite(root, out);

  for (const page of pages) {
    const dom = await renderedDom(chrome, base + page);
    const header = inner(dom, /<header[^>]*id="site-header"[^>]*>([\s\S]*?)<\/header>/, `header in ${page}`);
    // video stills are left for the page to load when scrolled near
    const main = inner(dom, /<main id="main"[^>]*>([\s\S]*?)<\/main>/, `main in ${page}`)
      .replace(/(<video\b[^>]*?) poster="[^"]*"/g, "$1");
    const footer = inner(dom, /<footer[^>]*id="site-footer"[^>]*>([\s\S]*?)<\/footer>/, `footer in ${page}`);

    let html = fs.readFileSync(path.join(root, page), "utf8");
    const swaps = [
      ['<header class="site-header" id="site-header"></header>', `<header class="site-header" id="site-header">${header}</header>`],
      ['<main id="main"></main>', `<main id="main" data-prerendered>${main}</main>`],
      ['<footer id="site-footer"></footer>', `<footer id="site-footer" class="site-footer">${footer}</footer>`],
      [/\s*<noscript>[\s\S]*?<\/noscript>/, ""]
    ];
    for (const [from, to] of swaps) {
      if (typeof from === "string" && !html.includes(from)) throw new Error(`${page}: "${from}" not found`);
      html = html.replace(from, to);
    }
    fs.writeFileSync(path.join(out, page), html);
    const words = main.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    console.log(`${page}: ${words} words written in`);
  }
} finally {
  server.close();
}
