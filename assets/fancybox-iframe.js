Fancybox.bind("[data-fancybox='iframe']", {
  // Your custom options
  transition: "crossfade",
  loop: true,
  Thumbs: false,
  center: true,
});

var trigger = document.querySelector(".iframe-play");

trigger.addEventListener("click", function () {
  var video = document.querySelector(".product__media-iframe");
  console.log(video)
  video.click();
});
