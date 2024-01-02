function playAnimation() {
  const elements = document.querySelectorAll(".changingNumber");

  elements.forEach((element) => {
    anime({
      targets: element,
      innerHTML: [0, 14],
      round: 1,
      easing: "easeInOutExpo",
    });
  });
}

function checkElementVisibility() {
  const elementPosition = document
    .getElementById("event")
    .getBoundingClientRect();

  if (elementPosition.top < window.innerHeight) {
    playAnimation();
    window.removeEventListener("scroll", checkElementVisibility);
  }
}

window.addEventListener("scroll", checkElementVisibility);

checkElementVisibility();
