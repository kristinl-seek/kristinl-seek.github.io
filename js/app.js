const menuBtn = document.getElementById("hamburger-menu");
const popup = document.querySelector(".nav-popup");

// Toggle the popup when the menu button is clicked
menuBtn.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click from bubbling up to the window
  popup.classList.toggle("active");
});

// Close the popup if clicking outside of it
window.addEventListener("click", function (event) {
  if (!popup.contains(event.target) && !menuBtn.contains(event.target)) {
    popup.classList.remove("active");
  }
});
