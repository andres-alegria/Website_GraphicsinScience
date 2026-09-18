# Graphics in Science website

Static rebuild of [graphicsinscience.com](https://www.graphicsinscience.com), moved off Squarespace. Plain HTML, CSS and JavaScript: no build step, no backend.

## Structure

| Path | What it holds |
| --- | --- |
| `index.html` | Portfolio (home): skills ticker, intro, nine image carousels, contact form |
| `faqs.html`, `contact.html` | Pages linked in the menu |
| `about.html`, `services.html` | Pages that exist but are not in the menu, as on the Squarespace site |
| `js/site-data.js` | All text, links, portfolio images, alt text and captions |
| `js/main.js` | Renders the pages; carousels, ticker, section edges, contact form |
| `css/style.css` | Colors, fonts, sizes and spacing (tokens at the top of the file) |
| `images/` | Portfolio images (JPEG/PNG at 1500 px wide, small GIFs as they were, the two 3D screen recordings as MP4 with a poster frame), About photo, link-preview image |

## Editing

- **Add a portfolio image**: put the file in `images/portfolio/<section>/` and add an entry (`src`, `width`, `height`, `alt`, `caption`) to that section in `js/site-data.js`.
- **Add a video instead**: use `video` and `poster` in place of `src`; it plays muted on a loop, like the 3D maps.
- **Change text**: edit `js/site-data.js`.
- **Change the look**: edit the variables at the top of `css/style.css`.
- **New page**: copy an existing page as a starting point; the Cloudflare Web Analytics snippet sits just before `</body>` in every page and needs to be copied along.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Before going live

- **Contact form**: set `contactForm.endpoint` (a form service such as Formspree) or `contactForm.email` in `js/site-data.js`. Until then the form only shows a "not connected" message.
- **Font**: the Squarespace site used Aktiv Grotesk (Adobe Fonts). This version falls back to Helvetica Neue / Arial. To switch back, add an Adobe Fonts web project `<link>` to the pages and update `--font-main`.
- **Hosting**: GitHub Pages (Settings → Pages → `main`, root). For the custom domain, add a `CNAME` file containing `www.graphicsinscience.com` and point the DNS records to GitHub Pages.
