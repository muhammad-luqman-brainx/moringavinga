var SliderElements = document.querySelectorAll(".testimonial-carousel-v2");

Array.prototype.forEach.call(SliderElements, function (element) {
  var flickityOptions = {
    contain: false,
    groupCells: true,
    pageDots: false,
    fade: true,
    wrapAround: true,
    imagesLoaded: true,
    freeScroll: false,
    prevNextButtons: true,
    autoPlay: false,
    pauseAutoPlayOnHover: true,
    accessibility: false,
    cellAlign: "center",
    selectedAttraction: 0.015,
  };

  var flkty = new Flickity(element, flickityOptions);
  var carouselStatus = document.querySelector(".carousel-status");

  function updateStatus() {
    var slideNumber = flkty.selectedIndex + 1;
    carouselStatus.textContent = slideNumber + " / " + flkty.slides.length;
  }
  updateStatus();

  flkty.on("select", updateStatus);
});
