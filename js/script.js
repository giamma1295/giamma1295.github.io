const translations = {
  it: {
    title: "Gianmaria Scorza | Backend Engineer",
    description:
      "Backend Engineer specializzato in architetture scalabili, sistemi distribuiti e cloud engineering.",
    hero_subtitle:
      "Backend Engineer specializzato in architetture scalabili, sistemi distribuiti e cloud engineering.",
    hero_email: "Scrivimi",
    about_title: "Chi Sono",
    about_text:
      "Progetto e sviluppo sistemi backend ad alta affidabilità con forte attenzione a scalabilità, osservabilità e qualità del codice. Lavoro principalmente con TypeScript e paradigmi funzionali in ambienti cloud.",
    stack_title: "Competenze Tecniche",
    contact_title: "Contattami",
    contact_text:
      "Disponibile per collaborazioni su sistemi backend complessi e architetture cloud.",
    contact_button: "Scrivimi",
    privacy_note:
      "Questo sito non utilizza cookie né raccoglie dati degli utenti. I dati di traffico possono essere raccolti da Cloudflare per sicurezza e analisi.",
  },
  en: {
    title: "Gianmaria Scorza | Backend Engineer",
    description:
      "Backend Engineer specialized in scalable architectures, distributed systems and cloud engineering.",
    hero_subtitle:
      "Backend Engineer specialized in scalable architectures, distributed systems and cloud engineering.",
    hero_email: "Contact Me",
    about_title: "About Me",
    about_text:
      "I design and build highly reliable backend systems with strong focus on scalability, observability and code quality. I mainly work with TypeScript and functional paradigms in cloud environments.",
    stack_title: "Technical Skills",
    contact_title: "Get in Touch",
    contact_text:
      "Available for collaborations on complex backend systems and cloud architectures.",
    contact_button: "Contact Me",
    privacy_note:
      "This website does not use cookies or track user data. Traffic data may be collected by Cloudflare for security and analytics purposes.",
  },
};

function detectLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("lang")) return urlParams.get("lang");
  if (localStorage.getItem("lang")) return localStorage.getItem("lang");
  return navigator.language.startsWith("it") ? "it" : "en";
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  // Update Title
  document.getElementById("page-title").textContent = translations[lang].title;
  document
    .getElementById("meta-description")
    .setAttribute("content", translations[lang].description);

  // Update Page Content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });

  //Update Lang Buttons
  document.getElementById("btn-it").classList.remove("lang-active");
  document.getElementById("btn-en").classList.remove("lang-active");
  document.getElementById("btn-" + lang).classList.add("lang-active");
}

// Set Initial Language
setLang(detectLanguage());

// Intersection Observer fade-in
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
