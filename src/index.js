import { createHome } from "./home.js";
import "./styles.css";

const contentEl = document.querySelector("#content");
if (!contentEl) throw new Error("Dom element not found");

createHome(contentEl);
