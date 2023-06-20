
// IMPORT FUNCTIONS
import * as functions from "./_functions.mjs";

const navBtn = document.querySelector("#nav-btn");
const dropNavbar = document.querySelector("#drop-navbar");
const carousel = document.querySelector('#carousel');

navBtn.addEventListener('click',()=>functions.toggleNavbar(navBtn, dropNavbar));
dropNavbar.querySelectorAll("li").forEach((entry) => entry.addEventListener('click', () => functions.toggleNavbar(navBtn, dropNavbar)));


functions.slider(carousel);
