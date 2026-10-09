/* ==========================================================================
   NACHO NAVES · main.js
   Render dinámico · Filtros · Menú móvil · Vista detalle · Scroll reveal
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const esc = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const STATUS_LABELS = {
    practica: 'EN PRÁCTICA',
    aprendiendo: 'APRENDIENDO',
    completado: 'COMPLETADO',
    error: 'ERROR'
  };

  const CATEGORY_LABELS = {
    ciberseguridad: 'CIBERSEGURIDAD',
    desarrollo: 'DESARROLLO',
    automatizacion: 'AUTOMATIZACIÓN',
    apis: 'APIS'
  };

  /* ======================================================================
     RENDER · TARJETAS DE APRENDIZAJE
     ====================================================================== */
  function renderLearning() {
    const grid = $('#learning-grid');
    if (!grid || typeof learning === 'undefined') return;

    grid.innerHTML = learning.map((item) => `
      <article class="skill-card reveal">
        <div class="skill-top">
          <span class="skill-icon">${ICONS[item.icon] || ''}</span>
          <h3 class="skill-name">${esc(item.title)}</h3>
        </div>
        <p class="skill-desc">${esc(item.description)}</p>
        <p class="status status--${esc(item.status)}">${STATUS_LABELS[item.status] || esc(item.status)}</p>
      </article>
    `).join('');
  }

  /* ======================================================================
     RENDER · TARJETAS DE PROYECTO
     ====================================================================== */
  function projectCard(p) {
    const cats = p.categories.join(' ');
    return `
      <article class="project-card reveal" data-categories="${esc(cats)}">
        <div class="project-head">
          <span class="project-prompt" aria-hidden="true">&gt;_</span>
          <h3 class="project-title">${esc(p.title)}</h3>
          <span class="project-arrow" aria-hidden="true">→</span>
        </div>
        <p class="project-category">${esc(CATEGORY_LABELS[p.categories[0]] || p.categories[0])}</p>
        <p class="project-desc">${esc(p.description)}</p>
        <div class="tag-list">
          ${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}
        </div>
        <div class="project-foot">
          <button class="project-link" type="button" data-project="${esc(p.id)}">VER PROYECTO →</button>
          <span class="status status--${esc(p.status)}">${STATUS_LABELS[p.status] || esc(p.status)}</span>
        </div>
      </article>
    `;
  }

  function renderProjects() {
    const grid = $('#projects-grid');
    if (!grid || typeof projects === 'undefined') return;
    grid.innerHTML = projects.map(projectCard).join('');
    updateCount(projects.length);
  }

  function updateCount(n) {
    const el = $('#projects-count');
    if (el) el.textContent = `${n} PROYECTO${n === 1 ? '' : 'S'} EN VISUALIZACIÓN`;
  }

  /* ======================================================================
     FILTROS DE PROYECTOS
     ====================================================================== */
  function initFilters() {
    const buttons = $$('.filter');
    const grid = $('#projects-grid');
    const empty = $('#projects-empty');
    if (!buttons.length || !grid) return;

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        buttons.forEach((b) => {
          const active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', String(active));
        });

        let visible = 0;
        $$('.project-card', grid).forEach((card) => {
          const cats = (card.dataset.categories || '').split(' ');
          const show = filter === 'all' || cats.includes(filter);
          card.classList.toggle('is-hidden', !show);
          if (show) visible++;
        });

        if (empty) empty.hidden = visible !== 0;
        updateCount(visible);
      });
    });
  }

  /* ======================================================================
     MENÚ MÓVIL
     ====================================================================== */
  function initMobileMenu() {
    const toggle = $('.menu-toggle');
    const menu = $('#mobile-menu');
    if (!toggle || !menu) return;

    const icon = toggle.querySelector('.menu-toggle-icon');

    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
      if (icon) icon.textContent = open ? '[ × ]' : '[ ≡ ]';
      menu.hidden = !open;
      menu.classList.toggle('is-open', open);
    };

    toggle.addEventListener('click', () => {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    menu.addEventListener('click', (e) => {
      if (e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) setOpen(false);
    });
  }

  /* ======================================================================
     VISTA DETALLE DE PROYECTO (dinámica, integrada)
     ====================================================================== */
  const detail = {
    el: null,
    lastFocused: null,
    ready: false,

    init() {
      this.el = $('#project-detail');
      if (!this.el) return;

      this.el.querySelector('.detail-back').addEventListener('click', () => this.close());

      document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-project]');
        if (trigger) {
          e.preventDefault();
          this.lastFocused = trigger;
          location.hash = 'project=' + trigger.dataset.project;
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !this.el.hidden) this.close();
        if (e.key === 'Tab' && !this.el.hidden) this.trapFocus(e);
      });

      window.addEventListener('hashchange', () => this.fromHash());
      this.fromHash();
      this.ready = true;
    },

    /* mantiene el foco dentro del diálogo (accesibilidad) */
    trapFocus(e) {
      const focusables = $$(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        this.el
      ).filter((el) => !el.hidden && el.offsetParent !== null);

      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },

    /* oculta el resto del documento a los lectores de pantalla */
    setRestHidden(hidden) {
      ['.site-header', 'main', '.site-footer'].forEach((sel) => {
        const el = $(sel);
        if (!el) return;
        if (hidden) el.setAttribute('aria-hidden', 'true');
        else el.removeAttribute('aria-hidden');
      });
    },

    fromHash() {
      const m = location.hash.match(/^#project=(.+)$/);
      if (m) {
        this.open(m[1], this.ready);
      } else if (!this.el.hidden) {
        this.hide();
        this.restoreFocus();
      }
    },

    hide() {
      this.el.hidden = true;
      this.el.classList.remove('is-open');
      document.body.classList.remove('detail-open');
      this.setRestHidden(false);
    },

    restoreFocus() {
      if (this.lastFocused && document.contains(this.lastFocused)) {
        this.lastFocused.focus({ preventScroll: true });
        this.lastFocused = null;
      }
    },

    open(id, focusBack) {
      const p = projects.find((x) => x.id === id);
      if (!p) return;

      $('#detail-category').textContent = CATEGORY_LABELS[p.categories[0]] || p.categories[0];
      $('#detail-title').textContent = p.title + '_';
      $('#detail-subtitle').textContent = p.subtitle;
      $('#detail-stack').textContent = p.technologies.join(' · ');
      $('#detail-desc').textContent = p.longDescription || p.description;
      $('#detail-goal').textContent = p.goal || '';
      $('#detail-tech').innerHTML = p.technologies.map((t) => `<li class="tag">${esc(t)}</li>`).join('');
      $('#detail-learned').innerHTML = (p.learned || []).map((l) => `<li>${esc(l)}</li>`).join('');

      const status = $('#detail-status');
      status.className = `detail-status status status--${esc(p.status)}`;
      status.textContent = STATUS_LABELS[p.status] || p.status;

      $('#detail-github').href = p.github || 'https://github.com/';
      const docs = $('#detail-docs');
      docs.href = p.docs || '#';
      docs.hidden = !p.docs;

      $('#terminal-output').innerHTML = (p.terminal.output || [])
        .map((line) => `<span class="${line.cls}">${esc(line.text)}</span>`)
        .join('\n');

      this.el.hidden = false;
      this.el.classList.add('is-open');
      this.el.scrollTop = 0;
      document.body.classList.add('detail-open');
      this.setRestHidden(true);

      if (focusBack) {
        this.el.querySelector('.detail-back').focus({ preventScroll: true });
      }
    },

    close() {
      this.hide();
      if (/^#project=/.test(location.hash)) {
        location.hash = 'proyectos';
      }
      this.restoreFocus();
    }
  };

  /* ======================================================================
     SCROLL REVEAL
     ====================================================================== */
  function initReveal() {
    const items = $$('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach((el) => io.observe(el));
  }

  /* ======================================================================
     NAV ACTIVA SEGÚN SECCIÓN VISIBLE
     ====================================================================== */
  function initActiveNav() {
    if (!('IntersectionObserver' in window)) return;

    const sections = ['inicio', 'aprendiendo', 'proyectos', 'sobre-mi']
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const links = $$('.nav-link[data-nav]');

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.classList.toggle('is-active', l.dataset.nav === entry.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach((s) => io.observe(s));
  }

  /* ======================================================================
     GLITCH MUY OCASIONAL EN EL TÍTULO (sin molestos)
     ====================================================================== */
  function initGlitch() {
    if (reduceMotion) return;
    const title = $('.hero-title');
    if (!title) return;

    setInterval(() => {
      if (document.hidden) return;
      if (!title.classList.contains('is-visible')) return;
      if (Math.random() > 0.25) return;
      title.style.transform = 'translateX(1px)';
      title.style.opacity = '0.85';
      setTimeout(() => {
        title.style.transform = '';
        title.style.opacity = '';
      }, 90);
    }, 7000);
  }

  /* ======================================================================
     INIT
     ====================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    renderLearning();
    renderProjects();
    initFilters();
    initMobileMenu();
    detail.init();
    initReveal();
    initActiveNav();
    initGlitch();
  });
})();
