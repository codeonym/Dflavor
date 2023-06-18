export function toggleNvabar(navBtn, dropnavbar) { 
  console.log("nav bar : ");
  console.log(navBtn);
  const firstSpan = navBtn.querySelector("span:nth-child(1)");
  const thirdSpan = navBtn.querySelector("span:nth-child(3)");

  firstSpan.classList.toggle("left-0");
  firstSpan.classList.toggle("right-0");
  thirdSpan.classList.toggle("left-0");
  thirdSpan.classList.toggle("right-0");

  if (navBtn.classList.contains("open")) {
    navBtn.classList.remove("open");
    dropnavbar.classList.add('hidden');
  } else {
    navBtn.classList.add("open");
    dropnavbar.classList.remove('hidden');
  }
}

export * from "./_functions.mjs";