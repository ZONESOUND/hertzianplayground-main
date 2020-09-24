var $ = require("jquery");

module.exports = function () {
  let video = new Swiper("#video-all", {
    slidesPerView: "auto",
    spaceBetween: 0,
    initialSlide: 2,
    centeredSlides: true,
    speed: 1000,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });
};
