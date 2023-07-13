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
    carouselStatus.innerHTML = `<span class="currentCount"><span>${slideNumber}</span></span>  / ${flkty.slides.length}`;
    setTimeout(function () {
      carouselStatus.querySelector(".currentCount span").style.transform =
        "translateX(0px)";
    }, 0);
  }
  updateStatus();

  flkty.on("select", updateStatus);
});
