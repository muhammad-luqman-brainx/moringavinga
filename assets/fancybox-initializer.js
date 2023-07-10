Fancybox.bind("[data-fancybox]", {
  transition: "crossfade",
  loop: true,
  Thumbs: false,
  center: true
});

document.addEventListener("DOMContentLoaded", function () {
  var triggerElements = document.querySelectorAll(".product-gallery__trigger");
  triggerElements.forEach((triggerDiv) => {
    triggerDiv.addEventListener("click", function () {
      var img = this.closest("modal-opener").querySelector(".product__media img");
      img.click();
    });
  });
});
