let playQuestion = prompt("Would you like to play the game with 2 players?");

let userWins = 0;
let userHealthPoints= 40;
let grantHealthPoints= 10;

if (playQuestion === "Yes" || playQuestion === "Yeah" || playQuestion === "yes" || playQuestion === "yeah") {

let userName = prompt("What is your name?");

function getDamage() {
  return Math.floor(Math.random() * 5) + 1;
}

startCombat();

function startCombat() {
while(playQuestion === "Yes" || playQuestion === "Yeah" || playQuestion === "yes" || playQuestion === "yeah") {
  
if (userWins < 3 && userHealthPoints > 0) {
  userHealthPoints -= getDamage();
  console.log(userName +" has "+ userHealthPoints +" health left.");
  grantHealthPoints -= getDamage();
  console.log("Grant the Mighty Chicken has "+ grantHealthPoints + " left.");

  if(grantHealthPoints <= 0) {
    userWins++;
    grantHealthPoints = 10;
  }


if (userHealthPoints <= 0) {
  console.log("Sorry- Grant Wins!");
} else {
  console.log("You Won!");
}

let playAgain= prompt("Would you like to 'attack' or 'quit'?");
  nextRound:
    if (playAgain === 'quit') {
      break nextRound;
    } else{
      startCombat();
      console.log(startCombat());
    }

break;

}
}
}
}

