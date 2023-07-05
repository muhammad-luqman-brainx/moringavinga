var SliderElements = document.querySelectorAll('.multicolumn-carousel');

Array.prototype.forEach.call(SliderElements, function(element) {
  var flickityOptions = {
    contain: false,
    groupCells: true,
    imagesLoaded: true,
    wrapAround: true,
    groupCells: 1,
    freeScroll: false,
    prevNextButtons: true,
    pageDots: true,
    autoPlay: false,
    pauseAutoPlayOnHover: true,
    accessibility: false,
    cellAlign: 'center',
    selectedAttraction: 0.015,
  };

  var flickityInstance = new Flickity(element, flickityOptions);
});
