// HERO SLIDER (homepage)
const images = [
  "images/hero2.png",
  "images/hero1.png",
  "images/hero3.png"
];

let index = 0;

const heroImage = document.getElementById("heroImage");
const prevBtn = document.querySelector("[data-hero-prev]");
const nextBtn = document.querySelector("[data-hero-next]");

function showImage() {
  if (heroImage) {
    heroImage.src = images[index];
  }
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage();
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage();
  });
}

showImage();

// MOBILE MENU
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
  });
}

// MOBILE DROPDOWNS
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach(toggle => {
  toggle.addEventListener("click", (event) => {
    if (window.innerWidth <= 768) {
      event.preventDefault();
      const parent = toggle.closest(".dropdown");
      parent.classList.toggle("dropdown-open");

      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
    }
  });
});
