import '../../node_modules/@fortawesome/fontawesome-free/js/all.min.js';

export function toggleNavbar(navBtn, dropNavbar) { 
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
    dropNavbar.classList.add('hidden');
  } else {
    navBtn.classList.add("open");
    dropNavbar.classList.remove('hidden');
  }
}

export function slider(carousel) {

  const items = carousel.querySelectorAll('.item');
  const selectedItem = carousel.querySelector('.item.selected');
  const nextBtn = carousel.querySelector('.navigation .next');
  const prevBtn = carousel.querySelector('.navigation .prev');
  const navigationMenu = carousel.querySelectorAll('.navigation ul li');

  let currentIndex = +selectedItem.dataset.target;
  let itemsLength = items.length;
  let intervalId = null;

  startInterval();

  nextBtn.addEventListener('click', () => clickEvent(1));
  prevBtn.addEventListener('click', () => clickEvent(2));
  navigationMenu.forEach((entry) => {
    entry.addEventListener('click', () => {
      endInterval();
      const targetIndex = +entry.dataset.target - 1;
      updateCarousel(targetIndex);
    });
  });
  function clickEvent(type) {

    endInterval();

    if (type === 1) {
      currentIndex = (currentIndex + 1) % itemsLength;
    } else if (type === 2) {
      currentIndex = (currentIndex - 1 + itemsLength) % itemsLength;
    }

    updateCarousel(currentIndex);
  }
  function updateCarousel(itemIndex) {

    const carouselContainer =  carousel.querySelector('.container');
    items.forEach(item => item.classList.remove('selected'));
    items[itemIndex].classList.add('selected');
    navigationMenu.forEach((entry) => {
      if (entry.dataset.target == itemIndex + 1) {
        navigationMenu.forEach((li) => li.classList.remove('bg-slate-50/50'));
        entry.classList.add('bg-slate-50/50');
      }
    });
    let itemWidth = carouselContainer.offsetWidth;
    window.addEventListener('resize', () => {
      itemWidth = carouselContainer.offsetWidth;
    });
    const scrollLeftValue = currentIndex * itemWidth;
    carouselContainer.scrollTo({
      left: scrollLeftValue,
    });
    startInterval();
  }
  
  function startInterval() {
    if (intervalId === null) {
      intervalId = setInterval(() => clickEvent(1), 5000);
  }
  } 

  function endInterval() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
}

export function rating(form) {
  const ratingStars = form.querySelectorAll(".rating-star");
  let rating = 1;
  ratingStars.forEach((entry) => {
    
    entry.addEventListener('click', () => {
      const ratingInput = form.querySelector("input[name='rating']");
      rating = +entry.dataset.rating;
      updateStars(rating);
      ratingInput.value = rating;
      console.log(ratingInput);
    });
  });
  function updateStars(rating) {
      
    let i = 0;
    ratingStars.forEach((entry) => { 
      entry.querySelector('.star').classList.remove('far');
      entry.querySelector('.star').classList.remove('text-slate-500');
      entry.querySelector('.star').classList.remove('fas');
      entry.querySelector('.star').classList.remove('text-yellow-400');
    });
    for (let i = 0; i < rating; i++){
      ratingStars[i].querySelector('.star').classList.add('fas');
      ratingStars[i].querySelector('.star').classList.add('text-yellow-400');
    }
  }
}

export * from "./_functions.mjs";