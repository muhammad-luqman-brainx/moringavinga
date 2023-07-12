var tooltipHeadings = document.querySelectorAll(".tooltip-heading");
var tooltipClose = document.querySelectorAll(".tooltip-close");
var tooltips = document.querySelectorAll(".tooltip");

tooltipHeadings.forEach((tooltipHeading) => {
  var tooltip = tooltipHeading.querySelector(".tooltip");
  tooltipHeading.addEventListener("click", function () {
    if (window.innerWidth <= 990) {
      tooltipHeadings.forEach((tooltipHeadinginner) => {
        if(tooltipHeadinginner != tooltipHeading){
            tooltipHeadinginner.classList.remove("hover");
        }
        
      });
      tooltips.forEach((tooltipInner) => {
        if(tooltipInner != tooltip){
        tooltipInner.classList.remove("show");
        }
      });
      tooltipHeading.classList.toggle("hover");
      tooltip.classList.toggle("show");
      tooltip.setAttribute(
        "aria-hidden",
        tooltip.classList.contains("show") ? "false" : "true"
      );
    }
  });

  tooltipHeading.addEventListener("mouseenter", function () {
    if (window.innerWidth > 990) {
      tooltipHeading.classList.add("hover");
      tooltip.style.display = "block";
      tooltip.setAttribute("aria-hidden", "false");
    }
  });

  tooltipHeading.addEventListener("mouseleave", function () {
    if (window.innerWidth > 990) {
      tooltipHeading.classList.remove("hover");
      tooltip.style.display = "none";
      tooltip.setAttribute("aria-hidden", "true");
    }
  });
});

tooltipClose.forEach((close) => {
  close.addEventListener("click", function (event) {
    event.stopPropagation();
    close.closest(".tooltip-heading").classList.remove("hover");
    close.closest(".tooltip").classList.remove("show");
  });
});
