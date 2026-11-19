/* ==========================================================
   OSB — main.js (loaded with `defer` on every page)
   1. Fixed header offset
   2. Mobile menu overlay
   3. Active navigation item
   4. Submenus (mobile accordion + desktop keyboard/click)
   5. Scroll reveal
   6. Placeholder links + ?todo-links review mode
   7. Tabs ([data-tabs])
   8. Flip cards on touch screens (.sp-card)
   ========================================================== */
(function () {
  "use strict";

  const root = document.documentElement;
  const body = document.body;
  const DESKTOP_QUERY = "(min-width: 1170px)";

  /* ---------- 1. Fixed header offset ---------- */
  const header = document.querySelector(".nav-main-header");

  function setNavOffset() {
    if (header) root.style.setProperty("--nav-offset", header.offsetHeight + "px");
  }

  setNavOffset();
  if (header && "ResizeObserver" in window) {
    new ResizeObserver(setNavOffset).observe(header);
  } else {
    window.addEventListener("resize", setNavOffset);
  }
  window.addEventListener("load", setNavOffset);

  /* ---------- 2. Mobile menu overlay ---------- */
  const burger = document.getElementById("mobileBurgerBtn");
  const overlay = document.getElementById("mobileOverlay");
  const closeBtn = document.getElementById("closeOverlayBtn");

  const isOverlayOpen = () => !!overlay && overlay.classList.contains("open");

  function openOverlay() {
    if (!overlay || isOverlayOpen()) return;
    overlay.inert = false;
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    body.classList.add("menu-open");
    burger?.setAttribute("aria-expanded", "true");
    closeBtn?.focus();
  }

  function closeOverlay(returnFocus = true) {
    if (!isOverlayOpen()) return;
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    overlay.inert = true;
    body.classList.remove("menu-open");
    burger?.setAttribute("aria-expanded", "false");
    if (returnFocus) burger?.focus();
  }

  burger?.addEventListener("click", openOverlay);
  closeBtn?.addEventListener("click", () => closeOverlay());

  // Click on the backdrop (outside the menu content) closes it
  overlay?.addEventListener("click", (event) => {
    if (event.target === overlay) closeOverlay();
  });

  // Escape closes; Tab is trapped inside the open overlay
  document.addEventListener("keydown", (event) => {
    if (!isOverlayOpen()) return;

    if (event.key === "Escape") {
      closeOverlay();
      return;
    }

    if (event.key === "Tab") {
      const focusable = overlay.querySelectorAll("a[href], button:not([disabled])");
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  // Growing to desktop width closes the overlay
  window.matchMedia(DESKTOP_QUERY).addEventListener("change", (e) => {
    if (e.matches) closeOverlay(false);
  });

  // Following a link closes the overlay (parent rows only toggle)
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    if (!link.closest(".mobile-nav-row")) {
      link.addEventListener("click", () => closeOverlay(false));
    }
  });

  /* ---------- 3. Active navigation item ---------- */
  const pageOf = (pathname) => pathname.split("/").pop() || "index.html";
  const currentPage = pageOf(window.location.pathname);

  document
    .querySelectorAll(".osb-nav-item > a, .osb-submenu a, .mobile-nav-link")
    .forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || /^(https?:)?\/\//i.test(href)) return;

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin || pageOf(url.pathname) !== currentPage) return;

      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");

      // Highlight the parent of an active subpage
      const parentItem = link.closest(".osb-submenu, .mobile-submenu")?.closest(".has-submenu");
      parentItem
        ?.querySelector(":scope > a, :scope > .mobile-nav-row > a")
        ?.classList.add("has-active-child");
    });

  /* ---------- 4. Submenus ---------- */

  // Mobile: arrow button toggles the accordion
  document.querySelectorAll(".mobile-nav .submenu-arrow").forEach((btn) => {
    const parent = btn.closest(".has-submenu");
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const open = parent.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  });

  // Mobile: start expanded when the current page lives in the submenu
  const activeSubLink = document.querySelector(".mobile-submenu .mobile-nav-link.is-active");
  if (activeSubLink) {
    const parent = activeSubLink.closest(".has-submenu");
    parent?.classList.add("open");
    parent?.querySelector(":scope > .mobile-nav-row > .submenu-arrow")?.setAttribute("aria-expanded", "true");
  }

  // Desktop: first click/Enter opens the submenu, second follows the link
  document.querySelectorAll(".nav-osb-links .has-submenu > a").forEach((trigger) => {
    const parent = trigger.parentElement;
    const submenu = parent.querySelector(".osb-submenu");
    if (!submenu) return;

    const setOpen = (open) => {
      trigger.setAttribute("aria-expanded", String(open));
      parent.classList.toggle("submenu-open", open);
    };

    trigger.setAttribute("aria-haspopup", "true");
    setOpen(false);

    trigger.addEventListener("click", (event) => {
      const modified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
      if (modified) return;

      if (trigger.getAttribute("aria-expanded") !== "true") {
        event.preventDefault();
        setOpen(true);
        submenu.querySelector("a")?.focus();
      } else {
        setOpen(false);
      }
    });

    parent.addEventListener("focusout", (event) => {
      if (!parent.contains(event.relatedTarget)) setOpen(false);
    });

    parent.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.focus();
      }
    });
  });

  /* ---------- 5. Scroll reveal (.reveal → .visible) ---------- */
  const revealItems = document.querySelectorAll(".reveal");
  const show = (el) => el.classList.add("visible");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach(show);
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealItems.forEach((el) => io.observe(el));
  }

  /* ---------- 6. Placeholder links ---------- */
  // href="#" links don't point anywhere yet: don't jump to the top
  document.querySelectorAll('a[href="#"], a[data-link-status="todo"]').forEach((a) =>
    a.addEventListener("click", (e) => e.preventDefault())
  );

  // Review mode: add ?todo-links to a URL to highlight unfinished links
  if (/[?&]todo-links\b/.test(window.location.search)) {
    body.classList.add("show-todo-links");
  }

  /* ---------- 7. Tabs ([data-tabs], e.g. rankings by program) ---------- */
  document.querySelectorAll("[data-tabs]").forEach((tabsRoot) => {
    const tabs = Array.from(tabsRoot.querySelectorAll('[role="tab"]'));
    const panels = tabs.map((t) => document.getElementById(t.getAttribute("aria-controls")));

    const select = (index, focus) => {
      tabs.forEach((tab, n) => {
        const on = n === index;
        tab.setAttribute("aria-selected", String(on));
        tab.tabIndex = on ? 0 : -1;
        if (panels[n]) panels[n].hidden = !on;
      });
      if (focus) tabs[index].focus();
    };

    const keys = {
      ArrowRight: (i) => (i + 1) % tabs.length,
      ArrowLeft: (i) => (i - 1 + tabs.length) % tabs.length,
      Home: () => 0,
      End: () => tabs.length - 1,
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => select(i));
      tab.addEventListener("keydown", (e) => {
        if (!keys[e.key]) return;
        e.preventDefault();
        select(keys[e.key](i), true);
      });
    });

    tabsRoot.classList.add("is-ready");
    select(0);
  });

  /* ---------- 8. Flip cards: tap to flip on touch screens ---------- */
  const touch = window.matchMedia("(hover: none)");
  document.querySelectorAll(".sp-card").forEach((card) => {
    card.addEventListener("click", () => {
      if (touch.matches) card.classList.toggle("is-flipped");
    });
  });
})();
