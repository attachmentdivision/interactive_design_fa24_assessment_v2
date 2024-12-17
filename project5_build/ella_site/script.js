const progressTag = document.querySelector(".progress_bar");
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
    progressTag.style.width = `${percentage * 100}%`;
});


//random color of array on refresh

(function () {
    window.addEventListener('DOMContentLoaded', () => {
        const colorArray = ["#88a0c9", "#ddaf52", "#d34636"];
        const headercolor = document.querySelector(".header");
        if (headercolor) {
            const colorRandom = Math.floor(Math.random() * colorArray.length);
            console.log(colorArray[colorRandom]);
            headercolor.style.backgroundColor = colorArray[colorRandom];
        }
    });
})()


