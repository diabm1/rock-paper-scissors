// buttonClicked = document.getElementById("button");
// buttonClicked.addEventListener("click", getComputerChoice);

let displayBox = document.getElementById("displayBoxForUser");
let displayBoxForComp = document.getElementById("displayBoxForComputer");
let displayOutcome = document.getElementById("displayOutcome");

let rockClicked = document.getElementById("rock");
let userChoice1 = rockClicked.addEventListener("click", displayRock);

rockClicked.addEventListener("click", getComputerChoice);

let paperClicked = document.getElementById("paper");
let userChoice2 = paperClicked.addEventListener("click", displayPaper);

paperClicked.addEventListener("click", getComputerChoice);
paperClicked.addEventListener("click", decidesDraw);

let scissorsClicked = document.getElementById("scissors");
let userChoice3 = scissorsClicked.addEventListener("click", displayScissors);

scissorsClicked.addEventListener("click", getComputerChoice);
scissorsClicked.addEventListener("click", decidesDraw);

//User can select a rock, paper or scissors
//if user clicks display either rock, paper, scissor
function displayRock() {
  if (rockClicked) {
    displayBox.innerHTML = `<h3>You have chosen rock</h3>`;
  }
}

function displayPaper() {
  if (paperClicked) {
    displayBox.innerHTML = `<h3>You have chosen paper</h3>`;
  }
}

function displayScissors() {
  if (scissorsClicked) {
    displayBox.innerHTML = `<h3>You have chosen scissors</h3>`;
  }
}

//When a user selects rock, paper or scissors the screen will display:
///what the computer player has chosen
///whether they have won or lost that game

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  const compChoice = choices[randomNum];
  // return choices[randomNum]

  console.log(compChoice);

  if (compChoice == "rock") {
    displayBoxForComp.innerHTML = `<h3>Computer has chosen rock</h3>`;
    // displayBoxForComp.innerHTML = `<h2>Draw!</h2>`;
  } else if (compChoice == "paper") {
    displayBoxForComp.innerHTML = `<h3>Computer has chosen paper</h3>`;
  } else if (compChoice == "scissors") {
    displayBoxForComp.innerHTML = `<h3>Computer has chosen scissors</h3>`;
  }
}

function decidesWinner() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  const compChoice = choices[randomNum];
  //how do I get computer choice? How Do I extract it from the getComputerChoice?
  if (compChoice == "rock" && userChoice2) {
    console.log(userChoice2);
    displayOutcome.innerHTML = `<h2>Win!</h2>`;
    // rockClicked.addEventListener("click", decidesDraw);
  }
}

function decidesLoser() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  const compChoice = choices[randomNum];
  //if I chose rock and if computer choice equals paper
  //display rock covers paper, you loose
  // if(rockClicked && getComputerChoice == paper){
  //     console.log("you loose")
  // }
}

function decidesDraw() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  const compChoice = choices[randomNum];

  //if user chooses rock and computer choice == rock
  //return draw

  if (compChoice == "rock" && userChoice1) {
    displayOutcome.innerHTML = `<h2>Draw!</h2>`;
    // rockClicked.addEventListener("click", decidesDraw);
  }

  //   } else if (compChoice == "paper" && displayPaper) {
  //     displayOutcome.innerHTML = `<h2>Draw!</h2>`;
  //   } else if (compChoice == "scissors" && displayScissors) {
  //     displayOutcome.innerHTML = `<h2>Draw!</h2>`;
  //   }
}

//A score of total wins and losses will displayed at the bottom of the screen
function keepScore() {
  //how do I calculate user score?
  //how do I calculate computer score?
}

//The user can play as many times as they want
