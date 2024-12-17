// pick all of the elements and layer them based on the z-index
const slideArea = document.querySelector(".yawn");
const elements = slideArea.querySelectorAll(".y, .a_2, .w, .n_2");

// we want to keep track of two things
let currentSlide = 0;
let z = 1;

// when i click the slide area, change the slide based on z-index
slideArea.addEventListener("click", function () {
  currentSlide = currentSlide + 1;

  if (currentSlide > elements.length - 1) {
    currentSlide = 0;
  }

  z = z + 1;

  // remove the animation from the style for EVERY IMAGE
  elements.forEach((image) => {
    image.style.animation = "";
  });

  // pick the right image
  elements[currentSlide].style.zIndex = z;
  elements[currentSlide].style.animation = "fade 0.5s";
});

// when i put my mouse over the slide area, put all of the elements
// in a random place
slideArea.addEventListener("mouseover", function () {
  elements.forEach((image) => {
    const x = 25 * Math.floor(Math.random() * 5) - 50;
    const y = 25 * Math.floor(Math.random() * 5) - 50;

    image.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// when i move my mouse away, put the elements back
slideArea.addEventListener("mouseout", function () {
  elements.forEach((image) => {
    image.style.transform = "";
  });
});
