let displayBox = document.getElementById("displayBoxForUser");
let displayBoxForComp = document.getElementById("displayBoxForComputer");
let displayOutcome = document.getElementById("displayOutcome");
let playerChoice;
let computerChoice;

let rockClicked = document.getElementById("rock"); //grabs the image tag
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
///what the computer player has chosen
///whether they have won or lost that game

function playGame() {
  const winningMessage = decidesWinner();
  displayOutcome.innerHTML = `<h3>${winningMessage}</h3>`;
  
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
  // return choices[randomNum]

  //   console.log(compChoice);

  // //displays what computer has chosen
  // if (compChoice == "rock") {
  //   displayBoxForComp.innerHTML = `<h3>Computer has chosen rock</h3>`;
  //   // displayBoxForComp.innerHTML = `<h2>Draw!</h2>`;
  // } else if (compChoice == "paper") {
  //   displayBoxForComp.innerHTML = `<h3>Computer has chosen paper</h3>`;
  // } else if (compChoice == "scissors") {
  //   displayBoxForComp.innerHTML = `<h3>Computer has chosen scissors</h3>`;
  // }
  // return compChoice;
}

function compChoice() {
  computerChoice = getComputerChoice();

  displayBoxForComp.innerHTML = `<h3>Computer has chosen ${computerChoice}</h3>`;
  // if (getComputerChoice() == "rock") {
  //   displayBoxForComp.innerHTML = `<h3>Computer has chosen rock</h3>`;
  //   // displayBoxForComp.innerHTML = `<h2>Draw!</h2>`;
  // } else if (getComputerChoice() == "paper") {
  //   displayBoxForComp.innerHTML = `<h3>Computer has chosen paper</h3>`;
  // } else if (getComputerChoice() == "scissors") {
  //   displayBoxForComp.innerHTML = `<h3>Computer has chosen scissors</h3>`;
  // }
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
// console.log(displayRock())

function displayPaper() {
  if (paperClicked) {
    displayBox.innerHTML = `<h3>You have chosen paper</h3>`;
    playerChoice = "paper";
  }
  return playerChoice;
}
// console.log(displayPaper())

function displayScissors() {
  if (scissorsClicked) {
    displayBox.innerHTML = `<h3>You have chosen scissors</h3>`;
    playerChoice = "scissors";
  }
  return playerChoice;
}
// console.log(displayScissors())

function decidesWinner() {

  if(playerChoice === computerChoice) return "It's a tie!"
  switch (playerChoice) {
    case "rock":
      return computerChoice === "paper" ? "Paper covers rock, you loose!" : "Rock crushes scissors, you win!";
    case "paper":
      return computerChoice === "scissors" ? "Scissors cut paper, you loose!" : "Paper covers rock, you win!"
    case "scissors":
      return computerChoice === "rock" ? "Rock crushes scissors, you loose!" : "Scissors cut paper, you win!"
  }


  //paper
  // if (displayPaper() && getComputerChoice() == "rock") {
  //   // console.log(displayPaper())
  //   displayOutcome.innerHTML = `<h3>Paper covers rock, you win! :)</h3>`;
  // } else if (displayScissors() && getComputerChoice() == "paper") {
  //   // console.log(displayScissors())
  //   displayOutcome.innerHTML = `<h3>Scissors cut paper, you win! :)</h3>`;
  //   //userScore++
  // } else if (displayRock() && getComputerChoice() == "scissors") {
  //   // console.log(displayRock())
  //   displayOutcome.innerHTML = `<h3>Rock crushes scissors, you win! :)</h3>`;
  // }

  // else {
  //   displayOutcome.innerHTML = ``;
  // }
}

function decidesLoser() {
  if (displayPaper() && getComputerChoice() == "scissors") {
    // console.log(displayPaper())
    displayOutcome.innerHTML = `<h3>Scissors cut paper, you loose! :(</h3>`;
  } else if (displayRock() && getComputerChoice() == "paper") {
    // console.log(displayRock())
    displayOutcome.innerHTML = `<h3>Paper covers rock, you loose! :(</h3>`;
  } else if (displayScissors() && getComputerChoice() == "rock") {
    // console.log(displayScissors())
    displayOutcome.innerHTML = `<h3>Rock crushes scissors, you loose! :(`;
  }
  // else {
  //   displayOutcome.innerHTML = ``;
  // }
}

function decidesDraw() {
  if (displayPaper() && getComputerChoice() == "paper") {
    // console.log(displayPaper())
    displayOutcome.innerHTML = `<h3>Draw!</h3>`;
  } else if (displayRock() && getComputerChoice() == "rock") {
    // console.log(displayRock())
    displayOutcome.innerHTML = `<h3>Draw!</h3>`;
  } else if (displayScissors() && getComputerChoice() == "scissors") {
    // console.log(displayScissors())
    displayOutcome.innerHTML = `<h3>Draw!</h3>`;
  }

  // else {
  //   displayOutcome.innerHTML = ``;
  // }
}

//A score of total wins and losses will displayed at the bottom of the screen
function keepScore() {
  //how do I calculate user score?
  //how do I calculate computer score?
}

//The user can play as many times as they want
