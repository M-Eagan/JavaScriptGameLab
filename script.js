let playQuestion = prompt("Would you like to play the game with 2 players?");
let userName = prompt("What is your name?");


let userWins = 0;
let userHealthPoints= 40;
let grantHealthPoints= 10;


function getRandomInt() {
  return Math.floor(Math.random() * 2) + 1;
}

function randomGame() {
while(userWins < 3 && userHealthPoints > 0) {
  userHealthPoints -= getRandomInt();
  console.log(userName +" has "+ userHealthPoints +" health left.");
  grantHealthPoints -= getRandomInt();
  console.log("Grant the Mighty Chicken has "+ grantHealthPoints + " left.")

  if(grantHealthPoints <= 0) {
    userWins++;
    grantHealthPoints = 10;
  }
}
if (userHealthPoints <= 0) {
  console.log("Sorry- Grant Wins!");
} else {
  console.log("You Won!");
}

}

if (playQuestion === "Yes" || playQuestion === "Yeah" || playQuestion === "yes" || playQuestion === "yeah") {
  randomGame();
}

