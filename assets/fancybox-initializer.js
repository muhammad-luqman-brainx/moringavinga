document.addEventListener('DOMContentLoaded', function() {
    var triggerDiv = document.querySelector('.product-gallery__trigger');
    
    if (triggerDiv) {
      triggerDiv.addEventListener('click', function() {
        var galleryImages = document.querySelectorAll('[data-fancybox="gallery"]');
        var images = [];
  
        galleryImages.forEach(function(image) {
          images.push({
            src: image.getAttribute('src'),  // Assuming the href attribute contains the image URL
            opts: {
              // Custom options for the image
            }
          });
        });
  
        Fancybox.show(images, {
          // Your custom options for the gallery
          transition: "crossfade",
          loop            : true,
          Thumbs: false,
          center: true
        });
      });
    }
  });
  