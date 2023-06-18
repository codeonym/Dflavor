
// IMPORT FUNCTIONS
import * as functions from "./_functions.mjs";

const navBtn = document.querySelector("#nav-btn");
const dropnavbar = document.querySelector("#drop-navbar");

navBtn.addEventListener('click',()=>functions.toggleNvabar(navBtn, dropnavbar));
dropnavbar.querySelectorAll("li").forEach((entry) => entry.addEventListener('click', () => functions.toggleNvabar(navBtn, dropnavbar)));



