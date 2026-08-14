import { content } from "./content.js";

const pageContent = content.contact;

const createContactHeader = () => {
  const headerEl = document.createElement("header");
  headerEl.classList.add("contact-header");
  const titleEl = document.createElement("h2");
  titleEl.textContent = pageContent.title;
  const subtitleEl = document.createElement("p");
  subtitleEl.textContent = pageContent.subtitle;
  headerEl.append(titleEl, subtitleEl);
  return headerEl;
};

const createCardLocation = () => {
  const locationCardEl = document.createElement("div");
  locationCardEl.classList.add("contact-card");
  const titleEl = document.createElement("h3");
  titleEl.textContent = pageContent.location.title;
  const addressEl = document.createElement("address");
  const addressLineEl = document.createElement("p");
  addressLineEl.textContent = pageContent.location.address[0];
  const addressLine2El = document.createElement("p");
  addressLine2El.textContent = pageContent.location.address[1];
  const phoneLinkEl = document.createElement("a");
  phoneLinkEl.href = `tel:${pageContent.location.phone.replace(/\D/g, "")}`;
  phoneLinkEl.textContent = pageContent.location.phone;
  const emailLinkEl = document.createElement("a");
  emailLinkEl.href = `mailto:${pageContent.location.email}`;
  emailLinkEl.textContent = pageContent.location.email;
  addressEl.append(addressLineEl, addressLine2El, phoneLinkEl, emailLinkEl);
  locationCardEl.append(titleEl, addressEl);
  return locationCardEl;
};

const createCardSchedule = () => {
  const scheduleCardEl = document.createElement("div");
  scheduleCardEl.classList.add("contact-card");
  const sectionTitleEl = document.createElement("h3");
  sectionTitleEl.textContent = pageContent.hours.title;
  const scheduleListEl = document.createElement("dl");
  pageContent.hours.schedule.forEach(({ day, time }) => {
    const dayTermEl = document.createElement("dt");
    dayTermEl.textContent = day;
    const hourDetailEl = document.createElement("dd");
    hourDetailEl.textContent = time;
    scheduleListEl.append(dayTermEl, hourDetailEl);
  });
  scheduleCardEl.append(sectionTitleEl, scheduleListEl);
  return scheduleCardEl;
};

const createCardsGrid = () => {
  const gridEl = document.createElement("div");
  gridEl.classList.add("contact-grid");
  gridEl.append(createCardLocation(), createCardSchedule());
  return gridEl;
};

const createMapPlaceholder = () => {
  const mapEl = document.createElement("div");
  mapEl.classList.add("contact-map");
  const mapTextEl = document.createElement("span");
  mapTextEl.textContent = pageContent.map;
  mapEl.append(mapTextEl);
  return mapEl;
};

const createContact = (container) => {
  container.append(
    createContactHeader(),
    createCardsGrid(),
    createMapPlaceholder(),
  );
};

export { createContact };
