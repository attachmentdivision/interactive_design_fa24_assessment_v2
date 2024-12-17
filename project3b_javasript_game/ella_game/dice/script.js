function rollDice() {
  //random number from 1-6.. starts at 0 wtf
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  //get a random dice img
  const randomDice = "dice" + randomNumber1 + ".png";

  //player 1
  const image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomDice);

  //player 2
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;
  const randomDice2 = "dice" + randomNumber2 + ".png";
  const image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomDice2);

  //conditionals

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
  } else {
    document.querySelector("h1").innerHTML = "draw";
  }

  //button
}
const button = document.querySelector("button");
button.addEventListener("click", rollDice);
