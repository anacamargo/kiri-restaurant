import { createContact } from "./contact.js";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import "./styles.css";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");

const contentEl = document.querySelector("#content");
if (!contentEl || !homeBtn || !menuBtn || !contactBtn)
  throw new Error("Dom element not found");

const setActiveTab = (btn) => {
  [homeBtn, menuBtn, contactBtn].forEach((tab) => {
    tab.classList.remove("active");
  });
  btn.classList.add("active");
};

const loadPage = (pageFn, btn) => {
  setActiveTab(btn);
  contentEl.replaceChildren();
  pageFn(contentEl);
};

homeBtn.addEventListener("click", () => loadPage(createHome, homeBtn));
menuBtn.addEventListener("click", () => loadPage(createMenu, menuBtn));
contactBtn.addEventListener("click", () => loadPage(createContact, contactBtn));

loadPage(createHome, homeBtn);
