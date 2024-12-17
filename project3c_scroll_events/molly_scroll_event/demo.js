
const pixelsTag = document.querySelector("#pixel_count");
const bodyTag = document.querySelector("body");
const progressTag = document.querySelector(".progress_bar");
const headerTag = document.querySelector("header");
const sectionTitle = document.querySelector("header");
const pageOf = document.querySelector(".page_of");
const sections = document.querySelectorAll(".section");


///pixels scrolled
document.addEventListener("scroll", function () {
const pixelsScrolled = window.scrollY;
console.log(pixelsScrolled);
pixelsTag.innerHTML = Math.floor(pixelsScrolled);

});

///progress bar
document.addEventListener("scroll", function () {
  const pixelsScrolled = window.scrollY;
  const pageHeight = bodyTag.getBoundingClientRect().height;
  const totalScrollableDistance = pageHeight - window.innerHeight;
  const percentage = pixelsScrolled / totalScrollableDistance;

  progressTag.style.width = `${percentage * 100}%`;
  console.log(percentage);
})

/// Thresholds
document.addEventListener("scroll",function () {
  const pixelsScrolled = window.scrollY;

  sections.forEach(function (section) {
    const sectionDistanceFromTop = section.offsetTop;
    if (section.offsetTop <= pixelsScrolled) {
      //do something
      console.log(sectionDistanceFromTop);
      sectionTitle.innerHTML = section.getAttribute("data-section");
      pageOf.innerHTML = section.getAttribute("data-page");
        if(section.hasAttribute("data-reverse")) {
          headerTag.classList.add("white");
        } else {
          headerTag.classList.remove("white");
        }
    }
  });
});
