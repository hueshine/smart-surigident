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
  slidesPerView: 4,
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

var thumbnailSlider = new Swiper(".thumbnail", {
  slidesPerView: 6,
  spaceBetween: 10,
  speed: 1800,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function changeImage(event) {
  let mainImage = document.querySelector("#mainImage");
  let imgElement = event.target;
  let srcValue = imgElement.getAttribute("src");
  mainImage.src = srcValue;
}
