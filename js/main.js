var bannerSlider = new Swiper(".hero", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1800,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 6500,
  },
});

var featuredSwiper = new Swiper(".featured_slider", {
  loop: true,
  slidesPerView: 3,
  speed: 1500,
  autoplay: {
    delay: 4500,
  },
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
