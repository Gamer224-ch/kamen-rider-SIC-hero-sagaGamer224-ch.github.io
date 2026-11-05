/* ============================================================
   Kamen Rider S.I.C. — Interactividad general
   (menú móvil, tema, idioma, carrusel, tarjetas, modal,
    búsqueda, filtro, acordeón, formulario, scroll-top)
   ============================================================ */

(function () {
  "use strict";

  /* ---------- utilidades ---------- */
  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function episodesLabel(n) {
    const lang = getLang();
    const word = n === 1
      ? ((I18N[lang] && I18N[lang]["stories.episode"]) || "episodio")
      : ((I18N[lang] && I18N[lang]["stories.episodes"]) || "episodios");
    return n + " " + word;
  }

  /* ---------- tarjeta de historia ---------- */
  function storyCardHTML(story, lang) {
    const series = seriesById(story.series);
    const seriesName = series ? (series.name[lang] || series.name.es) : "";
    return (
      '<article class="story-card group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-red-500/40 dark:border-zinc-800 dark:bg-zinc-900">' +
        '<button type="button" data-open-modal="' + story.id + '" class="absolute inset-0 z-10 cursor-pointer" aria-label="' + escapeHTML(story.title[lang]) + '"></button>' +
        '<div class="relative aspect-[3/4] overflow-hidden bg-zinc-100 dark:bg-zinc-800">' +
          '<img src="' + story.cover + '" alt="' + escapeHTML(story.title[lang]) + '" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />' +
          '<span class="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide shadow ' + (series ? series.badge : "bg-zinc-600 text-white") + '">' + escapeHTML(seriesName) + '</span>' +
          '<div class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent"></div>' +
          '<span class="absolute bottom-3 left-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">' + episodesLabel(story.episodes.length) + '</span>' +
        '</div>' +
        '<div class="flex flex-1 flex-col gap-2 p-4">' +
          '<h3 class="font-display text-lg leading-tight text-zinc-900 dark:text-white">' + escapeHTML(story.title[lang]) + '</h3>' +
          '<p class="line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">' + escapeHTML(story.synopsis[lang]) + '</p>' +
          '<span class="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-red-600 dark:text-red-400">' +
            '<span data-i18n="stories.readSynopsis">' + escapeHTML(t("stories.readSynopsis")) + '</span>' +
            '<svg class="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>' +
          '</span>' +
        '</div>' +
      '</article>'
    );
  }

  /* ---------- modal ---------- */
  function ensureModal() {
    if (document.getElementById("story-modal")) return;
    const modal = document.createElement("div");
    modal.id = "story-modal";
    modal.className = "fixed inset-0 z-50 hidden items-center justify-center p-4";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML =
      '<div data-modal-backdrop class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>' +
      '<div class="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-900">' +
        '<button type="button" data-modal-close class="absolute right-3 top-3 z-10 rounded-full bg-black/50 p-2 text-white transition hover:bg-red-600" aria-label="' + escapeHTML(t("modal.close")) + '">' +
          '<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/></svg>' +
        '</button>' +
        '<div data-modal-body></div>' +
      '</div>';
    document.body.appendChild(modal);

    modal.querySelector("[data-modal-close]").addEventListener("click", closeStoryModal);
    modal.querySelector("[data-modal-backdrop]").addEventListener("click", closeStoryModal);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeStoryModal();
    });
  }

  function openStoryModal(id) {
    const story = STORIES.find(function (s) { return s.id === id; });
    if (!story) return;
    ensureModal();
    const lang = getLang();
    const series = seriesById(story.series);
    const modal = document.getElementById("story-modal");
    const body = modal.querySelector("[data-modal-body]");

    const episodeList = story.episodes.map(function (ep, i) {
      return (
        '<li class="flex items-center gap-3 rounded-lg bg-zinc-50 px-3 py-2 dark:bg-zinc-800/60">' +
          '<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white">' + (i + 1) + '</span>' +
          '<span class="text-sm text-zinc-700 dark:text-zinc-300">' + escapeHTML(ep) + '</span>' +
        '</li>'
      );
    }).join("");

    body.innerHTML =
      '<div class="grid grid-cols-1 sm:grid-cols-5">' +
        '<div class="relative sm:col-span-2">' +
          '<img src="' + story.cover + '" alt="' + escapeHTML(story.title[lang]) + '" class="h-56 w-full object-cover sm:h-full sm:rounded-l-2xl" />' +
        '</div>' +
        '<div class="flex flex-col gap-4 p-5 sm:col-span-3 sm:p-6">' +
          '<div>' +
            '<span class="inline-block rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ' + (series ? series.badge : "bg-zinc-600 text-white") + '">' + escapeHTML(series ? (series.name[lang] || series.name.es) : "") + '</span>' +
            '<h3 class="mt-3 font-display text-2xl text-zinc-900 dark:text-white sm:text-3xl">' + escapeHTML(story.title[lang]) + '</h3>' +
          '</div>' +
          '<p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">' + escapeHTML(story.synopsis[lang]) + '</p>' +
          '<div>' +
            '<h4 class="mb-2 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400" data-i18n="modal.episodes">' + escapeHTML(t("modal.episodes")) + ' <span class="font-normal normal-case">(' + episodesLabel(story.episodes.length) + ')</span></h4>' +
            '<ul class="grid grid-cols-1 gap-1.5">' + episodeList + '</ul>' +
          '</div>' +
          '<a href="' + escapeHTML(story.original) + '" target="_blank" rel="noopener noreferrer" class="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-bold text-white shadow transition hover:bg-red-700">' +
            '<span data-i18n="modal.readOriginal">' + escapeHTML(t("modal.readOriginal")) + '</span>' +
            '<svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M5.5 4.5A2.5 2.5 0 013 7v7.5A2.5 2.5 0 015.5 17H13a2.5 2.5 0 012.5-2.5V9A2.5 2.5 0 0013 6.5H6.5a1 1 0 00-1 1v6.25a1.25 1.25 0 002.5 0V9.5a.75.75 0 011.5 0v5.25a2.75 2.75 0 01-5.5 0V7.5a2.5 2.5 0 012.5-2.5h5A2.5 2.5 0 0116.5 7.5V15a2.5 2.5 0 01-2.5 2.5H5.5a.75.75 0 000 1.5h8.5A4 4 0 0018 15V7.5a4 4 0 00-4-4H5.5z"/></svg>' +
          '</a>' +
        '</div>' +
      '</div>';

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeStoryModal() {
    const modal = document.getElementById("story-modal");
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  /* ---------- render: stats (inicio) ---------- */
  function renderStats() {
    const storiesEl = document.querySelector("[data-stat-stories]");
    if (storiesEl) storiesEl.textContent = STORIES.length;
    const seriesEl = document.querySelector("[data-stat-series]");
    if (seriesEl) seriesEl.textContent = SERIES.length;
    const episodesEl = document.querySelector("[data-stat-episodes]");
    if (episodesEl) episodesEl.textContent = totalEpisodes();
    const coversEl = document.querySelector("[data-stat-covers]");
    if (coversEl) coversEl.textContent = STORIES.length;
  }

  /* ---------- render: carrusel destacado (inicio) ---------- */
  function renderFeatured() {
    const track = document.querySelector("[data-carousel-track]");
    if (!track) return;
    const lang = getLang();
    const featured = STORIES.filter(function (s) { return s.featured; });
    if (featured.length === 0) return;

    track.innerHTML = featured.map(function (s) {
      return '<div class="carousel-slide w-full shrink-0 snap-start sm:w-1/2 lg:w-1/3 xl:w-1/4">' + storyCardHTML(s, lang) + '</div>';
    }).join("");

    // Dots
    const dots = document.querySelector("[data-carousel-dots]");
    if (dots) {
      dots.innerHTML = featured.map(function (s, i) {
        return '<button type="button" data-dot="' + i + '" class="h-2.5 w-2.5 rounded-full bg-zinc-300 transition-all dark:bg-zinc-600" aria-label="Ir a la diapositiva ' + (i + 1) + '"></button>';
      }).join("");
      updateDots(0);
    }
  }

  function updateDots(index) {
    const dots = document.querySelectorAll("[data-dot]");
    dots.forEach(function (d, i) {
      if (i === index) {
        d.className = "h-2.5 w-6 rounded-full bg-red-600 transition-all";
      } else {
        d.className = "h-2.5 w-2.5 rounded-full bg-zinc-300 transition-all dark:bg-zinc-600";
      }
    });
  }

  function initCarousel() {
    const track = document.querySelector("[data-carousel-track]");
    if (!track) return;
    const prev = document.querySelector("[data-carousel-prev]");
    const next = document.querySelector("[data-carousel-next]");

    function scrollStep(dir) {
      const slide = track.querySelector(".carousel-slide");
      const width = slide ? slide.getBoundingClientRect().width + 16 : 300;
      track.scrollBy({ left: dir * width, behavior: "smooth" });
    }

    if (prev) prev.addEventListener("click", function () { scrollStep(-1); });
    if (next) next.addEventListener("click", function () { scrollStep(1); });

    track.addEventListener("scroll", function () {
      const slide = track.querySelector(".carousel-slide");
      if (!slide) return;
      const width = slide.getBoundingClientRect().width + 16;
      const index = Math.round(track.scrollLeft / width);
      updateDots(index);
    });

    const dotsWrap = document.querySelector("[data-carousel-dots]");
    if (dotsWrap) {
      dotsWrap.addEventListener("click", function (e) {
        const btn = e.target.closest("[data-dot]");
        if (!btn) return;
        const slide = track.querySelector(".carousel-slide");
        const width = slide ? slide.getBoundingClientRect().width + 16 : 300;
        track.scrollTo({ left: parseInt(btn.getAttribute("data-dot"), 10) * width, behavior: "smooth" });
      });
    }
  }

  /* ---------- render: vista previa de series (inicio) ---------- */
  function renderSeriesPreview() {
    const wrap = document.querySelector("[data-series-preview]");
    if (!wrap) return;
    const lang = getLang();
    wrap.innerHTML = SERIES.map(function (s) {
      const count = storiesBySeries(s.id).length;
      const first = storiesBySeries(s.id)[0];
      return (
        '<a href="series.html#' + s.id + '" class="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-3 transition hover:border-red-500/40 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">' +
          (first ? '<span class="h-11 w-11 shrink-0 overflow-hidden rounded-lg"><img src="' + first.cover + '" alt="" class="h-full w-full object-cover" /></span>' : '') +
          '<span class="min-w-0">' +
            '<span class="block truncate text-sm font-semibold text-zinc-800 dark:text-zinc-100">' + escapeHTML(s.name[lang] || s.name.es) + '</span>' +
            '<span class="block text-xs text-zinc-500 dark:text-zinc-400">' + count + ' ' + escapeHTML(count === 1 ? (I18N[lang]["series.story"] || "historia") : (I18N[lang]["series.stories"] || "historias")) + '</span>' +
          '</span>' +
          '<svg class="ml-auto h-4 w-4 shrink-0 text-zinc-400 transition group-hover:translate-x-1 group-hover:text-red-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>' +
        '</a>'
      );
    }).join("");
  }

  /* ---------- render: página de series ---------- */
  function renderSeriesIndex() {
    const wrap = document.querySelector("[data-series-index]");
    if (!wrap) return;
    const lang = getLang();
    wrap.innerHTML = SERIES.map(function (s) {
      return '<a href="#' + s.id + '" class="rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-medium text-zinc-700 transition hover:border-red-500 hover:text-red-600 dark:border-zinc-700 dark:text-zinc-200">' + escapeHTML(s.name[lang] || s.name.es) + '</a>';
    }).join("");
  }

  function renderSeriesPage() {
    const wrap = document.querySelector("[data-series-sections]");
    if (!wrap) return;
    const lang = getLang();
    wrap.innerHTML = SERIES.map(function (s) {
      const stories = storiesBySeries(s.id);
      const cards = stories.map(function (st) { return storyCardHTML(st, lang); }).join("");
      return (
        '<section id="' + s.id + '" class="scroll-mt-24">' +
          '<div class="mb-4 flex flex-wrap items-center gap-3">' +
            '<span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ' + s.badge + '">' + escapeHTML(s.name[lang] || s.name.es) + '</span>' +
            '<span class="text-sm text-zinc-500 dark:text-zinc-400">' + stories.length + ' ' + escapeHTML(stories.length === 1 ? (I18N[lang]["series.story"] || "historia") : (I18N[lang]["series.stories"] || "historias")) + '</span>' +
          '</div>' +
          '<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">' + cards + '</div>' +
        '</section>'
      );
    }).join("");
  }

  /* ---------- render: biblioteca de historias ---------- */
  function renderStoryGrid(filter) {
    const grid = document.querySelector("[data-story-grid]");
    if (!grid) return;
    const lang = getLang();
    const query = (filter && filter.query) || "";
    const seriesId = (filter && filter.series) || "all";

    let list = STORIES.filter(function (s) {
      if (seriesId !== "all" && s.series !== seriesId) return false;
      if (!query) return true;
      const series = seriesById(s.series);
      const haystack = (s.title[lang] + " " + s.synopsis[lang] + " " + (series ? series.name[lang] : "") + " " + s.episodes.join(" ")).toLowerCase();
      return haystack.indexOf(query.toLowerCase()) !== -1;
    });

    const resultsEl = document.querySelector("[data-story-results]");
    if (resultsEl) {
      const word = list.length === 1 ? (I18N[lang]["stories.result"] || "resultado") : (I18N[lang]["stories.results"] || "resultados");
      resultsEl.textContent = list.length + " " + word;
    }

    const emptyEl = document.querySelector("[data-story-empty]");
    if (list.length === 0) {
      grid.innerHTML = "";
      if (emptyEl) emptyEl.classList.remove("hidden");
      return;
    }
    if (emptyEl) emptyEl.classList.add("hidden");

    grid.innerHTML = list.map(function (s) { return storyCardHTML(s, lang); }).join("");
  }

  function renderFilterOptions() {
    const select = document.querySelector("[data-story-filter]");
    if (!select) return;
    const current = select.value || "all";
    const lang = getLang();
    let html = '<option value="all">' + escapeHTML(I18N[lang]["stories.all"] || "All") + '</option>';
    SERIES.forEach(function (s) {
      html += '<option value="' + s.id + '">' + escapeHTML(s.name[lang] || s.name.es) + '</option>';
    });
    select.innerHTML = html;
    const valid = ["all"].concat(SERIES.map(function (s) { return s.id; }));
    select.value = valid.indexOf(current) !== -1 ? current : "all";
  }

  function renderFilterPills() {
    const wrap = document.querySelector("[data-filter-pills]");
    if (!wrap) return;
    const lang = getLang();
    const current = (document.querySelector("[data-story-filter]") || {}).value || "all";
    let html = '<button type="button" data-filter-pill="all" class="filter-pill rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-medium text-zinc-700 transition hover:border-red-500 hover:text-red-600 dark:border-zinc-700 dark:text-zinc-200' + (current === "all" ? " is-active" : "") + '">' + escapeHTML(I18N[lang]["stories.all"] || "All") + '</button>';
    SERIES.forEach(function (s) {
      html += '<button type="button" data-filter-pill="' + s.id + '" class="filter-pill rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-medium text-zinc-700 transition hover:border-red-500 hover:text-red-600 dark:border-zinc-700 dark:text-zinc-200' + (current === s.id ? " is-active" : "") + '">' + escapeHTML(s.name[lang] || s.name.es) + '</button>';
    });
    wrap.innerHTML = html;
  }

  function initStoryControls() {
    const search = document.querySelector("[data-story-search]");
    const select = document.querySelector("[data-story-filter]");
    const pillsWrap = document.querySelector("[data-filter-pills]");

    function applyFilter() {
      renderStoryGrid({
        query: search ? search.value : "",
        series: select ? select.value : "all"
      });
      renderFilterPills();
    }

    renderFilterOptions();
    renderFilterPills();

    if (search) search.addEventListener("input", applyFilter);
    if (select) select.addEventListener("change", applyFilter);

    // Delegación de eventos para las píldoras
    if (pillsWrap) {
      pillsWrap.addEventListener("click", function (e) {
        const pill = e.target.closest("[data-filter-pill]");
        if (!pill) return;
        if (select) select.value = pill.getAttribute("data-filter-pill");
        applyFilter();
      });
    }
  }

  /* ---------- acordeón FAQ ---------- */
  function initFAQ() {
    document.querySelectorAll("[data-faq-item]").forEach(function (item) {
      const btn = item.querySelector("[data-faq-btn]");
      if (!btn) return;
      btn.addEventListener("click", function () {
        const isOpen = item.classList.contains("is-open");
        // cerrar los demás
        document.querySelectorAll("[data-faq-item]").forEach(function (other) {
          other.classList.remove("is-open");
          const panel = other.querySelector("[data-faq-panel]");
          const icon = other.querySelector("[data-faq-icon]");
          if (panel) panel.style.maxHeight = null;
          if (icon) icon.classList.remove("rotate-45");
        });
        if (!isOpen) {
          item.classList.add("is-open");
          const panel = item.querySelector("[data-faq-panel]");
          const icon = item.querySelector("[data-faq-icon]");
          if (panel) panel.style.maxHeight = panel.scrollHeight + "px";
          if (icon) icon.classList.add("rotate-45");
        }
      });
    });
  }

  /* ---------- formulario de contacto (demo) ---------- */
  function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;
    const modal = document.querySelector("[data-contact-success]");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (modal) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }
      form.reset();
    });
    const close = document.querySelector("[data-contact-success-close]");
    if (close) close.addEventListener("click", function () {
      if (modal) { modal.classList.add("hidden"); modal.classList.remove("flex"); }
    });
  }

  /* ---------- scroll top ---------- */
  function initScrollTop() {
    const btn = document.querySelector("[data-scroll-top]");
    if (!btn) return;
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        btn.classList.remove("opacity-0", "pointer-events-none");
      } else {
        btn.classList.add("opacity-0", "pointer-events-none");
      }
    });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- menú móvil ---------- */
  function initMobileMenu() {
    const btn = document.querySelector("[data-mobile-menu-btn]");
    const menu = document.querySelector("[data-mobile-menu]");
    if (!btn || !menu) return;
    btn.addEventListener("click", function () {
      const open = menu.classList.toggle("hidden");
      menu.classList.toggle("hidden", open);
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      const iconOpen = btn.querySelector(".icon-open");
      const iconClose = btn.querySelector(".icon-close");
      if (iconOpen) iconOpen.classList.toggle("hidden", !open);
      if (iconClose) iconClose.classList.toggle("hidden", open);
    });
    // cerrar al hacer clic en un enlace
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.add("hidden");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- tema ---------- */
  function initThemeButtons() {
    document.querySelectorAll("[data-theme-btn]").forEach(function (btn) {
      btn.addEventListener("click", toggleTheme);
    });
  }

  /* ---------- selector de idioma (dropdown) ---------- */
  function initLangDropdown() {
    const toggles = document.querySelectorAll("[data-lang-toggle]");
    toggles.forEach(function (toggle) {
      toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        const menu = document.getElementById(toggle.getAttribute("data-lang-toggle"));
        if (!menu) return;
        const hidden = menu.classList.toggle("hidden");
        toggle.setAttribute("aria-expanded", hidden ? "false" : "true");
      });
    });
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang-btn"));
        // cerrar dropdowns
        document.querySelectorAll("[data-lang-menu]").forEach(function (m) { m.classList.add("hidden"); });
        document.querySelectorAll("[data-lang-toggle]").forEach(function (t) { t.setAttribute("aria-expanded", "false"); });
      });
    });
    document.addEventListener("click", function () {
      document.querySelectorAll("[data-lang-menu]").forEach(function (m) { m.classList.add("hidden"); });
      document.querySelectorAll("[data-lang-toggle]").forEach(function (t) { t.setAttribute("aria-expanded", "false"); });
    });
  }

  /* ---------- re-render dinámico al cambiar idioma ---------- */
  function renderAll() {
    renderStats();
    renderFeatured();
    renderSeriesPreview();
    renderSeriesIndex();
    renderSeriesPage();
    renderFilterOptions();
    renderFilterPills();
    const search = document.querySelector("[data-story-search]");
    const select = document.querySelector("[data-story-filter]");
    renderStoryGrid({ query: search ? search.value : "", series: select ? select.value : "all" });
  }

  document.addEventListener("kr:langchange", renderAll);

  /* ---------- init ---------- */
  function init() {
    initTheme();
    applyLang(getLang());
    updateLangButtons(getLang());
    initMobileMenu();
    initThemeButtons();
    initLangDropdown();
    initScrollTop();
    initFAQ();
    initContactForm();
    initCarousel();
    initStoryControls();

    // Delegación global para abrir el modal desde cualquier tarjeta
    document.addEventListener("click", function (e) {
      const btn = e.target.closest("[data-open-modal]");
      if (btn) openStoryModal(btn.getAttribute("data-open-modal"));
    });

    renderAll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
