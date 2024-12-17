document.addEventListener("DOMContentLoaded", function () {
  const pixelsTag = document.querySelector("#pixel_count");
  const progressTag = document.querySelector(".progress_bar");
  const bodyTag = document.querySelector("body");
  const headerTag = document.querySelector("header");
  const sectionTitle = document.querySelector(".section_title");
  const pageOf = document.querySelector(".page_of");
  const sections = document.querySelectorAll("section");

  // Update pixel count as you scroll
  document.addEventListener("scroll", function () {
    const pixelsScrolled = window.scrollY;
    pixelsTag.innerHTML = Math.floor(pixelsScrolled);
    console.log("Pixels Scrolled:", pixelsScrolled);
  });

  // Update Progress Bar as you scroll
  document.addEventListener("scroll", function () {
    const pixelsScrolled = window.scrollY;
    const pageHeight = bodyTag.getBoundingClientRect().height;
    const totalScrollableDistance = pageHeight - window.innerHeight;
    const percentage = pixelsScrolled / totalScrollableDistance;
    progressTag.style.width = `${percentage * 100}%`;
  });

  // Section scroll functionality to update titles and styling
  document.addEventListener("scroll", function () {
    const pixelsScrolled = window.scrollY;

    sections.forEach((section) => {
      if (section.offsetTop <= pixelsScrolled) {
        sectionTitle.innerHTML = section.getAttribute("data-section");
        pageOf.innerHTML = section.getAttribute("data-page");

        // Toggle style based on data-reverse attribute
        if (section.hasAttribute("data-reverse")) {
          headerTag.classList.add("white");
        } else {
          headerTag.classList.remove("white");
        }
      }
    });
  });
});
