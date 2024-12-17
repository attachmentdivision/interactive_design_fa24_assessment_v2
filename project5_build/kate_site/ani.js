const progressTag = document.querySelector(".cloud_1");
const bodyTag = document.querySelector("body");

// Update Progress Bar
document.addEventListener("scroll", function () {
    
    // get distance scrolled and turn it into an integer
    const pixelsScrolled = window.scrollY;
  
    // retrieve page height
    const pageHeight = bodyTag.getBoundingClientRect().height;
  
    // subtract one window height from the total height to calculate totalScrollableDistance
    const totalScrollableDistance = pageHeight - window.innerHeight;
  
    // calculate progress bar
    const percentage = pixelsScrolled / totalScrollableDistance;
    progressTag.style.width = `${percentage * 150}%`;
  });

