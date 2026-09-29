# Graphics in Science website

[graphicsinscience.com](https://www.graphicsinscience.com): the portfolio of Andrés Alegría, visual science communicator. Plain HTML, CSS and JavaScript, served by GitHub Pages. No build tools to install, no backend.

## Structure

| Path | What it holds |
| --- | --- |
| `index.html` | Home: intro, every piece on a scattered, drifting wall with a lightbox, stacking story cards, the interactive 3D maps, FAQ accordion, contact |
| `stories.html` | The scrollytelling stories as cards; "Click to start this scrolly" plays the live story inside its card. Plus the interactive 3D maps |
| `services.html`, `faqs.html`, `contact.html` | Inner pages |
| `about.html` | Redirects to the home page (kept so old links work) |
| `js/site-data.js` | **All content**: text, links, the portfolio pieces (title, client, story link, alt text), the stories |
| `js/main.js` | Renders the pages from that data: header, sections, work wall, lightbox, forms |
| `js/motion.js` | The animation layer (GSAP): hero reveal, wall parallax, scroll reveals, stacking cards, hiding header. Everything works without it, and it switches itself off for people who prefer reduced motion |
| `js/vendor/` | GSAP 3.15 and its plugins (ScrollTrigger, SplitText, Observer), free under the GSAP standard license |
| `css/style.css` | The look: palette, type, layout. Tokens sit at the top of the file |
| `fonts/` | Public Sans (variable weight), self-hosted |
| `images/portfolio/<category>/` | Full-size pieces (JPEG/PNG at 1500 px wide; animations and the 3D recordings as MP4) |
| `images/thumbs/<category>/` | 800 px JPEG copies (and 800 px videos) used on the wall; the lightbox opens the full file |
| `images/stories/` | The story card pictures, 1100 px JPEG |
| `images/about/`, `images/share/` | Portrait (not on the pages at the moment); link-preview image |
| `tools/prerender.mjs` | Writes each page's finished content into its HTML for search engines; runs on every push (see below) |
| `.github/workflows/pages.yml` | The GitHub Action that runs it and publishes the site |

## Editing content

Everything editorial lives in `js/site-data.js`.

- **Add a piece**: put the full-size file in `images/portfolio/<category>/`, make an 800 px copy in `images/thumbs/<category>/` (same name, `.jpg`), and add an entry to that category's `items`:
  `{ src, thumb, width, height, title, client, alt, story: { url, title, date, outlet } }`. Leave `story` out when there is no article. For a journal paper use `paper: { url, year }` instead, with the DOI link as `url`; the lightbox then shows "Read the full paper". The wall lays the pieces out in rows of three (two on phones), left to right, in the order of the file.
- **Add a video or animation**: use `video` and `poster` instead of `src`; it plays muted on a loop. Turn GIFs into MP4 first (a tenth of the size), e.g. `ffmpeg -i in.gif -movflags +faststart -pix_fmt yuv420p -vf "scale=800:-2" -c:v libx264 -crf 26 out.mp4`, and give the wall that 800 px copy as `videoThumb`. Videos and their stills load only when scrolled near.
- **Add a 3D map**: add `{ video, poster, width, height, title, client, url, alt }` to `stories.interactive.items`; it shows on the stories page and on the home page after the scrollies, not on the wall. Videos load only when scrolled near.
- **Add a before/after slider**: use `compare: [left, right]` instead of `src`, each side `{ src, thumb, alt }`, both images the same size. The wall shows them split down the middle; in the lightbox the handle can be dragged.
- **Add a story**: add an object to `stories.items` (newest first); the three newest also stack on the home page. `embed` is the address of the scrolly itself (the Vercel app the article embeds), which plays inside the card on both pages; leave it out and the card only links to the article. While the pointer is over a playing scrolly the page stays still, so the wheel drives the story.
- **Change text**: hero, services, FAQs, contact and footer are all named blocks at the top of the file.

## Changing the look

- **Colours**: eight palette tokens at the top of `css/style.css` (paper, card, ink, ink-soft, meta, and emerald in three strengths), plus the role tokens under them. Neutrals frame the work; emerald is the only colour and marks what can be clicked. On the light page use `--emerald` for links and buttons (`--emerald-dark` on hover); on the ink bands use `--emerald-light` for links and text on ink is `--ink-soft` or `--paper`. Every pairing passes WCAG AA.
- **Type**: `--font` and the `--fs-*` sizes.
- **Motion**: the durations and how far the wall's pieces float are marked in `js/motion.js`.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. The Cloudflare Analytics beacon logs a CORS error on localhost; it only reports from the real domain.

## Services in use

- **Hosting**: GitHub Pages, custom domain `www.graphicsinscience.com` (`CNAME` file). DNS is at Squarespace Domains. Every push to `main` runs the "Publish site" Action: `tools/prerender.mjs` opens each page in headless Chrome and writes its content into the HTML, so search engines, link previews and AI tools that don't run JavaScript can read it; then the result is published. The written-out copies are never committed, and in the browser `js/main.js` swaps them for the live version. Settings → Pages → Source must be "GitHub Actions". To check the result locally: `node tools/prerender.mjs` (needs Node and Chrome), then look in `_site/`.
- **Search**: each page has its own title, description and canonical address; the home page carries structured data (schema.org Person and WebSite) in its `<head>`. `sitemap.xml` lists the pages; add new ones there.
- **Contact form**: Web3Forms. The public access key sits in `contactForm.hiddenFields`; messages go to the address linked in the Web3Forms dashboard. A hidden `botcheck` field catches bots.
- **Analytics**: Cloudflare Web Analytics, the snippet before `</body>` on every page. Copy it into any new page.
