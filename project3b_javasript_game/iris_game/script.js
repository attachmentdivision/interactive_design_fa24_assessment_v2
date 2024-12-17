const bubbleWrap = document.getElementById('bubble-wrap');
const bubblePopSound = document.getElementById('bubble-pop-sound');

for (let i = 0; i < 100; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubbleWrap.appendChild(bubble);

    bubble.addEventListener('click', () => {
        bubble.classList.toggle('popped');
        bubblePopSound.currentTime = 0; // start at start of sound
        bubblePopSound.play();

        bubble.classList.add('scaled');
        setTimeout(() => {
            bubble.classList.remove('scaled');
        }, 100); // time in milliseconds
    });
}
