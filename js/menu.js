(function () {
  "use strict";

  const body = document.body;
  const header = document.querySelector(".nav-main-header");
  const mobileBurger = document.getElementById("mobileBurgerBtn");
  const overlay = document.getElementById("mobileOverlay");
  const closeBtn = document.getElementById("closeOverlayBtn");

  /* ============================================= */
  /* FIXED HEADER OFFSET                           */
  /* ============================================= */

  function setNavOffset() {
    if (!header) return;
    document.documentElement.style.setProperty(
      "--nav-offset",
      header.offsetHeight + "px"
    );
  }

  setNavOffset();
  if ("ResizeObserver" in window && header) {
    new ResizeObserver(setNavOffset).observe(header);
  } else {
    window.addEventListener("resize", setNavOffset);
  }
  window.addEventListener("load", setNavOffset); // logo image may change height

  /* ============================================= */
  /* MOBILE MENU                                   */
  /* ============================================= */

  function isOpen() {
    return !!overlay && overlay.classList.contains("open");
  }

  function openOverlay() {
    if (!overlay || isOpen()) return;

    overlay.inert = false;
    overlay.classList.add("open");
    body.classList.add("menu-open");

    mobileBurger?.setAttribute("aria-expanded", "true");
    overlay.setAttribute("aria-hidden", "false");

    closeBtn?.focus();
  }

  function closeOverlay(returnFocus = true) {
    if (!overlay || !isOpen()) return;

    overlay.classList.remove("open");
    body.classList.remove("menu-open");

    mobileBurger?.setAttribute("aria-expanded", "false");
    overlay.setAttribute("aria-hidden", "true");
    overlay.inert = true;

    if (returnFocus) mobileBurger?.focus();
  }

  mobileBurger?.addEventListener("click", openOverlay);
  closeBtn?.addEventListener("click", () => closeOverlay());

  /* Close when clicking outside the menu content */
  overlay?.addEventListener("click", function (event) {
    if (event.target === overlay) closeOverlay();
  });

  document.addEventListener("keydown", function (event) {
    if (!isOpen()) return;

    /* Escape closes */
    if (event.key === "Escape") {
      closeOverlay();
      return;
    }

    /* Trap Tab inside the overlay */
    if (event.key === "Tab") {
      const focusable = overlay.querySelectorAll(
        "a[href], button:not([disabled])"
      );
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

  /* Close when the viewport grows to desktop */
  window
    .matchMedia("(min-width: 1024px)")
    .addEventListener("change", function (e) {
      if (e.matches) closeOverlay(false);
    });

  /* Close after navigating (same-page / hash links) */
  document.querySelectorAll(".mobile-nav-link").forEach(function (link) {
    // Skip the parent toggle link of a submenu (handled above)
    if (link.parentElement.classList.contains("has-submenu")) return;
    link.addEventListener("click", () => closeOverlay(false));
  });
  /* ============================================= */
  /* ACTIVE NAVIGATION ITEM                        */
  /* ============================================= */

  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  function markActive(selector) {
    document.querySelectorAll(selector).forEach(function (link) {
      const href = link.getAttribute("href");
      if (!href) return;

      /* Skip external links (e.g. About OSB -> aub.edu.lb) */
      if (/^(https?:)?\/\//i.test(href)) return;

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const linkPage = url.pathname.split("/").pop() || "index.html";

      if (linkPage === currentPage) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  /* Match both desktop and mobile variants of the nav */
  markActive(".nav-osb-links .osb-nav-item > a");
  markActive(".mobile-nav-link");
})();

/* ============================================= */
/* MOBILE SUBMENU TOGGLE (arrow button)          */
/* ============================================= */

document.querySelectorAll(".mobile-nav .has-submenu > .mobile-nav-row > .submenu-arrow").forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    const parent = btn.closest(".has-submenu");
    const isOpenSub = parent.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpenSub ? "true" : "false");
  });
});

/* --- Desktop submenu keyboard support --- */
document.querySelectorAll(".nav-osb-links .has-submenu > a").forEach(function (trigger) {
  const submenu = trigger.parentElement.querySelector(".osb-submenu");
  if (!submenu) return;

  trigger.setAttribute("aria-haspopup", "true");
  trigger.setAttribute("aria-expanded", "false");

  trigger.addEventListener("click", function (event) {
    // Only intercept if the trigger link itself would navigate away
    // and the user doesn't have a modified click (ctrl/cmd/middle).
    const isModified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
    if (isModified) return;

    // If submenu is currently closed, open it on first click instead of navigating.
    const parent = trigger.parentElement;
    const expanded = trigger.getAttribute("aria-expanded") === "true";
    if (!expanded) {
      event.preventDefault();
      trigger.setAttribute("aria-expanded", "true");
      parent.classList.add("submenu-open");
      // move focus to first submenu item
      const firstItem = submenu.querySelector("a");
      if (firstItem) firstItem.focus();
    } else {
      trigger.setAttribute("aria-expanded", "false");
      parent.classList.remove("submenu-open");
    }
  });

  // Close when focus leaves the submenu entirely
  trigger.parentElement.addEventListener("focusout", function (event) {
    if (!trigger.parentElement.contains(event.relatedTarget)) {
      trigger.setAttribute("aria-expanded", "false");
      trigger.parentElement.classList.remove("submenu-open");
    }
  });

  // Escape closes
  trigger.parentElement.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      trigger.setAttribute("aria-expanded", "false");
      trigger.parentElement.classList.remove("submenu-open");
      trigger.focus();
    }
  });
});