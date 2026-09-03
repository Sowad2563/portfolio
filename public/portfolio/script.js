// PERSONALIZE HERE: replace these sample values with your own biodata.
const profile = {
  name: "Sowad Ahmed",
  initials: "SA",
  role: "Retired Bangladesh Army Corps of Signals officer",
  summary: "A disciplined and adaptable professional with experience in administration, IT management, military communications, and technical operations.",
  email: "swdmil682@gmail.com",
  bio: [
    ["Full name", "Sowad Ahmed"], ["Date of birth", "19 November 1997"], ["Nationality", "Bangladeshi"],
    ["Location", "Dhaka, Bangladesh"], ["Phone", "+8801769510682"], ["Languages", "Bangla (Native)\nEnglish (Bilingual Proficiency)\nArabic (Elementary)"],
  ],
  education: [
    { period: "2017 - 2023", title: "Bachelor of Science in Computer Science & Engineering", place: "Bangladesh University of Professionals · CGPA 3.56 / 4.00", mark: "BUP", image: "assets/bup-campus.png", imageAlt: "Bangladesh University of Professionals academic building" },
    { period: "2013 - 2015", title: "Higher Secondary Certificate (HSC)", place: "Jhenidah Cadet College · GPA 5.00 / 5.00", mark: "JCC", image: "assets/jcc-campus.png", imageAlt: "Jhenidah Cadet College campus" },
    { period: "2015 - 2017", title: "Secondary School Certificate (SSC)", place: "Jhenidah Cadet College · GPA 5.00 / 5.00", mark: "JCC", image: "assets/jcc-campus.png", imageAlt: "Jhenidah Cadet College campus" },
  ],
  employment: [
    { period: "18 Jun 2020 - 09 Aug 2026", title: "Captain, Bangladesh Army", organization: "4 Signal Battalion\n3 Signal Battalion", logo: "https://ispr.gov.bd/wp-content/uploads/2024/08/Army-logo-1-3.jpg", logoAlt: "Bangladesh Army emblem", duties: ["Led teams in administrative, communication, and IT operations.", "Managed data servers, networks, and CCTV operations.", "Conducted army-level video teleconferences.", "Coordinated with civil administration during national elections and internal security duties."] },
    { period: "07 Nov 2024 - 07 Jan 2026", title: "Communication Officer", organization: "President Guard Regiment (PGR)", logo: "assets/pgr-insignia.webp", logoAlt: "President Guard Regiment insignia", duties: ["Planned and executed communications for VIP security.", "Supported residential and workplace security for state VIPs.", "Ran internal CCTV servers, network, and IT operations.", "Coordinated with BTCL, PWD, SSF, and other organizations for VIP security operations in and outside Dhaka."] },
  ],
  training: { title: "AWGC (Army War Game Center) - Simulation and Database Operations", description: "Learned the algorithm and workflow of French simulation software Sword developed by Masa, and contributed to the development of indigenous war game center software." },
  courses: ["Signal Officers Basic Course", "Officers Weapon Course", "Basic Commando Course", "Special Guard and Tactical Support Training", "Certified Data Center Professional (CDCP)", "CompTIA A+ (Hardware and Basic Networking)"],
  goal: "I bring proven leadership, technical operations experience, and a disciplined approach to solving complex problems and achieving organizational objectives.",
  skillGroups: [
    { title: "Programming", skills: ["C++", "Python", "Java", "JavaScript", "SQL"] },
    { title: "IT & Systems", skills: ["IT & Networking", "Server Management", "Security Analysis", "CCTV Operations"] },
    { title: "Leadership & Management", skills: ["Leadership", "Communication", "Team Coordination", "General Administration"] },
    { title: "Tools & Creative", skills: ["Microsoft Office", "Google Workspace", "Visual Studio", "Adobe Illustrator", "Canva", "Procreate"] },
  ],
  socials: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/sowad-ahmed-0038bb3a2/" }, { label: "GitHub", url: "https://github.com/Sowad2563" }],
};

