var anchorTag = document.querySelector(".skip-hash"); // Replace "yourAnchorTagId" with the actual ID of your anchor tag

anchorTag.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default link behavior

  var parentSection = anchorTag.closest(".shopify-section.section");

  if (parentSection) {
    var nextSection = parentSection.nextElementSibling; // Get the next sibling section

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }
});
