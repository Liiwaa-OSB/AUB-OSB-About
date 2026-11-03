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

  /* Footer year */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
