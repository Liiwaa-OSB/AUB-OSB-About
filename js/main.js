(() => {
  /* Mobile navigation */
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');
  if (toggle && nav) {
    const setOpen = (open) => {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* Scroll reveal (pairs with .reveal / .visible / .is-revealed in main.css) */
  const items = document.querySelectorAll('.reveal');
  const show = (el) => el.classList.add('visible');
  if (!('IntersectionObserver' in window)) {
    items.forEach(show);
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          show(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach((el) => io.observe(el));
  }
  items.forEach((el) => el.addEventListener('transitionend', (ev) => {
    if (ev.propertyName === 'transform') el.classList.add('is-revealed');
  }));

  /* Review mode: add ?todo-links to a URL to highlight unfinished links */
  if (/[?&]todo-links\b/.test(window.location.search)) {
    document.body.classList.add('show-todo-links');
  }

  /* Links that don't point anywhere yet (href="#") should not jump to the top */
  document.querySelectorAll('a[href="#"], a[data-link-status="todo"]').forEach((a) =>
    a.addEventListener('click', (e) => e.preventDefault())
  );

  /* Tabs: any [data-tabs] block (e.g. program rankings). Works without JS too. */
  document.querySelectorAll('[data-tabs]').forEach((root) => {
    const tabs = Array.from(root.querySelectorAll('[role="tab"]'));
    const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls')));
    const select = (i, focus) => {
      tabs.forEach((t, n) => {
        const on = n === i;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        if (panels[n]) panels[n].hidden = !on;
      });
      if (focus) tabs[i].focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(i));
      t.addEventListener('keydown', (e) => {
        const k = e.key;
        if (k === 'ArrowRight') { e.preventDefault(); select((i + 1) % tabs.length, true); }
        if (k === 'ArrowLeft') { e.preventDefault(); select((i - 1 + tabs.length) % tabs.length, true); }
        if (k === 'Home') { e.preventDefault(); select(0, true); }
        if (k === 'End') { e.preventDefault(); select(tabs.length - 1, true); }
      });
    });
    root.classList.add('is-ready');
    select(0);
  });

  /* Footer year */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
