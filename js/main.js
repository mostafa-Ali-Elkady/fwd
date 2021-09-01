
// Home swiper
var swiper = new Swiper(".home-slider", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 39000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});