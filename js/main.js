var bannerSlider = new Swiper(".hero", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1500,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 6500,
  },
});
