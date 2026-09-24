# Graphics in Science website

[graphicsinscience.com](https://www.graphicsinscience.com): the portfolio of Andrés Alegría, visual science communicator. Plain HTML, CSS and JavaScript, served by GitHub Pages. No build step, no backend.

## Structure

| Path | What it holds |
| --- | --- |
| `index.html` | Home: hero, the scattered wall of selected work, skills ticker, the filterable work grid with a lightbox, stacking story cards, clients, about, FAQ accordion, contact |
| `stories.html` | The scrollytelling stories, with a cursor-following preview on desktop, plus the interactive 3D maps |
| `services.html`, `faqs.html`, `contact.html` | Inner pages |
| `about.html` | Redirects to the About section of the home page (kept so old links work) |
| `js/site-data.js` | **All content**: text, links, the 72 portfolio pieces (title, client, story link, alt text), the six stories |
| `js/main.js` | Renders the pages from that data: header, sections, work grid and filters, lightbox, forms |
| `js/motion.js` | The animation layer (GSAP): hero reveal, wall parallax, scroll reveals, stacking cards, hiding header, story preview. Everything works without it, and it switches itself off for people who prefer reduced motion |
| `js/vendor/` | GSAP 3.15 and its plugins (ScrollTrigger, Flip, SplitText, Observer), free under the GSAP standard license |
| `css/style.css` | The look: palette, type, layout. Tokens sit at the top of the file |
| `fonts/` | Public Sans (variable weight), self-hosted |
| `images/portfolio/<category>/` | Full-size pieces (JPEG/PNG at 1500 px wide, small GIFs, the 3D recordings as MP4) |
| `images/thumbs/<category>/` | 800 px JPEG copies used in the grid and the wall; the lightbox opens the full file |
| `images/about/`, `images/share/` | Portrait; link-preview image |

## Editing content

Everything editorial lives in `js/site-data.js`.

- **Add a piece**: put the full-size file in `images/portfolio/<category>/`, make an 800 px copy in `images/thumbs/<category>/` (same name, `.jpg`), and add an entry to that category's `items`:
  `{ src, thumb, width, height, title, client, alt, story: { url, title, date, outlet } }`. Leave `story` out when there is no article. Add `featured: true` to show it on the wall (twelve pieces fit).
- **Add a video**: use `video` and `poster` instead of `src`; it plays muted on a loop.
- **Add a story**: add an object to `stories.items` (newest first); the first one becomes the featured card on the stories page and the three newest stack on the home page.
- **Change text**: hero, about, services, FAQs, contact and footer are all named blocks at the top of the file.
- **How many pieces show before "Show all"**: `work.initial`.

## Changing the look

- **Colours**: the seven palette tokens at the top of `css/style.css`, plus the role tokens under them. Approved text/background pairings: forest on bone, bone on forest, wine on white, white on teal, teal on white, black on white, bone on black, brown on white. Teal and brown do not pass contrast on bone, which is why links on bone sections are forest.
- **Type**: `--font` and the `--fs-*` sizes.
- **Motion**: the durations and the parallax strengths are marked in `js/motion.js`; the ticker speed is `--marquee-duration`.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. The Cloudflare Analytics beacon logs a CORS error on localhost; it only reports from the real domain.

## Services in use

- **Hosting**: GitHub Pages from `main`, custom domain `www.graphicsinscience.com` (`CNAME` file). DNS is at Squarespace Domains.
- **Contact form**: Web3Forms. The public access key sits in `contactForm.hiddenFields`; messages go to the address linked in the Web3Forms dashboard. A hidden `botcheck` field catches bots.
- **Analytics**: Cloudflare Web Analytics, the snippet before `</body>` on every page. Copy it into any new page.
