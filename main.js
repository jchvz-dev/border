/* ==========================================================================
   border — landing page behaviour
   Language switching, the pinned-phone rail (background + screenshot swap
   per panel), nav state, and scroll reveals. No dependencies.
   ========================================================================== */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Language ─────────────────────────────────────────────────────────
     Copy lives in i18n.js. Elements opt in with `data-i18n` (text) or
     `data-i18n-html` (markup, used where a headline needs a <br>).
     Choice persists in localStorage; first visit follows the browser.     */

  var COPY  = window.BORDER_COPY || { en: {}, es: {} };
  var STORE = 'border.lang';
  var btn   = document.getElementById('lang');
  var label = document.getElementById('langLabel');

  function preferredLang() {
    try {
      var saved = localStorage.getItem(STORE);
      if (saved === 'en' || saved === 'es') return saved;
    } catch (e) { /* private mode — fall through */ }
    return (navigator.language || 'en').toLowerCase().indexOf('es') === 0 ? 'es' : 'en';
  }

  function applyLang(lang) {
    var dict = COPY[lang] || COPY.en;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null) el.textContent = v;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-html')];
      if (v != null) el.innerHTML = v;
    });

    document.documentElement.lang = lang;
    // The button always advertises the language you'd switch *to*.
    if (label) label.textContent = lang === 'en' ? 'ES' : 'EN';
    if (btn) btn.setAttribute('aria-label', lang === 'en' ? 'Cambiar a español' : 'Switch to English');

    try { localStorage.setItem(STORE, lang); } catch (e) { /* ignore */ }
  }

  var current = preferredLang();
  applyLang(current);

  if (btn) {
    btn.addEventListener('click', function () {
      current = current === 'en' ? 'es' : 'en';
      applyLang(current);
    });
  }

  /* ── The rail ─────────────────────────────────────────────────────────
     One sticky phone, five panels. Whichever panel is crossing the middle
     of the viewport owns the page: it sets the body theme (which animates
     the background and text colour via CSS) and raises its screen.

     Three of the five screens are looping videos. They ship with
     preload="none" and only the visible one is ever played, so a visitor who
     stops at the hero downloads none of them.

     A -50%/-50% rootMargin collapses the observer's root to a single line
     across the viewport's centre, so exactly one panel is ever intersecting
     and handoff happens at the midpoint rather than at an edge.

     The hero sits *outside* the rail — it has no phone, only the animated
     map — so it isn't a panel and only contributes its theme.             */

  var panels = Array.prototype.slice.call(document.querySelectorAll('.panel'));

  /* Two sets of screens exist, and CSS decides which is on show:
       .device__shot — the pinned stage, desktop only
       .panel__shot  — one phone per panel, mobile only (the stage's sticky
                       positioning is unreliable there; see styles.css)
     Only the visible set is ever played, so the other never downloads.     */

  var stageShots = Array.prototype.slice.call(document.querySelectorAll('.device__shot'));
  var panelShots = Array.prototype.slice.call(document.querySelectorAll('.panel__shot'));
  var mobileQuery = window.matchMedia('(max-width: 1024px)');

  function play(video) {
    // play() rejects if the browser blocks autoplay; muted + playsinline
    // should always be allowed, but swallow it rather than throw.
    var p = video.play();
    if (p && p.catch) p.catch(function () {});
  }

  function stop(video) {
    video.pause();
    video.currentTime = 0;   // next visit starts the loop from the top
  }

  function activate(panel) {
    if (panel.classList.contains('is-active')) return;

    panels.forEach(function (p) { p.classList.toggle('is-active', p === panel); });

    var index = panel.getAttribute('data-p');
    var onMobile = mobileQuery.matches;

    stageShots.forEach(function (s) {
      var on = s.getAttribute('data-p') === index;
      s.classList.toggle('is-on', on);
      if (s.tagName !== 'VIDEO') return;
      if (on && !onMobile) play(s); else stop(s);
    });

    panelShots.forEach(function (s) {
      if (s.tagName !== 'VIDEO') return;
      if (s.getAttribute('data-p') === index && onMobile) play(s); else stop(s);
    });
  }

  // Crossing the breakpoint hands playback to the other set.
  function refreshPlayback() {
    var current = panels.filter(function (p) { return p.classList.contains('is-active'); })[0];
    if (!current) return;
    current.classList.remove('is-active');   // force activate() past its guard
    activate(current);
  }
  if (mobileQuery.addEventListener) mobileQuery.addEventListener('change', refreshPlayback);
  else if (mobileQuery.addListener) mobileQuery.addListener(refreshPlayback);

  if (panels.length && 'IntersectionObserver' in window) {
    var railObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) activate(entry.target);
      });
    }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });

    panels.forEach(function (p) { railObserver.observe(p); });
  } else {
    // No observer: show everything rather than leaving copy invisible.
    panels.forEach(function (p) { p.classList.add('is-active'); });
  }

  /* ── Nav: tinted background once you leave the top ─────────────────────
     The nav inherits --fg, so it stays legible as the theme animates.     */

  var nav = document.getElementById('nav');
  var navTicking = false;

  function applyNavState() {
    nav.classList.toggle('nav--stuck', window.scrollY > 40);
    navTicking = false;
  }

  window.addEventListener('scroll', function () {
    if (navTicking) return;
    window.requestAnimationFrame(applyNavState);
    navTicking = true;
  }, { passive: true });

  applyNavState();

  /* ── Reveals (sections below the rail) ────────────────────────────────
     `data-reveal-delay` staggers siblings so a block resolves top-to-bottom.
     The delay is written to a CSS variable; the curve stays in the stylesheet. */

  var revealables = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  revealables.forEach(function (el) {
    var d = el.getAttribute('data-reveal-delay');
    if (d) el.style.setProperty('--d', d);
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.1 });

    revealables.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ── Page theme ───────────────────────────────────────────────────────
     Every full-width block declares the theme it wants, and whichever one
     owns the viewport centre sets it on <body>. CSS animates --bg / --fg
     from there, which also keeps the fixed nav legible the whole way down.

     One observer for all of them — hero, rail panels, sections, footer —
     so there's a single handoff rule and no gap where the theme freezes.  */

  function themeOf(el) {
    if (el.dataset.theme) return el.dataset.theme;                 // hero, panels
    if (el.classList.contains('sec--light')) return 'light';
    if (el.classList.contains('sec--blue'))  return 'blue';
    return 'dark';                                                 // sec--dark, footer
  }

  var themeSources = Array.prototype.slice.call(
    document.querySelectorAll('.hero, .panel, .sec, .footer')
  );

  var railStage = document.querySelector('.rail__stage');

  if (themeSources.length && 'IntersectionObserver' in window) {
    var themeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        document.body.setAttribute('data-theme', themeOf(entry.target));
      });
    }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });

    themeSources.forEach(function (s) { themeObserver.observe(s); });
  }

  /* ── Releasing the phone ──────────────────────────────────────────────
     Two obvious triggers both feel wrong:

       · last panel's centre hits the viewport centre  → fades far too early
       · the next section takes the viewport centre    → fades over its heading

     Those two are exactly half a panel apart, so the trigger sits midway
     between them: the panel's centre has to travel a quarter of the panel's
     own height past the viewport centre. Expressed against box.height rather
     than the viewport so it holds when a panel grows past 100svh.

     Measured per frame instead of via IntersectionObserver, which can only
     fire on an element's edges — the point we care about is inside it.     */

  var RELEASE_TRAVEL = 0.25;   // fraction of the panel's height past centre

  var lastPanel = panels[panels.length - 1];
  var releaseTicking = false;

  function updateRelease() {
    var box = lastPanel.getBoundingClientRect();
    var panelCentre = box.top + box.height / 2;
    var trigger = window.innerHeight / 2 - box.height * RELEASE_TRAVEL;
    railStage.classList.toggle('is-released', panelCentre < trigger);
    releaseTicking = false;
  }

  if (railStage && lastPanel) {
    window.addEventListener('scroll', function () {
      if (releaseTicking) return;
      window.requestAnimationFrame(updateRelease);
      releaseTicking = true;
    }, { passive: true });

    window.addEventListener('resize', updateRelease, { passive: true });
    updateRelease();
  }
})();
