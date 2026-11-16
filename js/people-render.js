const ADMIN_GROUP_ORDER = [
  "Academic Administration",
  "Administrators",
  "Executive Programs",
  "Graduate Programs",
  "Research Associates and Post-Doc",
  "Research Initiatives and Centers",
  "Undergraduate Program"
];

const FACULTY_DEPTS = [
  "Business Information & Decision Systems",
  "Finance, Accounting & Managerial Economics",
  "Management, Marketing & Entrepreneurship"
];

function adminGroupsOf(p) {
  if (!p.admin) return [];
  return Array.isArray(p.admin.group) ? p.admin.group : [p.admin.group];
}

/* ==========================================
   HELPER: Build Filter UI (Desktop + Mobile)
   ========================================== */
function buildFilterUI(options, onFilterChange) {
  const wrapper = document.createElement("div");
  wrapper.className = "people-filter-wrapper";

  const label = document.createElement("span");
  label.className = "people-filter-label";
  label.textContent = "Explore by:";
  wrapper.appendChild(label);

  // --- DESKTOP: Pill Buttons ---
  const desktopNav = document.createElement("div");
  desktopNav.className = "people-filter-desktop";

  // --- MOBILE: Native Select ---
  const mobileSelect = document.createElement("select");
  mobileSelect.className = "people-filter-select";
  mobileSelect.setAttribute("aria-label", "Filter by category");

  options.forEach((opt, index) => {
    // Add to Desktop
    const btn = document.createElement("button");
    btn.className = `filter-btn ${index === 0 ? "is-active" : ""}`;
    btn.textContent = opt.label;
    btn.dataset.value = opt.value;
    btn.addEventListener("click", (e) => {
      desktopNav.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("is-active"));
      e.currentTarget.classList.add("is-active");
      onFilterChange(opt.value);
    });
    desktopNav.appendChild(btn);

    // Add to Mobile
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.label;
    mobileSelect.appendChild(option);
  });

  mobileSelect.addEventListener("change", (e) => {
    onFilterChange(e.target.value);
  });

  wrapper.appendChild(desktopNav);
  wrapper.appendChild(mobileSelect);

  return wrapper;
}

/* ==========================================
   ADMIN PAGE
   ========================================== */
function renderAdminPage(container) {
  const list = people.filter(p => p.pages.includes("admin"));
  
  // 1. Build Options
  const filterOptions = [{ label: "All", value: "all" }];
  ADMIN_GROUP_ORDER.forEach(group => {
    if (list.some(p => adminGroupsOf(p).includes(group))) {
      filterOptions.push({ label: group, value: group });
    }
  });

  // 2. Build UI
  const contentContainer = document.createElement("div");
  contentContainer.className = "people-content-container";

  function drawContent(activeFilter) {
    contentContainer.innerHTML = "";
    ADMIN_GROUP_ORDER.forEach(group => {
      if (activeFilter !== "all" && activeFilter !== group) return;
      const members = list.filter(p => adminGroupsOf(p).includes(group));
      if (!members.length) return;

      const section = document.createElement("section");
      section.className = "people-group-section";
      section.innerHTML = `<h2>${group}</h2>`;
      
      const grid = document.createElement("div");
      grid.className = "people-grid";
      
      members.forEach(p => {
        const card = document.createElement("div");
        card.className = "person-card";
        card.innerHTML = `
          <img src="${p.image}" alt="${p.displayName}">
          <h3>${p.displayName}</h3>
          <p class="title">${p.admin.title}</p>
          ${p.email ? `<a href="mailto:${p.email}" class="person-email">${p.email}</a>` : ""}
        `;
        grid.appendChild(card);
      });
      section.appendChild(grid);
      contentContainer.appendChild(section);
    });
  }

  const filterUI = buildFilterUI(filterOptions, drawContent);
  container.appendChild(filterUI);
  container.appendChild(contentContainer);
  drawContent("all");
}

/* ==========================================
   FACULTY PAGE
   ========================================== */
function renderFacultyPage(container) {
  const list = people.filter(p => p.pages.includes("faculty"));
  
  // 1. Build Options
  const filterOptions = [{ label: "All Faculty", value: "all" }];
  FACULTY_DEPTS.forEach(dept => {
    filterOptions.push({ label: dept, value: dept });
  });

  // 2. Build UI
  const contentContainer = document.createElement("div");
  contentContainer.className = "people-content-container";

  function drawContent(activeFilter) {
    contentContainer.innerHTML = "";
    FACULTY_DEPTS.forEach(dept => {
      if (activeFilter !== "all" && activeFilter !== dept) return;

      ["full-time", "part-time"].forEach(type => {
        const members = list.filter(
          p => p.faculty.department === dept && p.faculty.type === type
        );
        if (!members.length) return;

        const section = document.createElement("section");
        section.className = "people-group-section";
        
        if (activeFilter === "all") {
          section.innerHTML = `<h2>${dept}</h2>`;
        }
        
        const sub = document.createElement("div");
        sub.className = "faculty-subgroup";
        sub.innerHTML = `<h3>${type === "full-time" ? "Full-Time" : "Part-Time"}</h3>`;
        
        const grid = document.createElement("div");
        grid.className = "people-grid";
        
        members.forEach(p => {
          const card = document.createElement("div");
          card.className = "person-card";
          card.innerHTML = `
            <a href="${p.profileUrl || '#'}">
              <img src="${p.image}" alt="${p.displayName}">
              <h3>${p.displayName}</h3>
            </a>
            <p class="title">${p.faculty.title}</p>
            ${p.research ? `<p class="research">${p.research}</p>` : ""}
            ${p.email ? `<a href="mailto:${p.email}" class="person-email">${p.email}</a>` : ""}
          `;
          grid.appendChild(card);
        });
        
        sub.appendChild(grid);
        section.appendChild(sub);
        contentContainer.appendChild(section);
      });
    });
  }

  const filterUI = buildFilterUI(filterOptions, drawContent);
  container.appendChild(filterUI);
  container.appendChild(contentContainer);
  drawContent("all");
}