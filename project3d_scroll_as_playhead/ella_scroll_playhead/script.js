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

const section = document.querySelector(".section__video");
const vid = document.querySelector("video");

vid.pause()

const scroll = () => {
    const distance = window.scrollY - section.offsetTop;
    const total = section.clientHeight - window.innerHeight;


    let percentage = distance / total;
    console.log(percentage)

    if (vid.duration > 0) {
        vid.currentTime = vid.duration * Math.min(percentage, .99);
    }
};

scroll();

window.addEventListener("scroll", scroll); 