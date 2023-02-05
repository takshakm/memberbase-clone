window.onscroll = function () {
  const nav = document.querySelector(".nav-container");
  if (window.pageYOffset > nav.offsetTop) {
    nav.classList.add("sticky");
    document.querySelector(".nav-container").style.position = "fixed";
    document.querySelector(".nav-container").style.top = "0";
    document.querySelector(".nav-container").style.width = "100%";
    document.querySelector(".nav-container").style.zIndex = "100";
  } else {
    nav.classList.remove("sticky");
    document.querySelector(".nav-container").style.position = "relative";
  }
};
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerToggle = document.getElementById("hamburger-toggle");
  const hamburgerMenu = document.getElementById("hamburger-menu");

  hamburgerToggle.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("hidden");
  });
});
