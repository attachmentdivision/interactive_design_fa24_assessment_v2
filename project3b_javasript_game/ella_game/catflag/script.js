const cats = document.querySelector(".catbox");
//const dogs = document.querySelector(".dogbox");
const catsWin = document.querySelector(".cats-win-flag")
//const dogsWin = document.querySelector(".dogs-win-flag")
catsWin.classList.toggle("move-over-flag")
//dogsWin.classList.toggle("move-over-flag")
let score = 0


cats.addEventListener("click", function () {
    //do something
    score = score + 1
    console.log(score)
    cats.innerHTML = "cats...";
    cats.style.backgroundColor = "pink";


    //when the score is 10 bring on the you win text
    if (score == 5) {
        catsWin.classList.toggle("move-over-flag")
    }

});