const text = document.querySelector("#home .home-wrapper .home-text");

// Home
const slider = document.querySelector(".slider");
const home = document.querySelector("#home ");
const img = document.querySelector("#home .home-wrapper .home-img img");

// About
const story = document.querySelector("#about .story");

// Timeline
const tl = gsap.timeline();

tl.fromTo(
  slider,
  1.5,
  { x: "0%", backgroundColor: "rgba(245,0,87,1)" },
  { x: "-100%", backgroundColor: "white", ease: Power2.easeInOut }
)
  .fromTo(text, 1, { y: 50 }, { y: 0, ease: Power2.easeInOut }, "-=1")
  .fromTo(img, 1, { y: 50 }, { y: 0, ease: Power2.easeInOut }, "-=1");

AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
});

// Hamburger menu
const ham = document.querySelector("#mobile .hamburger");
const navLinks = document.querySelector("#mobile .nav-links");
const link = document.querySelectorAll("#mobile .nav-links li");

ham.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  link.forEach((lin) => lin.classList.toggle("fade"));
});

link.forEach((lin) => {
  lin.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    link.forEach((lin) => lin.classList.toggle("fade"));
  });
});
