Flickity.prototype._createResizeClass = function () {
    this.element.classList.add("is-fullscreen");
  };

  Flickity.createMethods.push("_createResizeClass");

  var resize = Flickity.prototype.resize;
  Flickity.prototype.resize = function () {
    this.element.classList.remove("is-fullscreen");
    resize.call(this);
    this.element.classList.add("is-fullscreen");
  };

var SliderElements = document.querySelectorAll('.multirow-carousel');

Array.prototype.forEach.call(SliderElements, function(element) {
  var flickityOptions = {
    contain: false,
    groupCells: true,
    pageDots: false,
    wrapAround: true,
    imagesLoaded: true,
    freeScroll: false,
    prevNextButtons: true,
    fade: true,
    autoPlay: false,
    pauseAutoPlayOnHover: true,
    accessibility: false,
    cellAlign: 'center',
    selectedAttraction: 0.015,
  };

  var flickityInstance = new Flickity(element, flickityOptions);
});
