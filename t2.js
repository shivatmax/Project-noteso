const navbarToggle = document.querySelector("#navbarToggle");
const hiddenNavbar = document.querySelector("#hiddenNavbar");

navbarToggle.addEventListener("click", function() {
  hiddenNavbar.classList.toggle("d-block");
});
