// ─── TRANSLATIONS ───────────────────────────────────────────────────────────

const translations = {
  ru: {
    eyebrow:    "Specialty Coffee · Москва",
    heroTitle:  "Кофе, который<br><em>запомнится</em>",
    heroSub:    "Свежая обжарка и идеальный вкус каждый день — в каждой чашке.",
    heroCta:    "Смотреть меню",

    why:        "Почему мы",
    menuNav:    "Меню",
    reviewsNav: "Отзывы",
    contactNav: "Контакты",

    whyLabel:   "Наши принципы",
    whyTitle:   "Почему выбирают нас",
    q1Title:    "Качество",
    q1Text:     "Лучшие зёрна со всего мира — Эфиопия, Колумбия, Бразилия. Только свежая обжарка.",
    q2Title:    "Атмосфера",
    q2Text:     "Уют и минимализм. Место, где хочется остаться на второй кофе и ещё один.",
    q3Title:    "Сервис",
    q3Text:     "Быстро и с улыбкой. Наши бариста знают своё дело и готовы ответить на любой вопрос.",

    menuLabel:  "Наши напитки",
    menuTitle:  "Меню",
    m1:  "Эспрессо",    m1d: "Чистый, плотный, концентрированный",
    m2:  "Капучино",    m2d: "Эспрессо и нежная молочная пена",
    m3:  "Латте",       m3d: "Мягкий, сливочный, согревающий",
    m4:  "Фильтр кофе", m4d: "Раскрытый вкус без лишнего",
    m5:  "Флэт уайт",   m5d: "Двойной эспрессо, меньше молока",
    m6:  "Альтернатива",m6d: "Пуровер, аэропресс, кемекс",

    revLabel:   "Гости о нас",
    revTitle:   "Отзывы",
    r1:  '"Лучший кофе, который я пробовал в Москве. Эспрессо идеален."',
    r1a: "— Алексей М.",
    r2:  '"Очень уютное место. Прихожу каждое утро — стало ритуалом."',
    r2a: "— Мария К.",
    r3:  '"Быстрое обслуживание, отличный вкус и приятная атмосфера."',
    r3a: "— Дмитрий П.",

    conLabel:   "Найти нас",
    conTitle:   "Контакты",
    conA: "Адрес", conP: "Телефон", conH: "Часы работы", conE: "Email",

    footer:     "Все права защищены.",
  },

  en: {
    eyebrow:    "Specialty Coffee · Moscow",
    heroTitle:  "Coffee you'll<br><em>remember</em>",
    heroSub:    "Fresh roast and perfect taste every day — in every cup.",
    heroCta:    "View menu",

    why:        "Why us",
    menuNav:    "Menu",
    reviewsNav: "Reviews",
    contactNav: "Contact",

    whyLabel:   "Our principles",
    whyTitle:   "Why choose us",
    q1Title:    "Quality",
    q1Text:     "The finest beans from around the world — Ethiopia, Colombia, Brazil. Always freshly roasted.",
    q2Title:    "Atmosphere",
    q2Text:     "Comfort and minimalism. A place where you always want to stay for one more cup.",
    q3Title:    "Service",
    q3Text:     "Fast and friendly. Our baristas know their craft and are happy to answer any question.",

    menuLabel:  "Our drinks",
    menuTitle:  "Menu",
    m1:  "Espresso",      m1d: "Clean, dense, concentrated",
    m2:  "Cappuccino",    m2d: "Espresso and silky milk foam",
    m3:  "Latte",         m3d: "Smooth, creamy, comforting",
    m4:  "Filter coffee", m4d: "Nuanced flavour, nothing extra",
    m5:  "Flat white",    m5d: "Double espresso, less milk",
    m6:  "Alternative",   m6d: "Pour-over, AeroPress, Chemex",

    revLabel:   "What guests say",
    revTitle:   "Reviews",
    r1:  '"Best coffee I\'ve tried in Moscow. The espresso is perfect."',
    r1a: "— Alexey M.",
    r2:  '"Such a cosy place. I come every morning — it\'s become a ritual."',
    r2a: "— Maria K.",
    r3:  '"Fast service, great taste, and a wonderful atmosphere."',
    r3a: "— Dmitry P.",

    conLabel:   "Find us",
    conTitle:   "Contact",
    conA: "Address", conP: "Phone", conH: "Opening hours", conE: "Email",

    footer:     "All rights reserved.",
  }
};

// ─── LANGUAGE SWITCHER ───────────────────────────────────────────────────────

function setLanguage(lang) {
  const t = translations[lang];

  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.getElementById('btn-ru').classList.toggle('active', lang === 'ru');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.documentElement.lang = lang;
}

// ─── SCROLL FADE-IN ──────────────────────────────────────────────────────────

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .menu-item, .review, .contact-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});
