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

  nextBtn.addEventListener('click', () => {
    endInterval();
    currentIndex = (currentIndex + 1) % itemsLength;
    updateCarousel(currentIndex);
  });
  prevBtn.addEventListener('click', () => {
    endInterval();
    currentIndex = (currentIndex - 1 + itemsLength) % itemsLength;
    updateCarousel(currentIndex);
  });
  navigationMenu.forEach((entry) => {
    entry.addEventListener('click', () => {
      endInterval();
      const targetIndex = +entry.dataset.target - 1;
      updateCarousel(targetIndex);
    });
  });
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
    intervalId = setInterval(()=>nextBtn.click(), 5000);
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
  console.log(ratingStars);

  ratingStars.forEach((entry) => { 

    entry.addEventListener('click', () => {
      const ratingInput = form.querySelector("input[name='rating']");

      rating = +entry.dataset.rating;
      updateStars(rating);
      ratingInput.value = rating;
      console.log(ratingInput);
    });
    function updateStars(rating) {
      
      ratingStars.forEach((entry) => { 
        entry.classList.remove('fa-regular');
        entry.classList.remove('text-slate-500');
        entry.classList.remove('fa-solid');
        entry.classList.remove('text-yellow-400');
      });

      for (let i = 0; i < rating; i++){
        ratingStars[i].classList.add('fa-solid');
        ratingStars[i].classList.add('text-yellow-400');
      }
    }
  });
}

export * from "./_functions.mjs";