# Graphics in Science website

[graphicsinscience.com](https://www.graphicsinscience.com): the portfolio of Andrés Alegría, visual science communicator. Plain HTML, CSS and JavaScript, served by GitHub Pages. No build step, no backend.

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
| `images/portfolio/<category>/` | Full-size pieces (JPEG/PNG at 1500 px wide, small GIFs, the 3D recordings as MP4) |
| `images/thumbs/<category>/` | 800 px JPEG copies used on the wall; the lightbox opens the full file |
| `images/about/`, `images/share/` | Portrait (not on the pages at the moment); link-preview image |

## Editing content

Everything editorial lives in `js/site-data.js`.

- **Add a piece**: put the full-size file in `images/portfolio/<category>/`, make an 800 px copy in `images/thumbs/<category>/` (same name, `.jpg`), and add an entry to that category's `items`:
  `{ src, thumb, width, height, title, client, alt, story: { url, title, date, outlet } }`. Leave `story` out when there is no article. The wall lays the pieces out in rows of three (two on phones), left to right, in the order of the file.
- **Add a video**: use `video` and `poster` instead of `src`; it plays muted on a loop.
- **Add a 3D map**: add `{ video, poster, width, height, title, client, url, alt }` to `stories.interactive.items`; it shows on the stories page and on the home page after the scrollies, not on the wall. Videos load only when scrolled near.
- **Add a before/after slider**: use `compare: [left, right]` instead of `src`, each side `{ src, thumb, alt }`, both images the same size. The wall shows them split down the middle; in the lightbox the handle can be dragged.
- **Add a story**: add an object to `stories.items` (newest first); the three newest also stack on the home page. `embed` is the address of the scrolly itself (the Vercel app the article embeds), which plays inside the card on both pages; leave it out and the card only links to the article. While the pointer is over a playing scrolly the page stays still, so the wheel drives the story.
- **Change text**: hero, services, FAQs, contact and footer are all named blocks at the top of the file.

## Changing the look

- **Colours**: the seven palette tokens at the top of `css/style.css`, plus the role tokens under them. Approved text/background pairings: forest on bone, bone on forest, wine on white, white on teal, teal on white, black on white, bone on black, brown on white. Teal and brown do not pass contrast on bone, which is why links on bone sections are forest.
- **Type**: `--font` and the `--fs-*` sizes.
- **Motion**: the durations and how far the wall's pieces float are marked in `js/motion.js`.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. The Cloudflare Analytics beacon logs a CORS error on localhost; it only reports from the real domain.

## Services in use

- **Hosting**: GitHub Pages from `main`, custom domain `www.graphicsinscience.com` (`CNAME` file). DNS is at Squarespace Domains.
- **Contact form**: Web3Forms. The public access key sits in `contactForm.hiddenFields`; messages go to the address linked in the Web3Forms dashboard. A hidden `botcheck` field catches bots.
- **Analytics**: Cloudflare Web Analytics, the snippet before `</body>` on every page. Copy it into any new page.
