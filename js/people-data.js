// people.js
// Sorted alphabetically by lastName, then firstName.
// image: from admin HTML when person exists in both lists; otherwise faculty HTML.
// profileUrl: exact href from source (case preserved). Empty string if no profile page.

const people = [

  /* ---------- A ---------- */
  {
    firstName: "Khaled", lastName: "Abdallah",
    displayName: "Khaled Abdallah",
    email: "ka25@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/avatar.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ka25",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Raja", lastName: "Abdallah",
    displayName: "Raja Abdallah",
    email: "ra157@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Raja%20Abdullah.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ra157",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Rita", lastName: "Abdallah",
    displayName: "Rita Abdallah",
    email: "ra529@aub.edu.lb",
    image: "/Style Library/AUB/images/FMISProfilePic.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Integrated Marketing Strategy Coordinator" },
    faculty: null
  },
  {
    firstName: "Kassem", lastName: "Abdel Al Nabi",
    displayName: "Kassem Abdel Al Nabi",
    email: "ka67@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Lists/Staff/AllItems/Kassem-AbdelAlNabi.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Undergraduate Program", title: "Academic Support Officer" },
    faculty: null
  },
  {
    firstName: "Amine", lastName: "Abi Aad",
    displayName: "Amine Abi Aad",
    email: "aa502@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Amin%20MME.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=aa502",
    research: "Strategic management, emerging economies, competitiveness, informal economy, institutional economics, cultural intelligence, and international business.",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Assistant Professor", type: "full-time" }
  },
  {
    firstName: "Rabih", lastName: "Abi Ammar",
    displayName: "Rabih Abi Ammar",
    email: "ra491@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Rabih%20Abi%20Ammar%20pic.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ra491",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Instructor", type: "part-time" }
  },
  {
    firstName: "Mirna", lastName: "Abou Mjahed",
    displayName: "Mirna Abou Mjahed",
    email: "ma624@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/mirna.jpeg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ma624",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Business Information & Decision Systems", title: "Visiting Assistant Professor", type: "full-time" }
  },
  {
    firstName: "Barbara", lastName: "Abou Tanos",
    displayName: "Barbara Abou Tanos",
    email: "ba93@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/barbara%20updated.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ba93",
    research: "Financial Markets, Institutional Investors, Portfolio Management, Behavioral Finance, Risk Management, Information Asymmetry",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Assistant Professor", type: "full-time" }
  },
  {
    firstName: "Fida", lastName: "Afiouni",
    displayName: "Fida Afiouni",
    email: "fa16@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Fida%20MME.png",
    profileUrl: "http://www.aub.edu.lbhttps://www.aub.edu.lb/pages/profile.aspx?memberId=fa16",
    research: "Inclusive HRM Systems, Gender Equality Plans, Critical feminism, Social justice, Qualitative research",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Professor", type: "full-time" }
  },
  {
    firstName: "Yasser", lastName: "Akkawi",
    displayName: "Yasser Akkawi",
    email: "ya10@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Yasser%20Akkawi.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ya10",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Instructor", type: "part-time" }
  },
  {
    firstName: "Rima", lastName: "Akoum",
    displayName: "Rima Akoum",
    email: "ra402@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Rima%20Akoum.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ra402",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Jihad", lastName: "Al Hokayem",
    displayName: "Jihad Al Hokayem",
    email: "je76@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/jihad.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=je76",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Hussein", lastName: "Al Jardali",
    displayName: "Hussein Al Jardali",
    email: "ha332@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/avatar.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Research Associates and Post-Doc", title: "Research Associate" },
    faculty: null
  },
  {
    firstName: "Mona", lastName: "Aldana",
    displayName: "Mona Aldana",
    email: "ma666@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/14.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Travel and Logistics Administrator" },
    faculty: null
  },
  {
    firstName: "Mohamad", lastName: "Ali Hassan",
    displayName: "Mohamad Ali Hassan",
    email: "ma25@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Mohamad%20Ali-Hassan.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ma25",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Instructor", type: "part-time" }
  },
  {
    firstName: "Muhammad", lastName: "Aljukhadar",
    displayName: "Muhammad Aljukhadar",
    email: "ma458@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Muhammad%20Aljukhadar.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Research Associates and Post-Doc", title: "Research Associate" },
    faculty: null
  },
  {
    firstName: "Lynn", lastName: "Al Ghazzi",
    displayName: "Lynn Al Ghazzi",
    email: "la167@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/15.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Graduate Programs", title: "Graduate Program Recruitment Advisor" },
    faculty: null
  },
  {
    firstName: "Victor", lastName: "Araman",
    displayName: "Victor Araman",
    email: "va03@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Victor.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=va03",
    research: "Stochastic modeling with focus on operations and pricing analytics issues. Including queueing systems, dynamic pricing, machine learning and experimentation",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Business Information & Decision Systems", title: "Professor", type: "full-time" }
  },
  {
    firstName: "Ghina", lastName: "Arnaout",
    displayName: "Ghina Arnaout",
    email: "ga93@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Lists/Staff/AllItems/Ghina-Arnaout.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Graphic Designer" },
    faculty: null
  },
  {
    firstName: "Ali", lastName: "Awdeh",
    displayName: "Ali Awdeh",
    email: "aa180@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Ali%20Awadeh.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=aa180",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Bijan", lastName: "Azad",
    displayName: "Bijan Azad",
    email: "ba20@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Bijan.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=ba20",
    research: "Organization-technology change; information technology; innovation; startups/scale-ups",
    pages: ["admin", "faculty"],
    admin: { group: "Research Initiatives and Centers", title: "Director, Darwazah Center for Innovation Management and Entrepreneurship" },
    faculty: { department: "Business Information & Decision Systems", title: "Professor", type: "full-time" }
  },
  {
    firstName: "Lara", lastName: "Azar",
    displayName: "Lara Azar",
    email: "la150@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Lists/Staff/AllItems/Lara-Azar.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Executive Programs", title: "Program and Event Delivery Coordinator" },
    faculty: null
  },
  {
    firstName: "Henry", lastName: "Azzam",
    displayName: "Henry Azzam",
    email: "ha138@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/HenryAzzam.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=ha138",
    research: "MENA Financial Markets, Fintech, Banking, Central bank digital currency",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Senior Lecturer", type: "full-time" }
  },

  /* ---------- B ---------- */
  {
    firstName: "Fatima", lastName: "Baydoun",
    displayName: "Fatima Baydoun",
    email: "ffb07@mail.aub.edu",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/faima.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Data Analyst" },
    faculty: null
  },
  {
    firstName: "Rima", lastName: "Beyh",
    displayName: "Rima Beyh",
    email: "rb167@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/member6.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Undergraduate Program", title: "Advisor for Probation Students" },
    faculty: null
  },
  {
    firstName: "Rim", lastName: "Bitar",
    displayName: "Rim Bitar",
    email: "rb13@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Rim%20Bitar.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=rb13",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Malak", lastName: "Borghol",
    displayName: "Malak Borghol",
    email: "mb223@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Lists/Staff/AllItems/Malak%20Bourghul.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Research Initiatives and Centers", title: "Assistant Director, Darwazah Center for Innovation Management and Entrepreneurship" },
    faculty: null
  },
  {
    firstName: "Imad", lastName: "Bou Hamad",
    displayName: "Imad Bou Hamad",
    email: "ib12@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Imad%20Bou%20Hamad.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=ib12",
    research: "Statistical Modeling & Predictive Analytics with Application to Consumer/Human Behavior, Organizational Performance, Public Opinion",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Business Information & Decision Systems", title: "Associate Professor", type: "full-time" }
  },

  /* ---------- C ---------- */
  {
    firstName: "Alejandro", lastName: "Centeno",
    displayName: "Alejandro Centeno",
    email: "ar96@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/ar96.JPG",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ar96",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Assistant Professor", type: "full-time" }
  },
  {
    firstName: "Ali", lastName: "Charif",
    displayName: "Ali Charif",
    email: "ac34@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Ali%20Charif.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ac34",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Instructor", type: "part-time" }
  },
  {
    firstName: "Yousra", lastName: "Chebbo",
    displayName: "Yousra Chebbo",
    email: "yc18@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/avatar.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Research Associates and Post-Doc", title: "Research Assistant" },
    faculty: null
  },
  {
    firstName: "Hussein", lastName: "Chokr",
    displayName: "Hussein Chokr",
    email: "hc53@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/facultyresearch/bkpi/PublishingImages/Hussein%20Ch%20(002).JPG",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Research Initiatives and Centers", title: "Knowledge to Policy Researcher" },
    faculty: null
  },

  /* ---------- D ---------- */
  {
    firstName: "Jihad", lastName: "Dagher",
    displayName: "Jihad Dagher",
    email: "jd76@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/_Jihad%20Dagher.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=jd76",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Associate Professor", type: "full-time" }
  },
  {
    firstName: "Alain", lastName: "Daou",
    displayName: "Alain Daou",
    email: "ad73@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Alain.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ad73",
    research: "Entrepreneurship, social entrepreneurship, sustainable entrepreneurship, intellectual capital, (sustainable) business models, organizing in times of grand challenges.",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Associate Professor", type: "full-time" }
  },
  {
    firstName: "Wassim", lastName: "Dbouk",
    displayName: "Wassim Dbouk",
    email: "wd08@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Wassim%20Dbouk.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=wd08",
    research: "Banking and Debt Markets, Banking, Supply Chain Finance, Economic Uncertainty, Investments, Valuation",
    pages: ["admin", "faculty"],
    admin: { group: "Academic Administration", title: "Director of the Investment Management Program" },
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Associate Professor", type: "full-time" }
  },
  {
    firstName: "Karim", lastName: "Dimitri",
    displayName: "Karim Dimitri",
    email: "kd11@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Karim%20Dimitri.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=kd11",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Riad", lastName: "Dimechkie",
    displayName: "Riad Dimechkie",
    email: "rd28@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Riad%20D1.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=rd28",
    research: "Strategic Management, Judgment and Decision Making, Influence and Persuasion",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Senior Lecturer", type: "full-time" }
  },

  /* ---------- E ---------- */
  {
    firstName: "Ziad", lastName: "El Awad",
    displayName: "Ziad El Awad",
    email: "ze44@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Ziad%20MME.png",
    profileUrl: "https://aub.edu.lbhttps://www.aub.edu.lb/pages/profile.aspx?MemberId=ze44",
    research: "",
    pages: ["admin", "faculty"],
    admin: { group: "Academic Administration", title: "Assistant Professor & MME Track Convener" },
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Assistant Professor & MME Track Convener", type: "full-time" }
  },
  {
    firstName: "Rima", lastName: "El Chaar",
    displayName: "Rima El Chaar",
    email: "rs32@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/rima%20shaar%20updated%20.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=rs32",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Rola", lastName: "El Chami-Malaeb",
    displayName: "Rola El Chami-Malaeb",
    email: "ra440@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/rola%20chami%20updated%20.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ra440",
    research: "Talent management, HR practices, organizational support, employees' well-being, quality of work life, turnover intention, and quantitative research.",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Assistant Professor", type: "full-time" }
  },
  {
    firstName: "Bassima", lastName: "El Dana",
    displayName: "Bassima El Dana",
    email: "br20@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/member5.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Manager of the Career Management Services" },
    faculty: null
  },
  {
    firstName: "Dania", lastName: "El-Ashi",
    displayName: "Dania El-Ashi",
    email: "de21@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Dania.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Faculty IT Manager" },
    faculty: null
  },
  {
    firstName: "Carla", lastName: "El-Hage",
    displayName: "Carla El-Hage",
    email: "ce20@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Carla.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Financial Affairs Coordinator" },
    faculty: null
  },
  {
    firstName: "Ahmad", lastName: "El Hajj",
    displayName: "Ahmad El Hajj",
    email: "ae37@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/ahmad%20hajj.jpeg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ae37",
    research: "",
    pages: ["admin", "faculty"],
    admin: { group: "Graduate Programs", title: "MSBA Director" },
    faculty: { department: "Business Information & Decision Systems", title: "Senior Lecturer & MSBA Director", type: "full-time" }
  },
  {
    firstName: "Sana", lastName: "El Hajj",
    displayName: "Sana El Hajj",
    email: "",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Sana%20Hajj%201%20-%20Copy.jpg",
    profileUrl: "https://www.aub.edu.lb/articleshttps://www.aub.edu.lb/pages/AUB-mourns-Sana-El-Hajj.aspx",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "In Memoriam - Lecturer", type: "full-time" }
  },
  {
    firstName: "Maya", lastName: "El-Helo",
    displayName: "Maya El-Helo",
    email: "helou@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Maya.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Graduate Programs", title: "Director" },
    faculty: null
  },
  {
    firstName: "Nadim", lastName: "El Kak",
    displayName: "Nadim El Kak",
    email: "ne124@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Nadim%20El%20Kak%20pic.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ne124",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Amr", lastName: "El Kebbi",
    displayName: "Amr El Kebbi",
    email: "ae177@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/amr%20kebbi%20updated.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ae177",
    research: "Entrepreneurship, Strategy, and Business Ethics",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Assistant Professor", type: "full-time" }
  },
  {
    firstName: "Said", lastName: "Elfakhani",
    displayName: "Said Elfakhani",
    email: "se01@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Fekhani%20-%20Copy.JPG",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=se01",
    research: "Corporate finance, International finance, Investment and derivative securities; Emerging markets, Dividend policy; Islamic finance",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Professor & Interim Director of Executive Education", type: "full-time" }
  },

  /* ---------- F ---------- */
  {
    firstName: "Hiba", lastName: "Faour",
    displayName: "Hiba Faour",
    email: "hf75@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Hiba-Faour.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Graduate Programs", title: "Graduate Programs Coordinator" },
    faculty: null
  },
  {
    firstName: "Mohamad", lastName: "Faour",
    displayName: "Mohamad Faour",
    email: "mf132@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Lists/Mohammad-Faour.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=mf132",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Assistant Professor", type: "full-time" }
  },
  {
    firstName: "Hussein", lastName: "Fares",
    displayName: "Hussein Fares",
    email: "hf83@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Hussein%20Fares.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=hf83",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Instructor", type: "part-time" }
  },
  {
    firstName: "Mohamad", lastName: "Fheili",
    displayName: "Mohamad Fheili",
    email: "mf155@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/facultyresearch/bkpi/PublishingImages/fheili%20(002).jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Research Initiatives and Centers", title: "Executive in Residence" },
    faculty: null
  },
  {
    firstName: "Krzysztof", lastName: "Fleszar",
    displayName: "Krzysztof Fleszar",
    email: "kf09@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Fleszar.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=kf09",
    research: "Deterministic Operations Research; heuristics",
    pages: ["admin", "faculty"],
    admin: { group: "Academic Administration", title: "Associate Dean of Programs" },
    faculty: { department: "Business Information & Decision Systems", title: "Associate Dean of Programs & BIDS Track Convener", type: "full-time" }
  },

  /* ---------- G ---------- */
  {
    firstName: "Roula", lastName: "Gerges Abou Rjeily",
    displayName: "Roula Gerges Abou Rjeily",
    email: "rg52@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Roula%20Gergess%20MME.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=rg52",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Senior Lecturer", type: "full-time" }
  },
  {
    firstName: "Rita", lastName: "Geutcherian",
    displayName: "Rita Geutcherian",
    email: "rg00@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Rita1.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=rg00",
    research: "Business Statistics",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Business Information & Decision Systems", title: "Senior Lecturer", type: "full-time" }
  },
  {
    firstName: "Abdel Jalil", lastName: "Ghanem",
    displayName: "Abdel Jalil Ghanem",
    email: "ag10@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/AbdelJalil.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=ag10",
    research: "Financial Accounting & reporting, Management Accounting, Audit/Tax",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Senior Lecturer", type: "full-time" }
  },
  {
    firstName: "Rajab", lastName: "Ghazzawi",
    displayName: "Rajab Ghazzawi",
    email: "rg41@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Rajab.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Executive Programs", title: "Proposal Writing and Program Design Manager" },
    faculty: null
  },

  /* ---------- H ---------- */
  {
    firstName: "Yara", lastName: "Haddad",
    displayName: "Yara Haddad",
    email: "yh42@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Yara%20Haddad.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Digital Media Manager" },
    faculty: null
  },
  {
    firstName: "Hiba", lastName: "Hamade",
    displayName: "Hiba Hamade",
    email: "hh62@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Lists/Staff/AllItems/HibaHamade.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Executive Programs", title: "Program Manager" },
    faculty: null
  },
  {
    firstName: "Malak", lastName: "Hamade",
    displayName: "Malak Hamade",
    email: "mh394@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/malak.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=mh394",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Senior Lecturer", type: "full-time" }
  },
  {
    firstName: "Jamal", lastName: "Hamza",
    displayName: "Jamal Hamza",
    email: "jh57@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Lists/Staff/AllItems/Jamal-Hamzah.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Undergraduate Program", title: "Undergraduate Program Coordinator" },
    faculty: null
  },
  {
    firstName: "Raed", lastName: "Hanoun",
    displayName: "Raed Hanoun",
    email: "re172@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/raed%20hanoun.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=re172",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Mostafa", lastName: "Harakeh",
    displayName: "Mostafa Harakeh",
    email: "mh371@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Mostafa%20Harakeh.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=mh371",
    research: "Financial reporting, corporate finance, capital market accounting research, and financial reporting.",
    pages: ["admin", "faculty"],
    admin: { group: "Research Initiatives and Centers", title: "Research Director of the Rami F. Makhzoumi Corporate Governance Initiative (RMCGI)" },
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Associate Professor and Research Director of the Rami F. Makhzoumi Corporate Governance Initiative (RMCGI)", type: "full-time" }
  },
  {
    firstName: "Tarek", lastName: "Harb",
    displayName: "Tarek Harb",
    email: "th69@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/tarek.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Content Creator" },
    faculty: null
  },
  {
    firstName: "Zeina", lastName: "Harfoush Nsouli",
    displayName: "Zeina Harfoush Nsouli",
    email: "zh79@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Zeina.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Undergraduate Program", title: "Executive Director of the Undergraduate Program" },
    faculty: null
  },
  {
    firstName: "Sandreen", lastName: "Hitti",
    displayName: "Sandreen Hitti",
    email: "sh265@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Dr.%20Sandreen%20Hitti.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=sandreenhitti",
    research: "",
    pages: ["admin", "faculty"],
    admin: { group: "Research Associates and Post-Doc", title: "Research Associate" },
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Bassima", lastName: "Hout",
    displayName: "Bassima Hout",
    email: "bh03@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Bassima.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=bh03",
    research: "Auditing, Consulting",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Senior Lecturer", type: "full-time" }
  },

  /* ---------- I ---------- */
  {
    firstName: "Ahmad", lastName: "Ismail",
    displayName: "Ahmad Ismail",
    email: "ai05@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Ismail%20-%20Copy.JPG",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=ai05",
    research: "Mergers and Acquisitions, SEOs, Corporate Governance, Emerging Markets",
    pages: ["admin", "faculty"],
    admin: { group: "Academic Administration", title: "Associate Professor & FAME Track Convener" },
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Associate Professor & FAME Track Convener", type: "full-time" }
  },
  {
    firstName: "Mona", lastName: "Itani",
    displayName: "Mona Itani",
    email: "mi34@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Mona%20MME.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=mi34",
    research: "Entrepreneurship (high-growth, high-tech, youth, women), Entrepreneurial ecosystems, Social entrepreneurship, Social innovation, Innovative teaching in the 21st century.",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Assistant Professor", type: "full-time" }
  },
  {
    firstName: "Nabile", lastName: "Itani",
    displayName: "Nabile Itani",
    email: "ni27@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/nabila.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ni27",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Lecturer", type: "part-time" }
  },

  /* ---------- J ---------- */
  {
    firstName: "Jad", lastName: "Jaber",
    displayName: "Jad Jaber",
    email: "jj30@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Jad%20Jaber.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=jj30",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Instructor", type: "part-time" }
  },
  {
    firstName: "Ibrahim", lastName: "Jamali",
    displayName: "Ibrahim Jamali",
    email: "ij08@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/GetFMISFile.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=ij08",
    research: "Futures Markets, Predictability in Asset Markets, Financial Econometrics, Empirical Asset Pricing, Commodities",
    pages: ["admin", "faculty"],
    admin: { group: ["Executive Programs", "Graduate Programs"], title: "Executive MBA Director" },
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Associate Professor & Executive MBA Director", type: "full-time" }
  },
  {
    firstName: "Mahdi", lastName: "Jammal",
    displayName: "Mahdi Jammal",
    email: "mj118@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/1651237495119%20(1).jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=mj118",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Business Information & Decision Systems", title: "Lecturer", type: "full-time" }
  },

  /* ---------- K ---------- */
  {
    firstName: "Ali", lastName: "Kaafarani",
    displayName: "Ali Kaafarani",
    email: "ak102@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Ali%20K.jpeg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Senior Team Leader" },
    faculty: null
  },
  {
    firstName: "Bilal", lastName: "Kabbani",
    displayName: "Bilal Kabbani",
    email: "bk33@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Bilal.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Junior Clerk" },
    faculty: null
  },
  {
    firstName: "Rawia", lastName: "Kaissi",
    displayName: "Rawia Kaissi",
    email: "rk188@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Rawia%20Kaissi.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=rk188",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Instructor", type: "part-time" }
  },
  {
    firstName: "Amina", lastName: "Kamar",
    displayName: "Amina Kamar",
    email: "ak176@aub.edu.lb",
    image: "/Style Library/AUB/images/FMISProfilePic.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Research Associates and Post-Doc", title: "Research Associate" },
    faculty: null
  },
  {
    firstName: "Raghda", lastName: "Kawass",
    displayName: "Raghda Kawass",
    email: "rk231@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Raghda%20Rawas.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Research Initiatives and Centers", title: "Knowledge to Practice Researcher" },
    faculty: null
  },
  {
    firstName: "Rabih", lastName: "Kays",
    displayName: "Rabih Kays",
    email: "rk248@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Rabih%20Kays.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=rk248",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Instructor", type: "part-time" }
  },
  {
    firstName: "Ibrahim", lastName: "Kebbe",
    displayName: "Ibrahim Kebbe",
    email: "ik02@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/kebbe.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ik042",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Business Information & Decision Systems", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Michael", lastName: "Kfouri",
    displayName: "Michael Kfouri",
    email: "mk47@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Micheal%20MME.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=mk47",
    research: "Marketing Management, Marketing Communication, Consumer Behavior and International Marketing",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Instructor", type: "full-time" }
  },
  {
    firstName: "Jessy", lastName: "Kfoury",
    displayName: "Jessy Kfoury",
    email: "jk112@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Jessi%20MME.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=jk112",
    research: "Consumer behavior, social media, digital marketing, purchasing decisions, brand perceptions, and online landscape.",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Senior Lecturer", type: "full-time" }
  },
  {
    firstName: "Nada", lastName: "Khaddage",
    displayName: "Nada Khaddage",
    email: "nk171@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Lists/Staff/AllItems/Nada.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Research Initiatives and Centers", title: "Director, Center for Women in Business" },
    faculty: null
  },
  {
    firstName: "Mohsen", lastName: "Khalil",
    displayName: "Mohsen Khalil",
    email: "mk395@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Mohsen%20Khalil.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=mk395",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Nada", lastName: "Khalidy - Kouzi",
    displayName: "Nada Khalidy - Kouzi",
    email: "nk10@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/nada%20kouzi%20new.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Facilities and Events Manager" },
    faculty: null
  },
  {
    firstName: "Leila", lastName: "Khauli",
    displayName: "Leila Khauli",
    email: "lk02@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Leila%20MME.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=lk02",
    research: "Social Media strategy, Social Media in Digital Business, Branding Strategy, Business Communication Skills",
    pages: ["admin", "faculty"],
    admin: { group: "Graduate Programs", title: "MBA Program Director" },
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Senior Lecturer and MBA Director", type: "full-time" }
  },
  {
    firstName: "Wael", lastName: "Khreich",
    displayName: "Wael Khreich",
    email: "wk47@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/AUB-Faculty.JPG",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=wk47",
    research: "Gender Bias & Discrimination in AI; Hate Speech Recognition; Ethical AI; Machine Learning; Natural Language Processing",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Business Information & Decision Systems", title: "Assistant Professor", type: "full-time" }
  },
  {
    firstName: "Ohannes", lastName: "Kldshi Bashi",
    displayName: "Ohannes Kldshi Bashi",
    email: "ok22@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Ohannes.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Graphic Designer" },
    faculty: null
  },
  {
    firstName: "Ohannes", lastName: "Kozobiokian",
    displayName: "Ohannes Kozobiokian",
    email: "mk322@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Ohannes%20Kozo...png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=mk322",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Lecturer", type: "part-time" }
  },

  /* ---------- M ---------- */
  {
    firstName: "Elie", lastName: "Maalouf",
    displayName: "Elie Maalouf",
    email: "em54@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Elie%20Maalouf.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=em54",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Business Information & Decision Systems", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Mira", lastName: "Machmouchi",
    displayName: "Mira Machmouchi",
    email: "mm345@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/16.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Research Initiatives and Centers", title: "Academic Assistant for the Center for Women in Business" },
    faculty: null
  },
  {
    firstName: "Annia", lastName: "Mahfoud",
    displayName: "Annia Mahfoud",
    email: "sbstserv@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/member4.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Undergraduate Program", title: "Student Services Coordinator" },
    faculty: null
  },
  {
    firstName: "Rita", lastName: "Mahfouz",
    displayName: "Rita Mahfouz",
    email: "rm88@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Rita%20Mahfouz.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=rm88",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Instructor", type: "part-time" }
  },
  {
    firstName: "Tarek", lastName: "Mahmoud",
    displayName: "Tarek Mahmoud",
    email: "tm59@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Tarek%20Mahmoud.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=tm59",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Business Information & Decision Systems", title: "Instructor", type: "part-time" }
  },
  {
    firstName: "Yasmeen", lastName: "Makarem",
    displayName: "Yasmeen Makarem",
    email: "ym13@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Yasmeen%20MME.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ym13",
    research: "Human Resource Development/Management; Careers of women and other gender minorities, STEM, Critical management studies",
    pages: ["admin", "faculty"],
    admin: { group: "Graduate Programs", title: "MHRM Coordinator" },
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Assistant Professor & MHRM Coordinator", type: "full-time" }
  },
  {
    firstName: "Elie", lastName: "Majdalani",
    displayName: "Elie Majdalani",
    email: "em12@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Majdalani.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=em12",
    research: "Operations management; Information Technology",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Business Information & Decision Systems", title: "Senior Lecturer, Director of Career Readiness Program", type: "full-time" }
  },
  {
    firstName: "Salma", lastName: "Maroun",
    displayName: "Salma Maroun",
    email: "sm276@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Salma.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Research Associates and Post-Doc", title: "Research Associate" },
    faculty: null
  },
  {
    firstName: "Sylvian", lastName: "Massaad",
    displayName: "Sylvian Massaad",
    email: "sm213@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Sylvain%20Massaad%20pic.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=sm213",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Mohamad", lastName: "Mazboudi",
    displayName: "Mohamad Mazboudi",
    email: "mm137@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/M.Mazboudi_jpg.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=mm137",
    research: "Financial Reporting, Auditing, Corporate Governance",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Associate Professor", type: "full-time" }
  },
  {
    firstName: "Hussein", lastName: "Mazloum",
    displayName: "Hussein Mazloum",
    email: "hm164@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Houssein%20Mazloum.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=hm164",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Instructor", type: "part-time" }
  },
  {
    firstName: "Mohamad-Amir", lastName: "Merhabi",
    displayName: "Mohamad-Amir Merhabi",
    email: "mm392@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Mohammad%20MME.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=mm392",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Assistant Professor", type: "full-time" }
  },
  {
    firstName: "Farah", lastName: "Mneimneh",
    displayName: "Farah Mneimneh",
    email: "fm27@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Farah%20Mneimne.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=fm27",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Mohamad-Zakaria", lastName: "Mneimneh",
    displayName: "Mohamad-Zakaria Mneimneh",
    email: "",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Zakaria.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Building Attendant" },
    faculty: null
  },
  {
    firstName: "Tarek", lastName: "Moukalled",
    displayName: "Tarek Moukalled",
    email: "tm55@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Tarek%20M.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=tm55",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Hanaa", lastName: "Mounzer",
    displayName: "Hanaa Mounzer",
    email: "hm89@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Hanaa.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Executive Programs", title: "Program and Event Delivery Manager" },
    faculty: null
  },
  {
    firstName: "Lama", lastName: "Moussawi",
    displayName: "Lama Moussawi",
    email: "lm34@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Lama%20-%20Copy.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=lm34",
    research: "Stochastic Modeling; Revenue Management; Inventory & Supply Chain Management; Data Analytics",
    pages: ["admin", "faculty"],
    admin: { group: "Academic Administration", title: "Associate Dean for Research and Faculty Development" },
    faculty: { department: "Business Information & Decision Systems", title: "Professor & Associate Dean for Research and Faculty Development", type: "full-time" }
  },
  {
    firstName: "Samer", lastName: "Murshid",
    displayName: "Samer Murshid",
    email: "sm268@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/samer.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=sm268",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Instructor", type: "full-time" }
  },

  /* ---------- N ---------- */
  {
    firstName: "Walid", lastName: "Nasr",
    displayName: "Walid Nasr",
    email: "wn12@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Walid%20Nasr%20copy.jpg?Height=384",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=wn12",
    research: "Queueing Theory, Stochastic Processes, Computational Probability, Mathematical Modeling and Analysis, Inventory and Supply Chain Management, Simulation Methodology",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Business Information & Decision Systems", title: "Associate Professor", type: "full-time" }
  },
  {
    firstName: "Nada", lastName: "Naufal",
    displayName: "Nada Naufal",
    email: "nn94@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Lists/Staff/AllItems/Makhzoumi-Nada-Naufal.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Research Initiatives and Centers", title: "Director, The Rami Makhzoumi Corporate Governance Initiative" },
    faculty: null
  },

  /* ---------- O ---------- */
  {
    firstName: "Ibrahim", lastName: "Osman",
    displayName: "Ibrahim Osman",
    email: "io00@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Osman%20-%20Copy.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=io00",
    research: "",
    pages: ["admin"],
    admin: { group: "Research Associates and Post-Doc", title: "Research Associate" },
    faculty: null
  },

  /* ---------- P ---------- */
  {
    firstName: "Hagop", lastName: "Panossian",
    displayName: "Hagop Panossian",
    email: "hp01@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Hagop.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=hp01",
    research: "Strategic management; Management; Economics",
    pages: ["admin", "faculty"],
    admin: { group: "Academic Administration", title: "International Case Competition Program Director" },
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Senior Lecturer & International Case Competition Director", type: "full-time" }
  },

  /* ---------- R ---------- */
  {
    firstName: "Jessy", lastName: "Rahal",
    displayName: "Jessy Rahal",
    email: "jr57@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Jessy%20rahhal.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=jr57",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Ahmad", lastName: "Rizk",
    displayName: "Ahmad Rizk",
    email: "ar86@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Ahmad%20Rizk.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ar86",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Instructor", type: "part-time" }
  },
  {
    firstName: "Hassan", lastName: "Rkein",
    displayName: "Hassan Rkein",
    email: "hr56@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Hassan%20Rkein%20pic.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=hr56",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Lecturer", type: "part-time" }
  },

  /* ---------- S ---------- */
  {
    firstName: "Nathalie", lastName: "Saade",
    displayName: "Nathalie Saade",
    email: "ns91@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Nathalie%20MME.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ns91",
    research: "Human Resource Management, Organizational Behavior, Future of Work, Work Organization, Workplace Well-being, Attendance dynamics, Work-life Balance",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Assistant Professor", type: "full-time" }
  },
  {
    firstName: "Antoine", lastName: "Sabbagh",
    displayName: "Antoine Sabbagh",
    email: "as21@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/antoine.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=as21",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Instructor", type: "part-time" }
  },
  {
    firstName: "Fatima", lastName: "Safa",
    displayName: "Fatima Safa",
    email: "",
    image: "https://www.aub.edu.lb/osb/PublishingImages/avatar.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Facilities and Events Assistant" },
    faculty: null
  },
  {
    firstName: "Assem", lastName: "Safieddine",
    displayName: "Assem Safieddine",
    email: "as57@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/assem%20updated.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=as57",
    research: "Private equity, Capital acquisition, Mergers and acquisition, Corporate governance, Equity issuance",
    pages: ["admin", "faculty"],
    admin: { group: "Graduate Programs", title: "MFIN Director" },
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Professor & MFIN Director", type: "full-time" }
  },
  {
    firstName: "Jessica", lastName: "Said",
    displayName: "Jessica Said",
    email: "js142@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Jessica%20Said%20Professional%20Image.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=js142",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Randa", lastName: "Salamoun",
    displayName: "Randa Salamoun",
    email: "rs55@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/RandaSalamoun.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=rs55",
    research: "Information technology; connectivity; disruption; ICT; information systems",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Business Information & Decision Systems", title: "Assistant Professor & The Case Hub Director", type: "full-time" }
  },
  {
    firstName: "Gary", lastName: "Saliba",
    displayName: "Gary Saliba",
    email: "gs52@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Gary.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Executive Programs", title: "Interim Director of Executive Education" },
    faculty: null
  },
  {
    firstName: "Georges", lastName: "Samara",
    displayName: "Georges Samara",
    email: "gs50@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Georges%20MME.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=gs50",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Associate Professor", type: "full-time" }
  },
  {
    firstName: "Layan", lastName: "Sarkis",
    displayName: "Layan Sarkis",
    email: "ls37@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Lists/Staff/AllItems/Layan-Sarkis.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Academic Affairs Manager" },
    faculty: null
  },
  {
    firstName: "Elie", lastName: "Semaan Nasr",
    displayName: "Elie Semaan Nasr",
    email: "es64@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Elie%20Nasr-Photo_Elie%20Semaan%20Nasr.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=es64",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Business Information & Decision Systems", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Mohammad Hasan", lastName: "Senan",
    displayName: "Mohammad Hasan Senan",
    email: "ms406@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Lists/Staff/AllItems/MoSenan.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Accreditation Officer" },
    faculty: null
  },
  {
    firstName: "Amal", lastName: "Shbaro Al Halabi",
    displayName: "Amal Shbaro Al Halabi",
    email: "as303@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/Amal-Shbaro.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Administrative Assistant" },
    faculty: null
  },
  {
    firstName: "Mohammad", lastName: "Shoukeir",
    displayName: "Mohammad Shoukeir",
    email: "ms424@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Lists/Staff/AllItems/MS.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Executive Programs", title: "Proposal Writing and Program Design Manager" },
    faculty: null
  },
  {
    firstName: "Yusuf", lastName: "Sidani",
    displayName: "Yusuf Sidani",
    email: "ys01@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Sidani.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=ys01",
    research: "Business ethics; Gender & diversity; Work values",
    pages: ["admin", "faculty"],
    admin: { group: "Academic Administration", title: "Dean" },
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Dean & Professor", type: "full-time" }
  },
  {
    firstName: "Abir", lastName: "Sinno",
    displayName: "Abir Sinno",
    email: "as201@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Abir%20Sinno.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Director of Strategic Initiatives & Continuous Improvement" },
    faculty: null
  },
  {
    firstName: "Jessica", lastName: "Slaiby",
    displayName: "Jessica Slaiby",
    email: "js131@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/jess.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Graduate Programs", title: "Research Assistant for the MBA Program" },
    faculty: null
  },
  {
    firstName: "Zeina", lastName: "Succar",
    displayName: "Zeina Succar",
    email: "zs76@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/zeina-succar.jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Financial Officer" },
    faculty: null
  },
  {
    firstName: "Myriam", lastName: "Sultan El Ajami",
    displayName: "Myriam Sultan El Ajami",
    email: "ms451@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/PublishingImages/avatar.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "EMBA Academic Affairs Manager" },
    faculty: null
  },

  /* ---------- T ---------- */
  {
    firstName: "Sirine", lastName: "Taleb",
    displayName: "Sirine Taleb",
    email: "st60@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/334.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=st60",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Business Information & Decision Systems", title: "Assistant Professor", type: "full-time" }
  },
  {
    firstName: "Lina", lastName: "Tannir",
    displayName: "Lina Tannir",
    email: "lt01@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Lina%20Tannir%20-%20Copy.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=lt01",
    research: "Microfinance, Entrepreneurship, Social development",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Senior Lecturer", type: "full-time" }
  },
  {
    firstName: "Hussein", lastName: "Tarraf",
    displayName: "Hussein Tarraf",
    email: "ht33@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Hussein%20Tarraf.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ht33",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Lecturer", type: "part-time" }
  },
  {
    firstName: "Samir", lastName: "Trabulsi",
    displayName: "Samir Trabulsi",
    email: "ts01@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/PublishingImages/Samir%20Trabulsi.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=ts01",
    research: "",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Business Information & Decision Systems", title: "Lecturer", type: "part-time" }
  },

  /* ---------- U ---------- */
  {
    firstName: "Rania", lastName: "Uwaydah Mardini",
    displayName: "Rania Uwaydah Mardini",
    email: "ru00@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Rania%20-%20Copy.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=ru00",
    research: "Financial reporting, Public financial management, Management accounting, Audit, Governance, Fraud, Anti-corruption",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Finance, Accounting & Managerial Economics", title: "Senior Lecturer, Director of Corporate Engagement", type: "full-time" }
  },

  /* ---------- W ---------- */
  {
    firstName: "Marwan", lastName: "Wahbi",
    displayName: "Marwan Wahbi",
    email: "mw37@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Marwan%20MME.png",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?MemberId=mw37",
    research: "Theory of Planned Behavior, Diffusion of Innovation Theory, Technology Acceptance Models, Unified Theory of Acceptance, Use of Technology, Digital Marketing Communications, Augmented Reality, and Artificial Intelligence.",
    pages: ["faculty"],
    admin: null,
    faculty: { department: "Management, Marketing & Entrepreneurship", title: "Senior Lecturer", type: "full-time" }
  },

  /* ---------- Y ---------- */
  {
    firstName: "Alaa", lastName: "Youssef",
    displayName: "Alaa Youssef",
    email: "ay63@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/about/OSBstaff/Alaa%20Youssef.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Marketing Coordinator" },
    faculty: null
  },
  {
    firstName: "Sylvana", lastName: "Youssef",
    displayName: "Sylvana Youssef",
    email: "sy41@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/MBA/PublishingImages/Untitled%20design.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Graduate Programs", title: "MBA/OMBA Program Manager" },
    faculty: null
  },

  /* ---------- Z ---------- */
  {
    firstName: "Fouad", lastName: "Zablith",
    displayName: "Fouad Zablith",
    email: "fz13@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/Faculty%20Pictures/Zablith.jpg",
    profileUrl: "https://www.aub.edu.lb/pages/profile.aspx?memberId=fz13",
    research: "Knowledge Graphs; Ontologies; Semantic Web; Text and Sentiment Mining; Learning Environments; Data Visualization; Open Data; Meta Data",
    pages: ["admin", "faculty"],
    admin: { group: "Academic Administration", title: "Associate Professor - Associate Dean for Online Learning and Program Development" },
    faculty: { department: "Business Information & Decision Systems", title: "Associate Professor & Associate Dean for Online Learning and Program Development", type: "full-time" }
  },
  {
    firstName: "Nancy", lastName: "Zaarour",
    displayName: "Nancy Zaarour",
    email: "nz51@aub.edu.lb",
    image: "https://www.aub.edu.lb/osb/facultyresearch/bkpi/PublishingImages/Nancy%20(002).jpg",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Research Initiatives and Centers", title: "Research Associate" },
    faculty: null
  },
  {
    firstName: "Zeina", lastName: "Zein",
    displayName: "Zeina Zein",
    email: "zz25@aub.edu.lb",
    image: "/Style Library/AUB/images/FMISProfilePic.png",
    profileUrl: "",
    research: "",
    pages: ["admin"],
    admin: { group: "Administrators", title: "Facilities and Events Assistant" },
    faculty: null
  }
];