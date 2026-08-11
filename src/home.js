import { content } from "./content.js";

const pageContent = content.home;

const createHero = () => {
  const heroEl = document.createElement("section");
  heroEl.classList.add("hero");
  const heroLabelEl = document.createElement("span");
  heroLabelEl.textContent = pageContent.hero.label;
  heroLabelEl.classList.add("hero-label");
  const heroTitleEl = document.createElement("h1");
  heroTitleEl.textContent = pageContent.hero.title;
  heroTitleEl.classList.add("hero-title");
  const heroSubtitleEl = document.createElement("p");
  heroSubtitleEl.textContent = pageContent.hero.subtitle;
  heroSubtitleEl.classList.add("hero-subtitle");
  heroEl.append(heroLabelEl, heroTitleEl, heroSubtitleEl);
  return heroEl;
};

const createDivider = () => {
  const dividerEl = document.createElement("div");
  dividerEl.classList.add("divider");
  const spanEl = document.createElement("span");
  spanEl.textContent = pageContent.divider;
  dividerEl.append(spanEl);
  return dividerEl;
};

const createFeatures = () => {
  const featuresEl = document.createElement("section");
  featuresEl.classList.add("features");
  const cards = pageContent.features.cards;
  cards.forEach((card) => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("feature-card");
    cardEl.innerHTML = card.icon;
    const titleEl = document.createElement("h3");
    titleEl.classList.add("feature-card-title");
    titleEl.textContent = card.title;
    const descriptionEl = document.createElement("p");
    descriptionEl.classList.add("feature-card-description");
    descriptionEl.textContent = card.description;
    cardEl.append(titleEl, descriptionEl);
    featuresEl.append(cardEl);
  });
  return featuresEl;
};

const createHome = (container) => {
  container.append(createHero(), createDivider(), createFeatures());
};

export { createHome };
