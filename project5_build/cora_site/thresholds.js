const headerTag = document.querySelector("header");
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav div");

document.addEventListener("scroll", function () {
  const pixelsScrolled = window.scrollY;

  sections.forEach((section) => {
    if (section.offsetTop <= pixelsScrolled + 100) {
      navLinks.forEach((link) => {
        if (link.id === section.getAttribute("data-section")) {
          link.querySelector("a").style.color = "peru";
        } else {
          link.querySelector("a").style.color = "";
        }
      });
    }
  });
});
