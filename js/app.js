//* Nav Toggler
const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});

//* Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

window.onbeforeunload = function () {
  window.scrollTo(0, 0); // Scrolls the window to the top before unloading
};
window.onload = function () {
  window.scrollTo(0, 0); // Scrolls the window to the top when the page loads
};
