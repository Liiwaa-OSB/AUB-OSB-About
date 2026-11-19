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
  window.addEventListener("load", setNavOffset);

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

    if (event.key === "Escape") {
      closeOverlay();
      return;
    }

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

  /* Close when viewport grows to desktop */
  window
    .matchMedia("(min-width: 1170px)")
    .addEventListener("change", function (e) {
      if (e.matches) closeOverlay(false);
    });

  /* Close after navigating (skip the parent toggle link of a submenu) */
  document.querySelectorAll(".mobile-nav-link").forEach(function (link) {
    const inRow = link.closest(".mobile-nav-row");
    if (inRow) return; // parent toggle link — leave alone
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

      if (/^(https?:)?\/\//i.test(href)) return;

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const linkPage = url.pathname.split("/").pop() || "index.html";

      if (linkPage === currentPage) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");

        /* If inside a submenu, mark the parent trigger too */
        const submenu = link.closest(".osb-submenu, .mobile-submenu");
        if (submenu) {
          const parentLi = submenu.closest(".has-submenu");
          if (parentLi) {
            const parentLink = parentLi.querySelector(
              ":scope > a, :scope > .mobile-nav-row > a"
            );
            if (parentLink) parentLink.classList.add("has-active-child");
          }
        }
      }
    });
  }

  /* Match desktop top-level, desktop submenu, and mobile variants */
  markActive(".nav-osb-links .osb-nav-item > a");
  markActive(".osb-submenu li a");
  markActive(".mobile-nav-link");

    /* Auto-open mobile submenu if one of its children is the current page */
  const currentSubmenuLink = document.querySelector(
    ".mobile-submenu .mobile-nav-link.is-active"
  );
  if (currentSubmenuLink) {
    const parentLi = currentSubmenuLink.closest(".has-submenu");
    if (parentLi) {
      parentLi.classList.add("open");
      const arrow = parentLi.querySelector(
        ":scope > .mobile-nav-row > .submenu-arrow"
      );
      if (arrow) arrow.setAttribute("aria-expanded", "true");
    }
  }

  /* ============================================= */
  /* MOBILE SUBMENU TOGGLE                         */
  /* ============================================= */

  document
    .querySelectorAll(
      ".mobile-nav .has-submenu > .mobile-nav-row > .submenu-arrow"
    )
    .forEach(function (btn) {
      const parent = btn.closest(".has-submenu");

      btn.addEventListener("click", function (event) {
        event.preventDefault();
        const isOpenSub = parent.classList.toggle("open");
        btn.setAttribute("aria-expanded", isOpenSub ? "true" : "false");
      });
    });

  /* ============================================= */
  /* DESKTOP SUBMENU — keyboard & click            */
  /* ============================================= */

  document
    .querySelectorAll(".nav-osb-links .has-submenu > a")
    .forEach(function (trigger) {
      const parent = trigger.parentElement;
      const submenu = parent.querySelector(".osb-submenu");
      if (!submenu) return;

      trigger.setAttribute("aria-haspopup", "true");
      trigger.setAttribute("aria-expanded", "false");

      trigger.addEventListener("click", function (event) {
        const isModified =
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0;
        if (isModified) return;

        const expanded = trigger.getAttribute("aria-expanded") === "true";
        if (!expanded) {
          event.preventDefault();
          trigger.setAttribute("aria-expanded", "true");
          parent.classList.add("submenu-open");
          const firstItem = submenu.querySelector("a");
          if (firstItem) firstItem.focus();
        } else {
          trigger.setAttribute("aria-expanded", "false");
          parent.classList.remove("submenu-open");
        }
      });

      parent.addEventListener("focusout", function (event) {
        if (!parent.contains(event.relatedTarget)) {
          trigger.setAttribute("aria-expanded", "false");
          parent.classList.remove("submenu-open");
        }
      });

      parent.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          trigger.setAttribute("aria-expanded", "false");
          parent.classList.remove("submenu-open");
          trigger.focus();
        }
      });
    });
})();