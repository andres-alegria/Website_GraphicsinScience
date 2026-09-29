/*
  Page rendering and interactions.
  Content comes from js/site-data.js (window.SITE); js/motion.js adds the animation; css/style.css the look.
*/
(function () {
  "use strict";

  const SITE = window.SITE;
  const page = document.body.dataset.page || "home";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const YEAR = String(new Date().getFullYear());

  // ---------- Helpers ----------

  const escapeHtml = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const html = (strings, ...values) => strings.reduce((out, s, i) => out + s + (values[i] ?? ""), "");

  const section = (classes, inner, attrs = {}) => {
    const el = document.createElement("section");
    el.className = classes;
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    el.innerHTML = inner;
    return el;
  };

  const formatDate = (iso) => {
    if (!iso) return "";
    const d = new Date(iso + "T00:00:00");
    return isNaN(d) ? iso : d.toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" });
  };

  const allItems = () => SITE.portfolio.flatMap((sec) => sec.items.map((item) => ({ ...item, category: sec.id, categoryTitle: sec.title })));

  // Before/after slider: compare[0] shows left of the handle, compare[1] right of it.
  // The wall shows the 800 px thumbs split down the middle; the lightbox version (full = true) can be dragged.
  const compareHtml = (item, full = false) => {
    const [left, right] = item.compare;
    const tag = full ? "div" : "span"; // wall pieces are buttons, so only inline elements inside
    const img = (side, cls = "") => html`<img${cls} src="${full ? side.src : side.thumb || side.src}" width="${item.width}" height="${item.height}" alt="${escapeHtml(side.alt)}" ${full ? "" : 'loading="lazy"'} decoding="async">`;
    return html`<${tag} class="compare${full ? " lightbox__media lightbox__compare" : ""}" style="--pos: 50%; --ratio: ${item.width / item.height}">
      ${img(right)}${img(left, ' class="compare__top"')}
      <span class="compare__handle" aria-hidden="true"></span>
      ${full ? html`<input class="compare__range" type="range" min="0" max="100" step="1" value="50" aria-label="Slide between the two maps">` : ""}
    </${tag}>`;
  };

  // Media markup for the work wall and story cards: the 800 px thumb when there is one, the full file in the lightbox
  const mediaHtml = (item) =>
    item.compare
      ? compareHtml(item)
      : item.video
      ? html`<video src="${item.video}" poster="${item.poster}" width="${item.width}" height="${item.height}" ${reduceMotion ? "controls" : "autoplay"} muted loop playsinline preload="metadata" aria-label="${escapeHtml(item.alt)}"></video>`
      : html`<img src="${item.thumb || item.src}" width="${item.width}" height="${item.height}" alt="${escapeHtml(item.alt)}" loading="lazy" decoding="async">`;

  const metaLine = (item) => {
    const bits = [item.client];
    if (item.story && item.story.date) bits.push(item.story.date.slice(0, 4));
    return bits.filter(Boolean).join(" · ");
  };

  // ---------- Header & footer ----------

  function renderHeader() {
    const header = document.getElementById("site-header");
    const current = (item) => (item.page === page ? ' aria-current="page"' : "");
    const links = SITE.nav.map((item) => html`<a href="${item.href}"${current(item)}>${escapeHtml(item.label)}</a>`).join("");
    const social = SITE.social
      .map((item) => html`<a class="social-link" href="${item.href}" target="_blank" rel="noopener" aria-label="${escapeHtml(item.label)}"><span aria-hidden="true">${escapeHtml(item.text)}</span></a>`)
      .join("");

    header.innerHTML = html`
      <div class="header-inner wrap">
        <a class="site-title" href="index.html">${escapeHtml(SITE.name)}<small>${escapeHtml(SITE.tagline)}</small></a>
        <nav class="site-nav" aria-label="Main">${links}</nav>
        <div class="header-social">${social}</div>
        <a class="button nav-cta" href="contact.html">Get in touch</a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
          <span class="menu-toggle__bar menu-toggle__bar--top"></span>
          <span class="menu-toggle__bar menu-toggle__bar--bottom"></span>
        </button>
      </div>
      <div class="mobile-menu" id="mobile-menu" hidden>
        <nav class="mobile-menu__nav" aria-label="Mobile">${links}</nav>
        <div class="mobile-menu__social">${social}</div>
      </div>`;

    const toggle = header.querySelector(".menu-toggle");
    const menu = header.querySelector(".mobile-menu");
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menu.hidden = !open;
      document.body.classList.toggle("menu-open", open);
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !menu.hidden) setOpen(false); });
  }

  function renderFooter() {
    const footer = document.getElementById("site-footer");
    footer.className = "site-footer";
    footer.innerHTML = html`
      <div class="footer__inner wrap">
        <div>
          <p class="footer__title">${escapeHtml(SITE.footer.title)}</p>
          <p class="footer__tagline">${escapeHtml(SITE.footer.tagline)}</p>
        </div>
        <nav class="footer__nav" aria-label="Footer">${SITE.nav.map((i) => html`<a href="${i.href}">${escapeHtml(i.label)}</a>`).join("")}</nav>
        <div class="footer__social">${SITE.social.map((i) => html`<a href="${i.href}" target="_blank" rel="noopener">${escapeHtml(i.label)} ↗</a>`).join("")}</div>
        <p class="footer__note">${escapeHtml(SITE.footer.note.replace("{year}", YEAR))}</p>
      </div>`;
  }

  // ---------- Shared blocks ----------

  const sectionHead = (label, title, aside = "") => html`
    <div class="section-head">
      <div>${label ? html`<p class="label">${escapeHtml(label)}</p>` : ""}<h2>${escapeHtml(title)}</h2></div>
      ${aside ? html`<p class="section-head__aside">${aside}</p>` : ""}
    </div>`;

  function contactFormHtml(idPrefix) {
    const f = SITE.contactForm;
    return html`
      <form class="contact-form">
        <div class="field">
          <label for="${idPrefix}-email">${escapeHtml(f.emailLabel)} <span class="field__required">(required)</span></label>
          <input id="${idPrefix}-email" name="email" type="email" autocomplete="email" required>
        </div>
        <div class="field">
          <label for="${idPrefix}-message">${escapeHtml(f.messageLabel)} <span class="field__required">(required)</span></label>
          <textarea id="${idPrefix}-message" name="message" rows="5" required></textarea>
        </div>
        <div><button class="button" type="submit">${escapeHtml(f.submitLabel)}</button></div>
        <p class="form-status" role="status" aria-live="polite"></p>
        <input class="spam-trap" type="checkbox" name="botcheck" tabindex="-1" aria-hidden="true">
      </form>`;
  }

  function initContactForm(form) {
    const f = SITE.contactForm;
    const status = form.querySelector(".form-status");
    const button = form.querySelector("button[type=submit]");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = new FormData(form);
      if (f.endpoint) {
        Object.entries(f.hiddenFields || {}).forEach(([k, v]) => data.append(k, v));
        button.disabled = true;
        status.textContent = "";
        try {
          const response = await fetch(f.endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          form.reset();
          status.textContent = f.successMessage;
        } catch (error) {
          status.textContent = f.errorMessage;
        } finally {
          button.disabled = false;
        }
      } else if (f.email) {
        window.location.href = `mailto:${f.email}?subject=${encodeURIComponent(f.mailSubject)}&body=${encodeURIComponent(`${data.get("message")}\n\n${data.get("email")}`)}`;
      } else {
        status.textContent = f.notConnectedMessage;
      }
    });
  }

  // ---------- Lightbox ----------

  const lightbox = (() => {
    let items = [];
    let index = 0;
    let lastFocus = null;
    const root = document.createElement("div");
    root.className = "lightbox";
    root.hidden = true;
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-label", "Image viewer");
    root.innerHTML = html`
      <div class="lightbox__stage">
        <button class="lightbox__close" type="button" aria-label="Close">×</button>
        <button class="lightbox__nav lightbox__nav--prev" type="button" aria-label="Previous">←</button>
        <div class="lightbox__media-wrap"></div>
        <button class="lightbox__nav lightbox__nav--next" type="button" aria-label="Next">→</button>
      </div>
      <aside class="lightbox__info">
        <p class="lightbox__counter"></p>
        <h2></h2>
        <p class="lightbox__meta"></p>
        <p class="lightbox__desc"></p>
        <div class="lightbox__story"></div>
        <p class="lightbox__hint"></p>
      </aside>`;
    document.body.appendChild(root);

    const wrap = root.querySelector(".lightbox__media-wrap");
    const parts = {
      counter: root.querySelector(".lightbox__counter"),
      title: root.querySelector("h2"),
      meta: root.querySelector(".lightbox__meta"),
      desc: root.querySelector(".lightbox__desc"),
      story: root.querySelector(".lightbox__story"),
      hint: root.querySelector(".lightbox__hint")
    };
    let hintTween = null;

    // Drag, click or use the arrow keys to move a slider's handle
    const initCompare = (el) => {
      const range = el.querySelector(".compare__range");
      const set = (pct) => {
        const v = Math.min(100, Math.max(0, pct));
        el.style.setProperty("--pos", v + "%");
        range.value = v;
      };
      const fromPointer = (e) => {
        const r = el.getBoundingClientRect();
        set(((e.clientX - r.left) / r.width) * 100);
      };
      const stopHint = () => { if (hintTween) hintTween.kill(); };
      el.addEventListener("pointerdown", (e) => { stopHint(); el.setPointerCapture(e.pointerId); fromPointer(e); range.focus({ preventScroll: true }); });
      el.addEventListener("pointermove", (e) => { if (el.hasPointerCapture(e.pointerId)) fromPointer(e); });
      range.addEventListener("input", () => { stopHint(); set(+range.value); });
      // a short sweep shows that the handle moves
      if (window.gsap && !reduceMotion) {
        const proxy = { v: 50 };
        hintTween = window.gsap.to(proxy, { v: 35, duration: 0.6, delay: 0.5, repeat: 1, yoyo: true, ease: "power2.inOut", onUpdate: () => set(proxy.v) });
      }
    };

    const show = () => {
      const item = items[index];
      if (hintTween) hintTween.kill();
      wrap.innerHTML = item.compare
        ? compareHtml(item, true)
        : item.video
        ? html`<video class="lightbox__media" src="${item.video}" poster="${item.poster}" ${reduceMotion ? "" : "autoplay"} controls muted loop playsinline aria-label="${escapeHtml(item.alt)}"></video>`
        : html`<img class="lightbox__media" src="${item.src}" width="${item.width}" height="${item.height}" alt="${escapeHtml(item.alt)}" decoding="async">`;
      parts.counter.textContent = `${index + 1} / ${items.length}${item.categoryTitle ? " · " + item.categoryTitle : ""}`;
      parts.title.textContent = item.title;
      parts.meta.textContent = metaLine(item);
      parts.desc.textContent = item.alt;
      parts.hint.textContent = (item.compare ? "Drag across the maps to compare · " : "") + "← → to move between pieces · Esc to close";
      if (item.compare) initCompare(wrap.firstElementChild);
      parts.story.innerHTML = (item.story && item.story.url
        ? html`<a class="button arrow arrow--ext" href="${item.story.url}" target="_blank" rel="noopener">Read the full story</a>`
        : "") + (item.src ? html`<a class="lightbox__full arrow arrow--ext" href="${item.src}" target="_blank" rel="noopener">Open the image at full size</a>` : "");
      if (window.gsap && !reduceMotion) {
        window.gsap.fromTo(wrap.firstElementChild, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.45, ease: "power3.out" });
      }
    };

    const open = (list, i) => {
      items = list;
      index = i;
      lastFocus = document.activeElement;
      root.hidden = false;
      document.body.classList.add("lightbox-open");
      show();
      root.querySelector(".lightbox__close").focus();
    };
    const close = () => {
      root.hidden = true;
      wrap.innerHTML = "";
      document.body.classList.remove("lightbox-open");
      if (lastFocus) lastFocus.focus();
    };
    const step = (dir) => { index = (index + dir + items.length) % items.length; show(); };

    root.querySelector(".lightbox__close").addEventListener("click", close);
    root.querySelector(".lightbox__nav--prev").addEventListener("click", () => step(-1));
    root.querySelector(".lightbox__nav--next").addEventListener("click", () => step(1));
    root.querySelector(".lightbox__stage").addEventListener("click", (e) => { if (e.target === e.currentTarget) close(); });
    // swipe between pieces on touch screens
    if (window.gsap && window.Observer) {
      window.gsap.registerPlugin(window.Observer);
      window.Observer.create({ target: root.querySelector(".lightbox__stage"), type: "touch", tolerance: 40, ignore: ".compare", onLeft: () => step(1), onRight: () => step(-1) });
    }
    document.addEventListener("keydown", (e) => {
      if (root.hidden) return;
      if (e.key === "Escape") close();
      if (e.target.classList && e.target.classList.contains("compare__range")) return; // the slider uses the arrow keys itself
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    });
    return { open };
  })();

  // ---------- Home ----------

  function renderHero(main) {
    const h = SITE.hero;
    const actions = h.actions.map((a) => html`<a class="button ${a.style === "ghost" ? "button--ghost" : ""} arrow" href="${a.href}">${escapeHtml(a.label)}</a>`).join("");
    main.appendChild(section("hero", html`
      <div class="hero__inner wrap">
        <div>
          <h1 class="hero__title">${h.title}</h1>
          <p class="hero__lead">${escapeHtml(h.lead)}</p>
          <div class="hero__actions">${actions}</div>
        </div>
      </div>`));
  }

  // Every piece on a scattered wall: three columns that drift at different speeds as the page scrolls
  // (js/motion.js); on phones they merge into two (css). A click opens the piece in the lightbox.
  function renderWork(main) {
    const items = allItems();
    const cols = [[], [], []];
    items.forEach((item, i) => cols[i % 3].push(i));
    const colHtml = cols.map((col) => html`
      <div class="wall__col">${col.map((i) => html`
        <figure class="wall__item reveal">
          <button class="wall__btn" type="button" data-index="${i}" aria-label="Open ${escapeHtml(items[i].title)}">${mediaHtml(items[i])}</button>
          <figcaption class="wall__caption"><b>${escapeHtml(items[i].title)}</b>${escapeHtml(metaLine(items[i]))}</figcaption>
        </figure>`).join("")}</div>`).join("");
    const el = section("wall", html`
      <div class="wrap">
        <div class="wall__head"><p class="label">${escapeHtml(SITE.work.label)}</p><p>${escapeHtml(SITE.work.intro)}</p></div>
        <div class="wall__cols">${colHtml}</div>
      </div>`, { id: "work" });
    main.appendChild(el);

    el.addEventListener("click", (e) => {
      const btn = e.target.closest(".wall__btn");
      if (btn) lightbox.open(items, +btn.dataset.index);
    });
    // slider pieces: the split follows the mouse across the picture
    el.addEventListener("pointermove", (e) => {
      const cmp = e.target.closest(".compare");
      if (!cmp || e.pointerType !== "mouse") return;
      const r = cmp.getBoundingClientRect();
      cmp.style.setProperty("--pos", ((e.clientX - r.left) / r.width) * 100 + "%");
    });
    el.addEventListener("pointerout", (e) => {
      const cmp = e.target.closest(".compare");
      if (cmp && !cmp.contains(e.relatedTarget)) cmp.style.setProperty("--pos", "50%");
    });
  }

  function renderStoriesTeaser(main) {
    const t = SITE.storiesTeaser;
    // the three newest stories; on wide screens the cards stick and stack as the page scrolls (see js/motion.js)
    const cards = SITE.stories.items.slice(0, 3).map((story) => storyCardHtml(story, { classes: "story-feature--stack" })).join("");
    const el = section("section section--forest stories-teaser", html`
      <div class="wrap">
        ${sectionHead(t.label, t.title, escapeHtml(t.intro))}
        <div class="stack">${cards}</div>
        <p class="stack__more"><a class="button button--ghost arrow" href="${t.link.href}">${escapeHtml(t.link.label)}</a></p>
      </div>`);
    main.appendChild(el);
    initScrollies(el);
  }

  const accordionHtml = (items) => html`
    <div class="accordion">${items.map((f, i) => html`
      <details class="accordion__item"${i === 0 ? " open" : ""}>
        <summary>${escapeHtml(f.question)}</summary>
        <div class="accordion__body prose">${f.answer.map((p) => html`<p>${p}</p>`).join("")}</div>
      </details>`).join("")}</div>`;

  function renderFaqTeaser(main) {
    const t = SITE.faqTeaser;
    main.appendChild(section("section faq-teaser", html`
      <div class="wrap">
        ${sectionHead(t.label, t.title, html`<a class="arrow" href="${t.link.href}">${escapeHtml(t.link.label)}</a>`)}
        ${accordionHtml(SITE.faqs.items)}
      </div>`));
  }

  function renderContact(main, id = "contact") {
    const c = SITE.contact;
    const el = section("section contact", html`
      <div class="contact__grid wrap">
        <div class="contact__intro">
          <p class="label">${escapeHtml(c.label)}</p>
          <h2>${escapeHtml(c.title)}</h2>
          <div class="prose">${c.intro.join("")}</div>
        </div>
        <div>${contactFormHtml(id)}</div>
      </div>`, { id });
    main.appendChild(el);
    initContactForm(el.querySelector("form"));
  }

  function renderHome(main) {
    renderHero(main);
    renderWork(main);
    renderStoriesTeaser(main);
    renderFaqTeaser(main);
    renderContact(main);
  }

  // ---------- Stories page ----------

  // One story as a card: the picture on the left can turn into the live scrolly (see initScrollies),
  // the box on the right links to the article. Used on the stories page and, stacked, on the home page.
  const storyCardHtml = (story, { lazy = true, classes = "" } = {}) => html`
      <article class="story-feature ${classes}" data-embed="${story.embed || ""}" data-title="${escapeHtml(story.title)}">
        <div class="story-feature__media">
          <img src="${story.image.src}" width="${story.image.width}" height="${story.image.height}" alt="${escapeHtml(story.image.alt)}" ${lazy ? 'loading="lazy"' : ""} decoding="async">
          ${story.embed ? html`<button class="story-feature__start" type="button"><span aria-hidden="true">▶</span> Click to start this scrolly</button>` : ""}
        </div>
        <div class="story-feature__body">
          <p class="label">${escapeHtml(story.outlet)} · ${formatDate(story.date)}</p>
          <h2 class="story-feature__title">${escapeHtml(story.title)}</h2>
          <p class="story-feature__deck">${escapeHtml(story.deck)}</p>
          <p class="story-feature__actions">
            <a class="button arrow arrow--ext" href="${story.url}" target="_blank" rel="noopener">Read the full story</a>
            ${story.extra ? html`<a class="story-feature__extra" href="${story.extra.url}" target="_blank" rel="noopener">${escapeHtml(story.extra.label)} ↗</a>` : ""}
          </p>
        </div>
      </article>`;

  // "Click to start this scrolly": the card grows to fill the screen and the picture becomes the live story.
  // While the pointer is over the story, the page itself stays still, so scrolling drives the scrolly;
  // outside it, the page scrolls on as usual. One story plays at a time.
  function initScrollies(root) {
    let active = null;
    const lock = (on) => document.documentElement.classList.toggle("scrolly-lock", on);

    const stop = (card) => {
      const media = card.querySelector(".story-feature__media");
      media.querySelector("iframe")?.remove();
      media.querySelector(".story-feature__close")?.remove();
      card.classList.remove("is-active");
      lock(false);
      if (active === card) active = null;
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    };

    const start = (card) => {
      if (active) stop(active);
      active = card;
      const media = card.querySelector(".story-feature__media");
      const frame = document.createElement("iframe");
      frame.src = card.dataset.embed;
      frame.title = `${card.dataset.title}: scrollytelling story`;
      frame.allow = "fullscreen";
      // the lock waits until the page has finished scrolling the card into view
      let settling = true;
      frame.addEventListener("pointerenter", () => { if (!settling) lock(true); });
      frame.addEventListener("pointerleave", () => lock(false));
      setTimeout(() => { settling = false; if (active === card && frame.matches(":hover")) lock(true); }, 900);
      const close = document.createElement("button");
      close.type = "button";
      close.className = "story-feature__close";
      close.innerHTML = '<span aria-hidden="true">×</span> Close the scrolly';
      close.addEventListener("click", () => { stop(card); card.querySelector(".story-feature__start").focus(); });
      media.append(frame, close);
      card.classList.add("is-active");
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
      // bring the whole card into view, just below the header
      const header = document.getElementById("site-header");
      const top = card.getBoundingClientRect().top + window.scrollY - (header ? header.offsetHeight : 0) - 16;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
      frame.focus({ preventScroll: true });
    };

    root.addEventListener("click", (e) => {
      const btn = e.target.closest(".story-feature__start");
      if (btn) start(btn.closest(".story-feature"));
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && active) stop(active); });
  }


  function renderStories(main) {
    const s = SITE.stories;
    main.appendChild(section("stories-hero", html`
      <div class="wrap">
        <p class="label">${escapeHtml(s.label)}</p>
        <h1>${escapeHtml(s.title)}</h1>
        <p class="lead prose">${escapeHtml(s.lead)}</p>
      </div>`));

    const cards = s.items.map((story, i) => storyCardHtml(story, { lazy: i > 0, classes: "reveal" })).join("");
    const list = section("section stories", html`<div class="wrap story-features">${cards}</div>`);
    main.appendChild(list);
    initScrollies(list);

    const threeDCards = s.interactive.items.map((item) => html`
      <a class="story-card reveal" href="${item.url}" target="_blank" rel="noopener">
        ${mediaHtml(item)}
        <div class="story-card__body">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.alt)}</p>
          <span class="story-card__meta">${escapeHtml(item.client)}</span>
        </div>
      </a>`).join("");
    main.appendChild(section("section section--forest interactive", html`
      <div class="wrap">
        ${sectionHead(s.interactive.label, s.interactive.title, escapeHtml(s.interactive.intro))}
        <div class="story-cards">${threeDCards}</div>
      </div>`));
  }

  // ---------- Inner pages ----------

  function renderServices(main) {
    const s = SITE.services;
    main.appendChild(section("page-section", html`
      <div class="page-grid wrap">
        <h1 class="page-title">${escapeHtml(s.label)}<small>${escapeHtml(s.intro)}</small></h1>
        <div>
          <p class="lead prose">${escapeHtml(s.title)}</p>
          <ul class="services__list">${s.groups.map((g) => html`<li><h3>${escapeHtml(g.title)}</h3><ul>${g.items.map((i) => html`<li>${escapeHtml(i)}</li>`).join("")}</ul></li>`).join("")}</ul>
          <h2 class="faq__question">${escapeHtml(s.howTitle)}</h2>
          <div class="prose">${s.how.map((p) => html`<p>${escapeHtml(p)}</p>`).join("")}</div>
          <p class="page-cta"><a class="button arrow" href="${s.cta.href}">${escapeHtml(s.cta.label)}</a></p>
        </div>
      </div>`));
  }

  function renderFaqs(main) {
    const f = SITE.faqs;
    main.appendChild(section("page-section", html`
      <div class="page-grid wrap">
        <h1 class="page-title">${escapeHtml(f.label)}<small>${escapeHtml(f.title)}</small></h1>
        <div class="prose">${f.items.map((q) => html`<h2 class="faq__question">${escapeHtml(q.question)}</h2>${q.answer.map((p) => html`<p>${p}</p>`).join("")}`).join("")}</div>
      </div>`));
  }

  function renderContactPage(main) {
    renderContact(main, "contact");
    main.firstElementChild.classList.add("page-section");
  }

  // ---------- Init ----------

  const renderers = { home: renderHome, stories: renderStories, services: renderServices, faqs: renderFaqs, contact: renderContactPage };
  renderHeader();
  (renderers[page] || renderHome)(document.getElementById("main"));
  renderFooter();

  // back-to-top button, shown once the page has scrolled a screen and a half
  const toTop = document.createElement("button");
  toTop.className = "to-top";
  toTop.type = "button";
  toTop.setAttribute("aria-label", "Back to top");
  toTop.textContent = "↑";
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  document.body.appendChild(toTop);
  window.addEventListener("scroll", () => toTop.classList.toggle("is-visible", window.scrollY > window.innerHeight * 1.5), { passive: true });

  // Links to a section (index.html#work) land after rendering, below the sticky header
  if (location.hash) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) requestAnimationFrame(() => target.scrollIntoView());
  }

  document.dispatchEvent(new CustomEvent("site:rendered"));
})();
