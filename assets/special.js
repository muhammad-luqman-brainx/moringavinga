const buttons = document.querySelectorAll(".hotspot.click");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    buttons.forEach(function (btn) {
      if (btn !== button) {
        btn.classList.remove("open");
        var nextSection = btn.nextElementSibling;
        if (nextSection) {
          nextSection.classList.remove("open");
        }
      }
    });

    button.classList.toggle("open");
    var nextSection = button.nextElementSibling; // Get the next sibling section

    if (nextSection) {
      nextSection.classList.toggle("open");
    }
  });
});
const closeTooltips = document.querySelectorAll(".tipclose");
closeTooltips.forEach(function (closeTooltip) {
  closeTooltip.addEventListener("click", function (event) {
    event.preventDefault();
    var Tooltip = closeTooltip
      .closest(".hotspot_wrap")
      .querySelector(".hotspot");
    Tooltip.classList.toggle("open");
    var nextSection = Tooltip.nextElementSibling; // Get the next sibling section

    if (nextSection) {
      nextSection.classList.toggle("open");
    }
  });
});