document.title = `${profile.name} — Biodata Portfolio`;
document.querySelector("meta[name='description']").content = `Personal biodata portfolio for ${profile.name}.`;
document.querySelector("#logo-initials").textContent = profile.initials;
document.querySelector("#hero-role").textContent = profile.role;
document.querySelector("#hero-name").textContent = `${profile.name}.`;
document.querySelector("#hero-summary").textContent = profile.summary;
document.querySelector("#footer-name").textContent = profile.name;
const email = document.querySelector("#email-link");
email.href = `mailto:${profile.email}`;
email.firstChild.textContent = `${profile.email} `;
document.querySelector("#bio-cards").innerHTML = profile.bio.map(([label, value], index) => `<article class="bio-card"><span>0${index + 1}</span><p>${label}</p><h3>${value}</h3></article>`).join("");
document.querySelector("#education-list").innerHTML = profile.education.map(item => {
  const image = item.image ? `<img class="education-institution-image" src="${item.image}" alt="${item.imageAlt}" />` : "";
  return `<article class="${item.image ? "education-with-image" : ""}">${image}<span>${item.period}</span><strong>${item.title}</strong><p>${item.place}</p><b class="education-watermark" aria-hidden="true">${item.mark}</b></article>`;
}).join("");
document.querySelector("#employment-list").innerHTML = profile.employment.map(item => `<article><span>${item.period}</span><div class="employment-role">${item.logo ? `<img class="employment-logo" src="${item.logo}" alt="${item.logoAlt}" />` : ""}<div><h3>${item.title}</h3><p>${item.organization}</p></div></div><ul>${item.duties.map(duty => `<li>${duty}</li>`).join("")}</ul></article>`).join("");
document.querySelector("#training-title").textContent = profile.training.title;
document.querySelector("#training-description").textContent = profile.training.description;
document.querySelector("#courses-list").innerHTML = profile.courses.map(course => `<li>${course}</li>`).join("");
document.querySelector("#career-goal").textContent = profile.goal;
const skillMarks = {
  "C++": "C++", Python: "Py", Java: "J", SQL: "SQL", "IT & Networking": "IT", "Server Management": "SV",
  "Security Analysis": "SEC", "CCTV Operations": "CAM", Leadership: "LD", Communication: "COM", "Team Coordination": "TC",
  "General Administration": "ADM", "Microsoft Office": "MS", "Google Workspace": "G", "Visual Studio": "VS",
  "Adobe Illustrator": "Ai", Canva: "C", Procreate: "P",
};
const skillLogos = {
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "Microsoft Office": "assets/logos/microsoft-office.svg",
  "Google Workspace": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
  "Visual Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg",
  "Adobe Illustrator": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg",
  Canva: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
  Procreate: "assets/logos/procreate.svg",
};
function skillIcon(skill) {
  return skillLogos[skill]
    ? `<img src="${skillLogos[skill]}" alt="${skill} logo" />`
    : `<b aria-hidden="true">${skillMarks[skill] || skill.slice(0, 2)}</b>`;
}
document.querySelector("#skills-list").innerHTML = profile.skillGroups.map(group => `<article class="skill-group"><h3>${group.title}</h3><div>${group.skills.map(skill => `<span class="skill-badge">${skillIcon(skill)}${skill}</span>`).join("")}</div></article>`).join("");
const socialIcons = {
  LinkedIn: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.4 8.2H3.1V21h3.3V8.2ZM4.8 3A1.9 1.9 0 1 0 4.8 6.8 1.9 1.9 0 0 0 4.8 3ZM21 13.7c0-3.9-2.1-5.7-4.9-5.7-2.3 0-3.3 1.2-3.9 2.1V8.2H8.9V21h3.3v-6.3c0-1.7.3-3.3 2.4-3.3 2.1 0 2.1 1.9 2.1 3.4V21H21v-7.3Z"/></svg>',
  GitHub: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .9.1-.6.4-1.1.7-1.3-2.3-.3-4.7-1.1-4.7-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.7 1a9.3 9.3 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .4.9.3 1.9.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.5Z"/></svg>',
};
document.querySelector("#social-links").innerHTML = profile.socials.map(({ label, url }) => `<a class="social-link" href="${url}" target="_blank" rel="noreferrer" aria-label="Visit Sowad Ahmed's ${label} profile">${socialIcons[label] || ""}<span>${label}</span></a>`).join("");

const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") root.classList.add("dark");
function updateThemeLabel() { toggle.setAttribute("aria-label", root.classList.contains("dark") ? "Switch to light theme" : "Switch to dark theme"); }
updateThemeLabel();
toggle.addEventListener("click", () => { root.classList.toggle("dark"); localStorage.setItem("portfolio-theme", root.classList.contains("dark") ? "dark" : "light"); updateThemeLabel(); });
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");
mobileMenuToggle.addEventListener("click", () => { const isOpen = mobileMenuToggle.getAttribute("aria-expanded") === "true"; mobileMenuToggle.setAttribute("aria-expanded", String(!isOpen)); mobileNav.hidden = isOpen; });
mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { mobileMenuToggle.setAttribute("aria-expanded", "false"); mobileNav.hidden = true; }));

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
const skillsSection = document.querySelector(".skills-section");
const skillsObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("skills-active"); skillsObserver.unobserve(entry.target); } }), { threshold: .25 });
skillsObserver.observe(skillsSection);
const employmentSection = document.querySelector(".employment");
const employmentObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("employment-active"); employmentObserver.unobserve(entry.target); } }), { threshold: .2 });
employmentObserver.observe(employmentSection);
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#back-to-top").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
