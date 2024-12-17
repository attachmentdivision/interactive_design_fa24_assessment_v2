const input = document.querySelector("input"),
    guess = document.querySelector(".subtitle1"),
    button = document.querySelector("button"),
    tries = document.querySelector(".tries");

//input field 
input.focus();

let randomNumber = Math.floor(Math.random() * 100);
chance = 10


//Listen...click  guess button 
button.addEventListener("click", () => {
    chance--;
    let inputValue = input.value;
    if (inputValue == randomNumber) {
        //guessed number
        [guess.textContent, input.disabled] = ["You did it", true];
        [button.textContent, guess.style] = ["Replay"];
        //random number between 1 and 49
    } else if (inputValue > randomNumber && inputValue < 50) {
        //update chances 
        [guess.textContent, tries.textContent] = ["Your guess is high", chance];

        //value is < random number and between 1 and 49

    } else if (inputValue < randomNumber && inputValue > 0) {
        //update chances
        [guess.textContent, tries.textContent] = ["Your guess is low", chance];
    }
    //if not within range 
    else {
        [guess.textContent, tries.textContent] = ["Your number is invalid", chance];
    }

    //if tries are 0 
    if (chance == 0) {
        [button.textContent, input.disabled, inputValue] = ["Replay", true, ""];
        [guess.textContent, guess.style] = ["You lost the game"];
    }
    if (chance < 0) {
        window.location.reload();
    }

});