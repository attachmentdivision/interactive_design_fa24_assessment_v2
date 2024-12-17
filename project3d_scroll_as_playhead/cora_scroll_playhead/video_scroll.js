const section = document.querySelector(".section__video");
const vid = document.querySelector("#dog");
 
vid.pause();

const scroll = () => {
    const distance = window.scrollY - section.offsetTop;
    const total = section.clientHeight - window.innerHeight
    

    let percentage = distance / total;
    // console.log(percentage);

    if (vid.duration > 0) {
        vid.currentTime = vid.duration * percentage;
    }
};

scroll();
window.addEventListener("scroll", scroll);