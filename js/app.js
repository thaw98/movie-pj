var waypoint = new Waypoint({
  element: document.getElementById("trending"),
  handler: function (direction) {
    if (direction === "down") {
      document.querySelector(".navbar").classList.add("navbar-control");
      document.querySelector(".navbar").classList.add("animate__fadeInDown");
      document.querySelector(".navbar").classList.add("shadow-slate-400");
    } else {
      document.querySelector(".navbar").classList.remove("navbar-control");
      document.querySelector(".navbar").classList.remove("animate__fadeInDown");
      document.querySelector(".navbar").classList.remove("shadow-slate-400");
    }
  },
  offset: "70%",
});
// Carousel
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3400,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
