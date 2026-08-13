import { content } from "./content.js";
import { images } from "./images.js";

const pageContent = content.menu;

const createMenuHeader = () => {
  const headerEl = document.createElement("header");
  headerEl.classList.add("menu-header");
  const titleEl = document.createElement("h2");
  titleEl.textContent = pageContent.title;
  const subtitleEl = document.createElement("p");
  subtitleEl.textContent = pageContent.subtitle;
  headerEl.append(titleEl, subtitleEl);
  return headerEl;
};

const createMenuList = (items) => {
  const listEl = document.createElement("ul");
  listEl.classList.add("menu-list");
  items.forEach((item) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("menu-item");
    const itemImg = document.createElement("div");
    itemImg.classList.add("menu-item-img");
    const imgEl = document.createElement("img");
    imgEl.src = images[item.image];
    imgEl.alt = item.name;
    itemImg.append(imgEl);
    const itemBody = document.createElement("div");
    itemBody.classList.add("menu-item-body");
    const itemTopEl = document.createElement("div");
    itemTopEl.classList.add("menu-item-top");
    const nameEl = document.createElement("h4");
    nameEl.classList.add("menu-item-name");
    nameEl.textContent = item.name;
    const priceEl = document.createElement("span");
    priceEl.classList.add("menu-item-price");
    priceEl.textContent = `R$ ${item.price}`;
    const descriptionEl = document.createElement("p");
    descriptionEl.classList.add("menu-item-description");
    descriptionEl.textContent = item.description;
    itemTopEl.append(nameEl, priceEl);
    itemBody.append(itemTopEl, descriptionEl);
    itemEl.append(itemImg, itemBody);
    listEl.append(itemEl);
  });
  return listEl;
};

const createMenuSections = () => {
  const fragment = document.createDocumentFragment();
  pageContent.sections.forEach((section) => {
    const sectionEl = document.createElement("section");
    sectionEl.classList.add("menu-section");
    const titleEl = document.createElement("h3");
    titleEl.classList.add("menu-title");
    titleEl.textContent = section.name;
    const listEl = createMenuList(section.plates);
    sectionEl.append(titleEl, listEl);
    fragment.append(sectionEl);
  });
  return fragment;
};

const createMenu = (container) => {
  container.append(createMenuHeader(), createMenuSections());
};

export { createMenu };
