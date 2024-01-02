document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("mainNavbar");
  function toggleNavbar() {
    const scrollPosition = window.scrollY;
    if (scrollPosition < window.innerHeight) {
      navbar.classList.add("hide-navbar");
    } else {
      navbar.classList.remove("hide-navbar");
    }
  }

  window.addEventListener("load", toggleNavbar);
  window.addEventListener("scroll", toggleNavbar);
});
