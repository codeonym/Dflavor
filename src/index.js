
// IMPORTS
import "./styles/input.css";
import * as functions from "./modules/_functions.mjs";

onload = () => {

  const navBtn = document.querySelector("#nav-btn");
const dropNavbar = document.querySelector("#drop-navbar");
const carousel = document.querySelector('#carousel');
const reviewForm = document.querySelector('#review-form');

navBtn.addEventListener('click',()=>functions.toggleNavbar(navBtn, dropNavbar));
dropNavbar.querySelectorAll("li").forEach((entry) => entry.addEventListener('click', () => functions.toggleNavbar(navBtn, dropNavbar)));

functions.slider(carousel);
functions.rating(reviewForm);
}


