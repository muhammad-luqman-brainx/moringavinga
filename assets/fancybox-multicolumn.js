Fancybox.bind("[data-fancybox]", {
    // Your custom options
    transition: "crossfade",
    loop            : true,
    Thumbs: false,
    center: true
});

var triggers = document.querySelectorAll(".work-info-bg");
  
triggers.forEach(function(trigger) {
  trigger.addEventListener("click", function() {
    var img = this.nextElementSibling;
    img.click();
  });
});