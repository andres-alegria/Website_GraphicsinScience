/*
  Animation layer, built on GSAP (js/vendor). Everything here is optional:
  without it, or with "reduce motion" switched on, the pages are fully usable and static.
*/
(function () {
  "use strict";
  if (!window.gsap) return;

  const { gsap } = window;
  const plugins = [window.ScrollTrigger, window.Flip, window.SplitText, window.Observer].filter(Boolean);
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
      gsap.from([".hero .label", ".hero__lead", ".hero__actions", ".hero__side"], { opacity: 0, y: 18, duration: 0.7, stagger: 0.08, ease: "power2.out", delay: 0.35 });
      window.addEventListener("beforeunload", () => split.revert());
    }

    // ---- Selected-work wall: three columns drift at different speeds ----
    if (ST) {
      const wall = document.querySelector(".wall");
      if (wall) {
        const speeds = [-60, -170, -110]; // adjust parallax strength per column here (px)
        wall.querySelectorAll(".wall__col").forEach((col, i) => {
          gsap.fromTo(col, { y: -speeds[i] * 0.35 }, {
            y: speeds[i], ease: "none",
            scrollTrigger: { trigger: wall, start: "top bottom", end: "bottom top", scrub: 0.6 }
          });
        });
        gsap.from(wall.querySelectorAll(".wall__item"), { opacity: 0, y: 40, duration: 0.8, stagger: 0.06, ease: "power2.out",
          scrollTrigger: { trigger: wall, start: "top 85%", once: true } });
      }

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

    // ---- Stories page: a preview image follows the cursor across the list ----
    const preview = document.querySelector(".story-preview");
    const rows = document.querySelectorAll(".story-row");
    if (preview && rows.length && window.matchMedia("(pointer: fine)").matches) {
      const img = preview.querySelector("img");
      const xTo = gsap.quickTo(preview, "x", { duration: 0.5, ease: "power3" });
      const yTo = gsap.quickTo(preview, "y", { duration: 0.5, ease: "power3" });
      const rotTo = gsap.quickTo(preview, "rotation", { duration: 0.6, ease: "power3" });
      let lastX = 0;
      gsap.set(preview, { xPercent: -50, yPercent: -50, scale: 0.9 });
      window.addEventListener("pointermove", (e) => {
        rotTo(gsap.utils.clamp(-6, 6, (e.clientX - lastX) * 0.15)); // slight tilt in the direction of travel
        lastX = e.clientX;
        xTo(e.clientX + 40);
        yTo(e.clientY);
      });
      rows.forEach((row) => {
        row.addEventListener("pointerenter", () => {
          img.src = row.dataset.image;
          gsap.to(preview, { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out", overwrite: true });
        });
        row.addEventListener("pointerleave", () => gsap.to(preview, { opacity: 0, scale: 0.9, duration: 0.3, ease: "power2.in", overwrite: true }));
      });
    }

    return () => document.documentElement.classList.remove("js-motion");
  });
})();
