# Links to fix

Open any page with `?todo-links` at the end of the URL (for example `about-osb.html?todo-links`) to highlight the placeholder links marked `data-link-status="todo"`.

## Missing (href="#")
- All pages, sticky buttons: "Download Brochure" and "Contact Us"
- about-osb.html, hero button: "Explore Our Values". Suggested target: strategic-plan.html#values (that anchor now exists)
- meet-the-dean.html, profile card: "Office of the Dean". Suggested target: mailto:osbdean@aub.edu.lb
- work-at-osb.html: the 3 job cards ("View & apply")

## Doubtful
- about-osb.html, Explore cards: "Leadership & Governance" and "Work at OSB" open external AUB pages (Governance.aspx, Employment.aspx) instead of governance.html and work-at-osb.html
- about-osb.html, program tiles: "Specialized Masters", "PhD", "Executive Education", "OSB Online Programs" and "Lifelong Learning Institute" all go to the generic OSB homepage
- about-osb.html, program tiles: "MBA Online" and "Executive MBA" use the same URL as "MBA"
- All pages, "Ready to join OSB?" band: "Explore programs" goes to the OSB homepage. The copy says "or talk to admissions", but there is no admissions link
- global-recognitions.html: "Learn more" links for ACCA, SHRM and CFA go to those organisations' homepages, not to OSB-specific pages. MEBAS (mebas.org) is unverified
- Breadcrumbs: "About" is plain text on 8 pages but a link on global-recognitions/rankings. On administration.html, "Leadership & Governance" is not linked. faculty.html skips that level entirely
- rankings.html is not in the menu, so no nav item is highlighted there
- People data (js/people-data.js):
  - Sana El Hajj profileUrl is malformed: "https://www.aub.edu.lb/articleshttps://www.aub.edu.lb/pages/AUB-mourns-Sana-El-Hajj.aspx"
  - Fatima Baydoun email "ffb07@mail.aub.edu" (different domain from everyone else)
  - Profile IDs that don't match the email: Sandreen Hitti (MemberId=sandreenhitti vs sh265), Ibrahim Kebbe (ik042 vs ik02)
  - Admin cards open profiles in a new tab, faculty cards in the same tab
- Shared footer (external): footer-load-V.js requests footer.css and footer.js, but the AUB-OSB-shared-components repo only contains footer-v1.css and no footer.js
- Image path with a space: "images/AUB-OSB-Dean-YUSUF SIDANI.png" (works, but fragile)
