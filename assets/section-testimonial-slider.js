Flickity.prototype._createResizeClass = function() {
  this.element.classList.add('is-fullscreen');
};

Flickity.createMethods.push('_createResizeClass');

var resize = Flickity.prototype.resize;
Flickity.prototype.resize = function() {
  this.element.classList.remove('is-fullscreen');
  resize.call( this );
  this.element.classList.add('is-fullscreen');
};

var $carousel = jQuery(".main-carousel").flickity({
  contain: false,
  imagesLoaded: true,
  percentPosition: false,
  wrapAround: true,
  freeScroll: false,
  prevNextButtons: false,
  autoPlay: true,
  pauseAutoPlayOnHover: true,
  groupCells: false,
  imagesLoaded: true,
  percentPosition: true,
  setGallerySize: true,
  accessibility: false,
  autoPlay: 6000,
  cellAlign: "left",
  selectedAttraction: 0.015,
});


var $imgs = $carousel.find(".carousel-cover .carousel-content");
var docStyle = document.documentElement.style;
var transformProp =
  typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";
var flckty = $carousel.data("flickity");

$carousel.on("scroll.flickity", function () {
  if (jQuery(window).width() < 960) {
    return;
  }

  flckty.slides.forEach(function (slide, i) {
    var img = $imgs[i];
    var $SlideWidth = jQuery(".carousel-cover").outerWidth() + 52;
    var $scaleAmt = 1;
    var $translateXVal = 0;
    var $rotateVal = 0;
    var $slideZIndex = 10;
    var $opacityVal = 1;

    var vw = jQuery(window).width();
    var w2 = jQuery(".slider-section").outerWidth();
    var w3 = jQuery(".slider-container").outerWidth();
    var $extraWindowSpace = w3 - w2 + (vw - w3) / 2;

    var $slideOffset = jQuery(slide.cells[0].element).offset().left;
    var flkSlider = jQuery(
      ".main-carousel .carousel-cell:nth-child(" + (i + 1) + ")"
    );

    if (
      $slideOffset - $extraWindowSpace < 0 &&
      $slideOffset - $extraWindowSpace > $SlideWidth * -1
    ) {
      var $opacityVal = 1 + ($slideOffset - $extraWindowSpace + 70) / 550;
      var $scaleAmt = 1 + ($slideOffset - $extraWindowSpace) / 1500;
      var $translateXVal = ($slideOffset - $extraWindowSpace) * -1;
      var $rotateVal = (($slideOffset - $extraWindowSpace) / 25) * -1;
    }

    if (
      $slideOffset + 5 - $extraWindowSpace < 0 &&
      $slideOffset - $extraWindowSpace > $SlideWidth * -1
    ) {
      $slideZIndex = 5;
    } else {
      $slideZIndex = 7;
    }
    flkSlider.css({
      "z-index": $slideZIndex,
    });

    // img.parent().hasClass("is-selected")
    // if( jQuery(img).parent().hasClass("is-selected") ){ }
    jQuery(img)
      .parent()
      .css({
        transform:
          "perspective(800px) translateX(" +
          $translateXVal +
          "px) rotateY(" +
          $rotateVal +
          "deg) translateZ(0)",
        opacity: $opacityVal,
      });

    jQuery(img).css({
      transform: "scale(" + $scaleAmt + ") translateZ(0)",
    });
  });
});
