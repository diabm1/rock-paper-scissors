let displayBox = document.getElementById("displayBoxForUser");
let displayBoxForComp = document.getElementById("displayBoxForComputer");
let displayOutcome = document.getElementById("displayOutcome");
let score = document.getElementById("score");
let playerChoice;
let computerChoice;
let userScore = 0;

let rockClicked = document.getElementById("rock");
rockClicked.addEventListener("click", displayRock);
rockClicked.addEventListener("click", compChoice);
rockClicked.addEventListener("click", playGame);

let paperClicked = document.getElementById("paper");
paperClicked.addEventListener("click", displayPaper);
paperClicked.addEventListener("click", compChoice);
paperClicked.addEventListener("click", playGame);

let scissorsClicked = document.getElementById("scissors");
scissorsClicked.addEventListener("click", displayScissors);
scissorsClicked.addEventListener("click", compChoice);
scissorsClicked.addEventListener("click", playGame);

//When a user selects rock, paper or scissors the screen will display:
////what the computer player has chosen
////whether they have won or lost that game
function playGame() {
  const message = decidesWinnerLoserDraw();
  displayOutcome.innerHTML = `<h3>${message}</h3>`;
  keepScore();
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function compChoice() {
  computerChoice = getComputerChoice();
  displayBoxForComp.innerHTML = `<h3>Computer has chosen ${computerChoice}</h3>`;
}

//User can select a rock, paper or scissors
//if user clicks display either rock, paper, scissor
function displayRock() {
  if (rockClicked) {
    displayBox.innerHTML = `<h3>You have chosen rock</h3>`;
    playerChoice = "rock";
  }
  return playerChoice;
}

function displayPaper() {
  if (paperClicked) {
    displayBox.innerHTML = `<h3>You have chosen paper</h3>`;
    playerChoice = "paper";
  }
  return playerChoice;
}

function displayScissors() {
  if (scissorsClicked) {
    displayBox.innerHTML = `<h3>You have chosen scissors</h3>`;
    playerChoice = "scissors";
  }
  return playerChoice;
}

function decidesWinnerLoserDraw() {
  if (playerChoice === computerChoice) return "It's a tie!";
  switch (playerChoice) {
    case "rock":
      return computerChoice === "paper"
        ? "Paper covers rock, you loose!"
        : "Rock crushes scissors, you win!";

    case "paper":
      return computerChoice === "scissors"
        ? "Scissors cut paper, you loose!"
        : "Paper covers rock, you win!";

    case "scissors":
      return computerChoice === "rock"
        ? "Rock crushes scissors, you loose!"
        : "Scissors cut paper, you win!";
  }
}

//A score of total wins and losses will displayed at the bottom of the screen
function keepScore() {
  if (playerChoice === "paper" && computerChoice === "rock") {
    userScore++;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    userScore++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    userScore++;
  }
  return (score.innerHTML = `<h4>Score: ${userScore}</h4>`);
}

//The user can play as many times as they want
