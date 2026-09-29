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

  // Media markup for the work grid and story cards: the 800 px thumb when there is one, the full file in the lightbox
  const mediaHtml = (item) =>
    item.video
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
        <p class="lightbox__hint">← → to move between pieces · Esc to close</p>
      </aside>`;
    document.body.appendChild(root);

    const wrap = root.querySelector(".lightbox__media-wrap");
    const parts = {
      counter: root.querySelector(".lightbox__counter"),
      title: root.querySelector("h2"),
      meta: root.querySelector(".lightbox__meta"),
      desc: root.querySelector(".lightbox__desc"),
      story: root.querySelector(".lightbox__story")
    };

    const show = () => {
      const item = items[index];
      wrap.innerHTML = item.video
        ? html`<video class="lightbox__media" src="${item.video}" poster="${item.poster}" ${reduceMotion ? "" : "autoplay"} controls muted loop playsinline aria-label="${escapeHtml(item.alt)}"></video>`
        : html`<img class="lightbox__media" src="${item.src}" width="${item.width}" height="${item.height}" alt="${escapeHtml(item.alt)}" decoding="async">`;
      parts.counter.textContent = `${index + 1} / ${items.length}${item.categoryTitle ? " · " + item.categoryTitle : ""}`;
      parts.title.textContent = item.title;
      parts.meta.textContent = metaLine(item);
      parts.desc.textContent = item.alt;
      parts.story.innerHTML = (item.story && item.story.url
        ? html`<a class="button arrow arrow--ext" href="${item.story.url}" target="_blank" rel="noopener">Read the story</a>`
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
      window.Observer.create({ target: root.querySelector(".lightbox__stage"), type: "touch", tolerance: 40, onLeft: () => step(1), onRight: () => step(-1) });
    }
    document.addEventListener("keydown", (e) => {
      if (root.hidden) return;
      if (e.key === "Escape") close();
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

  function renderWork(main) {
    const items = allItems();
    const cats = SITE.portfolio.map((s) => ({ id: s.id, title: s.title, count: s.items.length }));
    const chips = [{ id: "all", title: "All", count: items.length }, ...cats]
      .map((c) => html`<button class="chip" type="button" data-cat="${c.id}" aria-pressed="${c.id === "all"}">${escapeHtml(c.title)}<span class="chip__count">${c.count}</span></button>`)
      .join("");
    const cards = items.map((item, i) => html`
      <article class="card reveal" data-cat="${item.category}" data-index="${i}">
        <button class="card__media" type="button" aria-label="Open ${escapeHtml(item.title)}">${mediaHtml(item)}</button>
        <div class="card__body">
          <h3 class="card__title">${escapeHtml(item.title)}</h3>
          <p class="card__meta">${escapeHtml(metaLine(item))}${item.story && item.story.url ? html` · <a href="${item.story.url}" target="_blank" rel="noopener">Story ↗</a>` : ""}</p>
        </div>
      </article>`).join("");

    const el = section("section work", html`
      <div class="wrap">
        ${sectionHead(SITE.work.label, SITE.work.title, escapeHtml(SITE.work.intro))}
        <div class="chips chips--sticky" role="group" aria-label="Filter by type"><div class="chips__row">${chips}</div></div>
        <p class="label work__blurb" aria-live="polite"></p>
        <div class="work-grid">${cards}</div>
        <p class="work-more"><button class="button button--ghost" type="button">${escapeHtml(SITE.work.showMore.replace("{count}", items.length))}</button></p>
      </div>`, { id: "work" });
    main.appendChild(el);

    const grid = el.querySelector(".work-grid");
    const blurb = el.querySelector(".work__blurb");
    const more = el.querySelector(".work-more");
    const cardEls = [...grid.querySelectorAll(".card")];
    const visibleItems = () => cardEls.filter((c) => !c.hidden).map((c) => items[+c.dataset.index]);
    const initial = SITE.work.initial || items.length;
    let expanded = initial >= items.length;
    let current = "all";

    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".card__media");
      if (!btn) return;
      const list = visibleItems();
      const item = items[+btn.closest(".card").dataset.index];
      lightbox.open(list, list.indexOf(item));
    });

    const applyFilter = (cat) => {
      current = cat;
      const Flip = window.Flip;
      const state = Flip && !reduceMotion ? Flip.getState(cardEls) : null;
      let shownCount = 0;
      cardEls.forEach((c) => {
        const inCat = cat === "all" || c.dataset.cat === cat;
        // "All" starts with a first page of cards; the button below the grid opens the rest
        c.hidden = !inCat || (cat === "all" && !expanded && shownCount >= initial);
        if (!c.hidden) shownCount++;
      });
      more.hidden = !(cat === "all" && !expanded);
      const sec = SITE.portfolio.find((s) => s.id === cat);
      blurb.textContent = sec ? sec.blurb : "";
      el.querySelectorAll(".chip").forEach((chip) => chip.setAttribute("aria-pressed", String(chip.dataset.cat === cat)));
      if (state) {
        const shown = cardEls.filter((c) => !c.hidden);
        Flip.from(state, {
          duration: 0.55, ease: "power2.inOut", stagger: 0.012, absolute: false,
          onEnter: (els) => window.gsap.fromTo(els, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }),
          onLeave: (els) => window.gsap.to(els, { opacity: 0, duration: 0.25 }),
          onComplete: () => {
            // cards that had not scrolled into view yet would otherwise keep their hidden reveal state
            window.gsap.set(shown, { opacity: 1, y: 0 });
            if (window.ScrollTrigger) window.ScrollTrigger.refresh();
          }
        });
      }
    };
    el.querySelector(".chips").addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (chip) applyFilter(chip.dataset.cat);
    });
    more.querySelector("button").addEventListener("click", () => { expanded = true; applyFilter(current); });
    applyFilter("all");
  }

  function renderStoriesTeaser(main) {
    const t = SITE.storiesTeaser;
    const latest = SITE.stories.items.slice(0, 3);
    // on wide screens the cards stick and stack as the page scrolls (see js/motion.js)
    const cards = latest.map((story) => html`
      <a class="stack__card" href="${story.url}" target="_blank" rel="noopener">
        <img src="${story.image.src}" width="${story.image.width}" height="${story.image.height}" alt="${escapeHtml(story.image.alt)}" loading="lazy" decoding="async">
        <span class="stack__body">
          <span class="label">${escapeHtml(story.outlet)} · ${formatDate(story.date)}</span>
          <span class="stack__title">${escapeHtml(story.title)}</span>
          <span class="stack__deck">${escapeHtml(story.deck)}</span>
          <span class="story-row__cta arrow arrow--ext">Read the story</span>
        </span>
      </a>`).join("");
    main.appendChild(section("section section--forest stories-teaser", html`
      <div class="wrap">
        ${sectionHead(t.label, t.title, escapeHtml(t.intro))}
        <div class="stack">${cards}</div>
        <p class="stack__more"><a class="button button--ghost arrow" href="${t.link.href}">${escapeHtml(t.link.label)}</a></p>
      </div>`));
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

  function renderStories(main) {
    const s = SITE.stories;
    const latest = s.items[0];
    main.appendChild(section("stories-hero", html`
      <div class="wrap">
        <p class="label">${escapeHtml(s.label)}</p>
        <h1>${escapeHtml(s.title)}</h1>
        <p class="lead prose">${escapeHtml(s.lead)}</p>
        <a class="story-feature" href="${latest.url}" target="_blank" rel="noopener">
          <img src="${latest.image.src}" width="${latest.image.width}" height="${latest.image.height}" alt="${escapeHtml(latest.image.alt)}" decoding="async">
          <span class="story-feature__body">
            <span class="label">Latest · ${escapeHtml(latest.outlet)} · ${formatDate(latest.date)}</span>
            <span class="story-feature__title">${escapeHtml(latest.title)}</span>
            <span class="story-feature__deck">${escapeHtml(latest.deck)}</span>
            <span class="story-row__cta arrow arrow--ext">Read the story</span>
          </span>
        </a>
      </div>`));

    const rows = s.items.map((story, i) => html`
      <li class="story-row reveal" data-image="${story.image.src}">
        <a class="story-row__link" href="${story.url}" target="_blank" rel="noopener">
          <span class="story-row__index">${String(i + 1).padStart(2, "0")}</span>
          <div>
            <h2 class="story-row__title">${escapeHtml(story.title)}</h2>
            <p class="story-row__deck">${escapeHtml(story.deck)}</p>
            <p class="story-row__meta">${escapeHtml(story.outlet)} · ${formatDate(story.date)} · ${escapeHtml(story.tools)}</p>
          </div>
          <span class="story-row__cta arrow arrow--ext">Read the story</span>
          <img class="story-row__thumb" src="${story.image.src}" width="${story.image.width}" height="${story.image.height}" alt="${escapeHtml(story.image.alt)}" loading="lazy">
        </a>
        ${story.extra ? html`<p class="story-row__extra"><a href="${story.extra.url}" target="_blank" rel="noopener">${escapeHtml(story.extra.label)} ↗</a></p>` : ""}
      </li>`).join("");
    main.appendChild(section("section stories", html`
      <div class="wrap">
        <ol class="story-list">${rows}</ol>
      </div>
      <div class="story-preview" aria-hidden="true"><img alt="" width="1500" height="867"></div>`));

    const threeD = allItems().filter((i) => i.category === "3d-maps");
    const cards = threeD.map((item) => html`
      <a class="story-card reveal" href="${item.story ? item.story.url : "#"}" target="_blank" rel="noopener">
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
        <div class="story-cards">${cards}</div>
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
