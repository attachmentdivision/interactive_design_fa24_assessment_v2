document.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progressBar');
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    progressBar.style.height = `${scrollPercentage}%`;

    document.body.style.backgroundColor = scrollPercentage >= 60 ? 'black' :
        scrollPercentage >= 30 ? 'grey' : 
        'transparent';

    document.body.style.backgroundPositionY = `${scrollTop * 0.5}px`;

    const rotationDegree = scrollPercentage * 3;
    document.querySelectorAll('.box').forEach(box => {
        box.style.transform = `rotate(${rotationDegree}deg)`;
    });
});
