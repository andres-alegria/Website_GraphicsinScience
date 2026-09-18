/*
  Page rendering and interactions.
  Content comes from js/site-data.js (window.SITE); visual styling lives in css/style.css.
*/
(function () {
  "use strict";

  const SITE = window.SITE;
  const page = document.body.dataset.page || "portfolio";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Helpers ----------

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const createSection = (classes, attrs = {}) => {
    const section = document.createElement("section");
    section.className = `section ${classes}`;
    Object.entries(attrs).forEach(([key, value]) => section.setAttribute(key, value));
    return section;
  };

  const setDivider = (section, divider) => {
    if (divider) section.dataset.divider = JSON.stringify(divider);
  };

  const navLabel = (pageKey) => (SITE.nav.find((item) => item.page === pageKey) || {}).label || "";

  // ---------- Header ----------

  function renderHeader() {
    const header = document.getElementById("site-header");
    const links = SITE.nav
      .map((item) => `<a href="${item.href}"${item.page === page ? ' aria-current="page"' : ""}>${escapeHtml(item.label)}</a>`)
      .join("");
    const social = SITE.social
      .map((item) => `<a class="social-link" href="${item.href}" target="_blank" rel="noopener" aria-label="${escapeHtml(item.label)}"><span aria-hidden="true">${escapeHtml(item.text)}</span></a>`)
      .join("");

    header.innerHTML = `
      <div class="header-inner">
        <a class="site-title" href="index.html">${escapeHtml(SITE.title)}</a>
        <nav class="site-nav" aria-label="Main">${links}</nav>
        <div class="header-social">${social}</div>
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
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !menu.hidden) setOpen(false);
    });
  }

  // ---------- Footer ----------

  function renderFooter() {
    const footer = document.getElementById("site-footer");
    footer.className = "section section--fx site-footer";
    footer.innerHTML = `<p class="footer-title">${escapeHtml(SITE.footer.title)}</p>`;
  }

  // ---------- Shared blocks ----------

  function marqueeHtml(words) {
    const group = words
      .map((word) => `<span class="marquee__item">${escapeHtml(word)}</span><span class="marquee__sep">•</span>`)
      .join("");
    // Each group repeats the words so the loop stays seamless on wide screens
    return `
      <p class="visually-hidden">${escapeHtml(words.join(", "))}</p>
      <div class="marquee" aria-hidden="true">
        <div class="marquee__track">
          <div class="marquee__group">${group}${group}</div>
          <div class="marquee__group">${group}${group}</div>
        </div>
      </div>`;
  }

  function contactFormHtml(idPrefix) {
    const f = SITE.contactForm;
    return `
      <form class="contact-form">
        <p class="contact-form__heading"><strong>${escapeHtml(f.heading)}</strong></p>
        <div class="field">
          <label for="${idPrefix}-email">${escapeHtml(f.emailLabel)} <span class="field__required">(required)</span></label>
          <input id="${idPrefix}-email" name="email" type="email" autocomplete="email" required>
        </div>
        <div class="field">
          <label for="${idPrefix}-message">${escapeHtml(f.messageLabel)} <span class="field__required">(required)</span></label>
          <textarea id="${idPrefix}-message" name="message" rows="4" required></textarea>
        </div>
        <button class="button" type="submit">${escapeHtml(f.submitLabel)}</button>
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
        Object.entries(f.hiddenFields || {}).forEach(([key, value]) => data.append(key, value));
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
        const subject = encodeURIComponent(f.mailSubject);
        const body = encodeURIComponent(`${data.get("message")}\n\n${data.get("email")}`);
        window.location.href = `mailto:${f.email}?subject=${subject}&body=${body}`;
      } else {
        status.textContent = f.notConnectedMessage;
      }
    });
  }

  function carouselHtml(section) {
    // Short lists repeat so the carousel still looks full, as on the original site
    const slides = section.items.map((item) => ({ item, clone: false }));
    while (slides.length < 4) {
      section.items.forEach((item) => slides.push({ item, clone: true }));
    }

    // Screen recordings are served as muted looping video instead of a heavy GIF
    const mediaHtml = (item, clone) =>
      item.video
        ? `<video src="${item.video}" poster="${item.poster}" width="${item.width}" height="${item.height}"
            ${reduceMotion ? "controls" : "autoplay"} muted loop playsinline preload="metadata"
            ${clone ? 'aria-hidden="true"' : `aria-label="${escapeHtml(item.alt)}"`}></video>`
        : `<img src="${item.src}" width="${item.width}" height="${item.height}" alt="${clone ? "" : escapeHtml(item.alt)}" loading="lazy" decoding="async">`;

    const slideHtml = slides
      .map(({ item, clone }) => `
        <li class="carousel__slide"${clone ? ' aria-hidden="true"' : ""}>
          <figure>
            ${mediaHtml(item, clone)}
            ${item.caption ? `<figcaption class="carousel__caption">${item.caption}</figcaption>` : ""}
          </figure>
        </li>`)
      .join("");

    const arrow = (direction) => `
      <button class="carousel__arrow carousel__arrow--${direction}" type="button" aria-label="${direction === "prev" ? "Previous" : "Next"} image">
        <svg viewBox="0 0 44 18" aria-hidden="true" focusable="false">
          ${direction === "prev"
            ? '<path d="M9.9 16.96 2.12 9.18 9.9 1.39M42.86 9.18H3.38"/>'
            : '<path d="M34.1 1.04l7.78 7.78-7.78 7.79M1.14 8.82h39.48"/>'}
        </svg>
      </button>`;

    return `
      <div class="carousel" role="region" aria-roledescription="carousel" aria-label="${escapeHtml(section.title)}">
        <div class="carousel__viewport" tabindex="0">
          <ul class="carousel__track">${slideHtml}</ul>
        </div>
        ${arrow("prev")}
        ${arrow("next")}
      </div>`;
  }

  function initCarousel(root) {
    const viewport = root.querySelector(".carousel__viewport");
    const slides = [...root.querySelectorAll(".carousel__slide")];
    const behavior = reduceMotion ? "auto" : "smooth";

    const maxScroll = () => viewport.scrollWidth - viewport.clientWidth;
    const step = () => (slides[1] ? slides[1].offsetLeft - slides[0].offsetLeft : viewport.clientWidth);

    // Arrows wrap around at either end
    const go = (direction) => {
      const x = viewport.scrollLeft;
      if (direction > 0 && x >= maxScroll() - 2) viewport.scrollTo({ left: 0, behavior });
      else if (direction < 0 && x <= 2) viewport.scrollTo({ left: maxScroll(), behavior });
      else viewport.scrollBy({ left: direction * step(), behavior });
    };

    root.querySelector(".carousel__arrow--prev").addEventListener("click", () => go(-1));
    root.querySelector(".carousel__arrow--next").addEventListener("click", () => go(1));
    viewport.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        go(event.key === "ArrowRight" ? 1 : -1);
      }
    });

    // Centre the arrows on the tallest image
    const layout = () => {
      const tallest = Math.max(...slides.map((slide) => slide.querySelector("img, video").offsetHeight));
      root.style.setProperty("--arrow-top", `${tallest / 2}px`);
      root.classList.toggle("is-static", maxScroll() < 4);
    };
    layout();
    window.addEventListener("resize", layout);
  }

  // ---------- Section edges ----------

  // Cuts each section's bottom edge along its divider line and lets the next section show underneath
  function applyDividers() {
    const sections = [...document.querySelectorAll("#main > .section, #site-footer")];
    sections.forEach((section, i) => {
      section.style.zIndex = String(sections.length - i);
    });

    sections.forEach((section, i) => {
      if (!section.dataset.divider) return;
      const { height, points } = JSON.parse(section.dataset.divider);
      const sorted = [...points].sort((a, b) => a[0] - b[0]);

      const edge = [...sorted]
        .reverse()
        .map(([x, y]) => `${x}% calc(100% - ${height} * ${(1 - y).toFixed(3)} + 1px)`);
      section.style.clipPath = `polygon(0 0, 100% 0, ${edge.join(", ")})`;
      section.style.setProperty("--divider-h", height);

      section.insertAdjacentHTML(
        "beforeend",
        `<svg class="divider-stroke" style="height:${height}" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <polyline points="${sorted.map(([x, y]) => `${x},${(y * 100).toFixed(1)}`).join(" ")}"/>
        </svg>`
      );

      const next = sections[i + 1];
      if (next) next.style.setProperty("--divider-above", height);
    });
  }

  // ---------- Pages ----------

  function renderPortfolio(main) {
    const home = SITE.home;

    const intro = createSection("section--fx section--intro");
    intro.innerHTML = `
      <h1 class="visually-hidden">${escapeHtml(SITE.title)}</h1>
      ${marqueeHtml(home.marquee)}
      <div class="intro-text">${home.intro.map((html) => `<div class="intro-text__col">${html}</div>`).join("")}</div>`;
    setDivider(intro, home.introDivider);
    main.appendChild(intro);

    SITE.portfolio.forEach((item, i) => {
      const section = createSection(`section--${item.theme} section--carousel`, {
        id: `section-${item.id}`,
        "aria-labelledby": `title-${item.id}`
      });
      section.innerHTML = `<h2 class="section-title" id="title-${item.id}">${escapeHtml(item.title)}</h2>${carouselHtml(item)}`;
      setDivider(section, item.divider);
      main.appendChild(section);
    });

    const contact = createSection("section--white section--home-contact");
    contact.innerHTML = contactFormHtml("home");
    setDivider(contact, home.contactDivider);
    main.appendChild(contact);
    initContactForm(contact.querySelector("form"));
  }

  function renderFaqs(main) {
    const faqs = SITE.faqs;
    const section = createSection("section--white section--grid section--faqs");
    section.innerHTML = `
      <div class="grid">
        <h1 class="page-title faqs__title">${escapeHtml(faqs.title)}</h1>
        <div class="faqs__list prose">
          ${faqs.items
            .map((item) => `<h2 class="faq__question">${escapeHtml(item.question)}</h2>${item.answer.map((p) => `<p>${p}</p>`).join("")}`)
            .join("")}
        </div>
      </div>`;
    main.appendChild(section);
  }

  function renderContact(main) {
    const contact = SITE.contact;
    const section = createSection("section--white section--grid section--contact");
    section.innerHTML = `
      <h1 class="visually-hidden">${escapeHtml(navLabel("contact"))}</h1>
      <div class="grid">
        <div class="contact__intro prose">${contact.intro.join("")}</div>
        <div class="contact__form">${contactFormHtml("contact")}</div>
      </div>`;
    setDivider(section, contact.divider);
    main.appendChild(section);
    initContactForm(section.querySelector("form"));
  }

  function renderAbout(main) {
    const about = SITE.about;
    const section = createSection("section--white section--grid section--about");
    section.innerHTML = `
      <h1 class="visually-hidden">${escapeHtml(about.title)}</h1>
      <div class="grid about">
        <div class="about__text prose">${about.text.join("")}</div>
        <figure class="about__photo">
          <img src="${about.photo.src}" width="${about.photo.width}" height="${about.photo.height}" alt="${escapeHtml(about.photo.alt)}">
        </figure>
      </div>`;
    main.appendChild(section);
  }

  function renderServices(main) {
    const services = SITE.services;
    const section = createSection("section--white section--grid section--services");
    section.innerHTML = `
      <div class="grid">
        <h1 class="page-title services__title">${escapeHtml(services.title)}</h1>
        <div class="services__text prose">${services.html}</div>
      </div>`;
    main.appendChild(section);
  }

  // ---------- Init ----------

  const renderers = {
    portfolio: renderPortfolio,
    faqs: renderFaqs,
    contact: renderContact,
    about: renderAbout,
    services: renderServices
  };

  renderHeader();
  (renderers[page] || renderPortfolio)(document.getElementById("main"));
  renderFooter();
  applyDividers();
  document.querySelectorAll(".carousel").forEach(initCarousel);

  // Honour links to a section (e.g. index.html#portfolio) after rendering
  if (location.hash) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView();
  }
})();
