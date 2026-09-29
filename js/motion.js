/*
  Animation layer, built on GSAP (js/vendor). Everything here is optional:
  without it, or with "reduce motion" switched on, the pages are fully usable and static.
*/
(function () {
  "use strict";
  if (!window.gsap) return;

  const { gsap } = window;
  const plugins = [window.ScrollTrigger, window.SplitText, window.Observer].filter(Boolean);
  gsap.registerPlugin(...plugins);

  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    document.documentElement.classList.add("js-motion");
    const ST = window.ScrollTrigger;

    // ---- Hero: title lines rise in, the rest fades up ----
    const title = document.querySelector(".hero__title");
    if (title && window.SplitText) {
      const split = window.SplitText.create(title, { type: "lines", linesClass: "line", mask: "lines", autoSplit: true,
        onSplit: (self) => gsap.from(self.lines, { yPercent: 110, duration: 0.9, stagger: 0.09, ease: "power3.out", delay: 0.1 }) });
      gsap.from([".hero__lead", ".hero__actions"], { opacity: 0, y: 18, duration: 0.7, stagger: 0.08, ease: "power2.out", delay: 0.35 });
      window.addEventListener("beforeunload", () => split.revert());
    }

    if (ST) {
      // ---- Generic reveals, batched so grids stagger in ----
      const reveals = document.querySelectorAll(".reveal");
      if (reveals.length) {
        ST.batch(reveals, {
          start: "top 88%",
          once: true,
          onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.7, stagger: 0.07, ease: "power2.out", overwrite: true })
        });
      }

      // ---- Section headings slide in from the left ----
      gsap.utils.toArray(".section-head").forEach((head) => {
        gsap.from(head, { opacity: 0, x: -24, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: head, start: "top 90%", once: true } });
      });

      // Layout shifts (fonts, lazy images, filters) move the trigger points
      window.addEventListener("load", () => {
        ST.refresh();
        // safety net: anything already on screen after load is shown even if its trigger misfired
        gsap.set([...reveals].filter((el) => el.getBoundingClientRect().top < window.innerHeight), { opacity: 1, y: 0, overwrite: "auto" });
      });
      document.fonts?.ready.then(() => ST.refresh());
    }

    // ---- Header slides away while scrolling down and returns on the way up ----
    const header = document.getElementById("site-header");
    if (header && window.Observer) {
      window.Observer.create({
        type: "scroll",
        tolerance: 12,
        onDown: () => {
          if (window.scrollY > 200 && !document.body.classList.contains("menu-open")) {
            header.classList.add("is-hidden");
            document.documentElement.classList.add("header-hidden");
          }
        },
        onUp: () => {
          header.classList.remove("is-hidden");
          document.documentElement.classList.remove("header-hidden");
        }
      });
    }

    return () => document.documentElement.classList.remove("js-motion");
  });

  // ---- Work wall: the three columns drift at different speeds (wide screens; phones get two still columns) ----
  mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
    const wall = document.querySelector(".wall");
    if (!wall || !window.ScrollTrigger) return;
    const speeds = [-90, -260, -170]; // adjust parallax strength per column here (px)
    wall.querySelectorAll(".wall__col").forEach((col, i) => {
      gsap.fromTo(col, { y: -speeds[i] * 0.35 }, {
        y: speeds[i], ease: "none",
        scrollTrigger: { trigger: wall, start: "top bottom", end: "bottom top", scrub: 0.6 }
      });
    });
  });

  // ---- Home: story cards stack; each one shrinks back as the next slides over it ----
  mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
    const cards = gsap.utils.toArray(".stack .story-feature");
    cards.forEach((card, i) => {
      const next = cards[i + 1];
      if (!next) return;
      gsap.to(card, {
        scale: 0.92, opacity: 0.5, transformOrigin: "center top", ease: "none",
        scrollTrigger: { trigger: next, start: "top bottom", end: "top 30%", scrub: true }
      });
    });
  });
})();
