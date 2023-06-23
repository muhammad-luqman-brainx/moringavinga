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

  var elem = document.querySelector('.main-carousel');

  var $carousel = new Flickity( elem, {
    contain: false,
    imagesLoaded: true,
    percentPosition: false,
    wrapAround: true,
    freeScroll: false,
    prevNextButtons: false,
    pauseAutoPlayOnHover: true,
    groupCells: false,
    imagesLoaded: true,
    percentPosition: true,
    setGallerySize: true,
    accessibility: false,
    autoPlay: 7000,
    cellAlign: "left",
    selectedAttraction: 0.015,
  });

  var $imgs = elem.querySelectorAll(".carousel-cover .carousel-content");
  var docStyle = document.documentElement.style;
  var transformProp =
    typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";
  var flckty = Flickity.data( elem )

  
  $carousel.on( 'scroll', function () {
    if (window.innerWidth < 990) {
      return;
    }
    
    flckty.slides.forEach(function (slide, i) {
      var img = $imgs[i];
      var SlideWidth = document.querySelector(".carousel-cover").offsetWidth + 52;
      var scaleAmt = 1;
      var translateXVal = 0;
      var rotateVal = 0;
      var slideZIndex = 10;
      var opacityVal = 1;
    
      var vw = document.documentElement.clientWidth;
      if(vw > 990){
        vw = 990;
      }
      var sliderSectionWidth = document.querySelector(".slider-section").offsetWidth
      if (sliderSectionWidth < 1130) {
        sliderSectionWidth = 1130
      }
      var w2 = sliderSectionWidth - 465;
      
      var w3 = document.querySelector(".slider-container").offsetWidth;
      var extraWindowSpace = w3 - w2 + (vw - w3) / 2;
    
      var slideOffset = slide.cells[0].element.getBoundingClientRect().left + window.pageXOffset;
      var flkSlider = document.querySelector(
        ".main-carousel .carousel-cell:nth-child(" + (i + 1) + ")"
      );
    
      if (
        slideOffset - extraWindowSpace < 0 &&
        slideOffset - extraWindowSpace > SlideWidth * -1
      ) {
        opacityVal = 1 + (slideOffset - extraWindowSpace + 70) / 550;
        scaleAmt = 1 + (slideOffset - extraWindowSpace) / 1500;
        translateXVal = (slideOffset - extraWindowSpace) * -1;
        rotateVal = ((slideOffset - extraWindowSpace) / 25) * -1;
      }
    
      if (
        slideOffset + 5 - extraWindowSpace < 0 &&
        slideOffset - extraWindowSpace > SlideWidth * -1
      ) {
        slideZIndex = 5;
      } else {
        slideZIndex = 7;
      }
      flkSlider.style.zIndex = slideZIndex;
    
      img.parentElement.style.transform =
        "perspective(800px) translateX(" +
        translateXVal +
        "px) rotateY(" +
        rotateVal +
        "deg) translateZ(0)";
      img.parentElement.style.opacity = opacityVal - 0.12148;
    
      img.style.transform = "scale(" + scaleAmt + ") translateZ(0)";
    });
    
  });
