import { content } from "./content.js";
import { icons } from "./icons.js";

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

const createLocationTitle = () => {
  const locationTitleRowEl = document.createElement("div");
  locationTitleRowEl.classList.add("contact-row");
  const locationTitleIconEl = document.createElement("img");
  locationTitleIconEl.classList.add("icon");
  locationTitleIconEl.src = icons[pageContent.location.icon];
  const locationTitleEl = document.createElement("h3");
  locationTitleEl.textContent = pageContent.location.title;
  locationTitleRowEl.append(locationTitleIconEl, locationTitleEl);
  return locationTitleRowEl;
};

const createLocationInfo = () => {
  const addressEl = document.createElement("address");
  addressEl.classList.add("contact-info");
  const addressContainerEl = document.createElement("div");
  addressContainerEl.classList.add("contact-row");
  const addressIconEl = document.createElement("img");
  addressIconEl.alt = "";
  addressIconEl.src = icons[pageContent.location.address.icon];
  addressIconEl.classList.add("icon");
  const addressLinesEl = document.createElement("div");
  const addressLineEl = document.createElement("p");
  addressLineEl.textContent = pageContent.location.address.value[0];
  const addressLine2El = document.createElement("p");
  addressLine2El.textContent = pageContent.location.address.value[1];
  addressLinesEl.append(addressLineEl, addressLine2El);
  addressContainerEl.append(addressIconEl, addressLinesEl);
  const phoneContainerEl = document.createElement("div");
  phoneContainerEl.classList.add("contact-row");
  const phoneIconEl = document.createElement("img");
  phoneIconEl.alt = "";
  phoneIconEl.src = icons[pageContent.location.phone.icon];
  phoneIconEl.classList.add("icon");
  const phoneLinkEl = document.createElement("a");
  phoneLinkEl.href = `tel:${pageContent.location.phone.value.replace(/\D/g, "")}`;
  phoneLinkEl.textContent = pageContent.location.phone.value;
  phoneContainerEl.append(phoneIconEl, phoneLinkEl);
  const mailContainerEl = document.createElement("div");
  mailContainerEl.classList.add("contact-row");
  const mailIconEl = document.createElement("img");
  mailIconEl.alt = "";
  mailIconEl.src = icons[pageContent.location.email.icon];
  mailIconEl.classList.add("icon");
  const emailLinkEl = document.createElement("a");
  emailLinkEl.href = `mailto:${pageContent.location.email.value}`;
  emailLinkEl.textContent = pageContent.location.email.value;
  mailContainerEl.append(mailIconEl, emailLinkEl);
  addressEl.append(addressContainerEl, phoneContainerEl, mailContainerEl);
  return addressEl;
};

const createCardLocation = () => {
  const locationCardEl = document.createElement("div");
  locationCardEl.classList.add("contact-card");
  locationCardEl.append(createLocationTitle(), createLocationInfo());
  return locationCardEl;
};

const createScheduleTitle = () => {
  const scheduleTitleRowEl = document.createElement("div");
  scheduleTitleRowEl.classList.add("contact-row");
  const scheduleTitleIconEl = document.createElement("img");
  scheduleTitleIconEl.alt = "";
  scheduleTitleIconEl.src = icons[pageContent.hours.icon];
  scheduleTitleIconEl.classList.add("icon");
  const scheduleTitleEl = document.createElement("h3");
  scheduleTitleEl.textContent = pageContent.hours.title;
  scheduleTitleRowEl.append(scheduleTitleIconEl, scheduleTitleEl);
  return scheduleTitleRowEl;
};

const createScheduleList = () => {
  const scheduleListEl = document.createElement("dl");
  scheduleListEl.classList.add("contact-hours");
  pageContent.hours.schedule.forEach(({ day, time }) => {
    const dayTermEl = document.createElement("dt");
    dayTermEl.textContent = day;
    const hourDetailEl = document.createElement("dd");
    hourDetailEl.textContent = time;
    scheduleListEl.append(dayTermEl, hourDetailEl);
  });
  return scheduleListEl;
};

const createCardSchedule = () => {
  const scheduleCardEl = document.createElement("div");
  scheduleCardEl.classList.add("contact-card");
  scheduleCardEl.append(createScheduleTitle(), createScheduleList());
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
