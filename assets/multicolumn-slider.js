var SliderElements = document.querySelectorAll('.multicolumn-carousel');

Array.prototype.forEach.call(SliderElements, function(element) {
  var flickityOptions = {
    contain: false,
    groupCells: true,
    imagesLoaded: true,
    wrapAround: true,
    freeScroll: false,
    prevNextButtons: false,
    autoPlay: false,
    pauseAutoPlayOnHover: true,
    accessibility: false,
    cellAlign: 'center',
    selectedAttraction: 0.015,
  };

  var flickityInstance = new Flickity(element, flickityOptions);
});
