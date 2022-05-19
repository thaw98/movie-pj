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
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
  items: 4,
  lazyLoad: true,
  loop: true,
  margin: 10,
});
