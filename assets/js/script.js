// buttonClicked = document.getElementById("button");
// buttonClicked.addEventListener("click", getComputerChoice);

let displayBox = document.getElementById("displayBoxForUser");
let displayBoxForComp = document.getElementById("displayBoxForComputer");
let displayOutcome = document.getElementById("displayOutcome");

let rockClicked = document.getElementById("rock"); //grabs the image tag
rockClicked.addEventListener("click", displayRock);
rockClicked.addEventListener("click", computerChoice);
rockClicked.addEventListener("click", playGame("rock"));
// rockClicked.addEventListener("click", decidesWinner());

//userChoice1 is undefined but would like this to store in rock
//when user clicks on rock I want that to be stored into variable, how do I make that happen?

// rockClicked.addEventListener("click", decidesWinner);
// rockClicked.addEventListener("click", decidesDraw);

let paperClicked = document.getElementById("paper");
paperClicked.addEventListener("click", displayPaper);
paperClicked.addEventListener("click", computerChoice);
paperClicked.addEventListener("click", playGame("paper"));

// paperClicked.addEventListener("click", decidesDraw);

let scissorsClicked = document.getElementById("scissors");
scissorsClicked.addEventListener("click", displayScissors);
scissorsClicked.addEventListener("click", computerChoice);
scissorsClicked.addEventListener("click", playGame("scissors")); //this doesn't hold any value it's undefined. How do I tell the computer that when I click on rock make the value equal to rock?
//when rock is clicked, then make ______ equal to "rock"

// scissorsClicked.addEventListener("click", decidesDraw);

//When a user selects rock, paper or scissors the screen will display:
///what the computer player has chosen
///whether they have won or lost that game

function playGame(playerChoice) {
  choices = ["rock", "paper", "scissors"];
  randomNum = Math.floor(Math.random() * 3);
  compChoice = choices[randomNum];
  //your code here to play the game//logic here
  //paper
  //   decidesWinner();
  if (playerChoice == "paper" && compChoice == "rock") {
    displayOutcome.innerHTML = `<h3>Paper covers rock, you win! :)</h3>`;
    //   decidesWinner();
  }
  if (playerChoice == "paper" && compChoice == "paper") {
    displayOutcome.innerHTML = `<h3>Draw!</h3>`;
  }
  if (playerChoice == "paper" && compChoice == "scissors") {
    displayOutcome.innerHTML = `<h3>Scissors cut paper, you loose! :(</h3>`;
  }

  //rock
  if (playerChoice == "rock" && compChoice == "rock") {
    displayOutcome.innerHTML = `<h3>Draw!</h3>`;
  }
  if (playerChoice == "rock" && compChoice == "paper") {
    displayOutcome.innerHTML = `<h3>Paper covers rock, you loose! :(</h3>`;
  }
  if (playerChoice == "rock" && compChoice == "scissors") {
    displayOutcome.innerHTML = `<h3>Rock crushes scissors, you win! :)</h3>`;
  }

  //scissors
  if (playerChoice == "scissors" && compChoice == "rock") {
    displayOutcome.innerHTML = `<h3>Rock crushes scissors, you loose! :(`;
  }
  if (playerChoice == "scissors" && compChoice == "paper") {
    displayOutcome.innerHTML = `<h3>Scissors cut paper, you Win! :)</h3>`;
    //userScore++
  }
  if (playerChoice == "scissors" && compChoice == "scissors") {
    displayOutcome.innerHTML = `<h3>Draw!</h3>`;
  }
}

function getComputerChoice() {
  choices = ["rock", "paper", "scissors"];
  randomNum = Math.floor(Math.random() * 3);
  compChoice = choices[randomNum];
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
}

function computerChoice() {
  choices = ["rock", "paper", "scissors"];
  randomNum = Math.floor(Math.random() * 3);
  compChoice = choices[randomNum];
  // getComputerChoice();
  //displays what computer has chosen
  if (compChoice == "rock") {
    displayBoxForComp.innerHTML = `<h3>Computer has chosen rock</h3>`;
    // displayBoxForComp.innerHTML = `<h2>Draw!</h2>`;
  } else if (compChoice == "paper") {
    displayBoxForComp.innerHTML = `<h3>Computer has chosen paper</h3>`;
  } else if (compChoice == "scissors") {
    displayBoxForComp.innerHTML = `<h3>Computer has chosen scissors</h3>`;
  }
}

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

function decidesWinner(playerChoice, compChoice) {
  //   const choices = ["rock", "paper", "scissors"];
  //   const randomNum = Math.floor(Math.random() * 3);
  //   const compChoice = choices[randomNum];
  //   getComputerChoice();
  //how do I get computer choice? How Do I extract it from the getComputerChoice?

  //paper
  if (playerChoice == "paper" && compChoice == "rock") {
    displayOutcome.innerHTML = `<h3>Paper covers rock, you win! :)</h3>`;
  }

  //scissors
  if (playerChoice == "scissors" && compChoice == "paper") {
    displayOutcome.innerHTML = `<h3>Scissors cut paper, you win! :)</h3>`;
    //userScore++
  }

  //rock
  if (playerChoice == "rock" && compChoice == "scissors") {
    displayOutcome.innerHTML = `<h3>Rock crushes scissors, you win! :)</h3>`;
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
  //   if (compChoice == "rock" && userChoice2) {
  //     console.log(userChoice2);
  //     displayOutcome.innerHTML = `<h2>Paper covers rock, you lose!</h2>`;
  //   }
  //   if(compChoice == "paper" && userChoice1){
  //     displayOutcome.innerHTML = `<h2>Paper covers rock, you lose!</h2>`;
  //   }
  //   if (compChoice == "scissors" && userChoice3) {
  //     displayOutcome.innerHTML = `<h2>Scissors cut paper, you lose!</h2>`;
  //   }
}

function decidesDraw() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  const compChoice = choices[randomNum];

  //if user chooses rock and computer choice == rock
  //return draw
  //   rock = "rock"
  //   if (compChoice == "rock" && rock) {
  //     displayOutcome.innerHTML = `<h2>Draw!</h2>`;
  //   }

  //   if (compChoice == "rock" && userChoice1) {
  //     console.log(userChoice1)
  //     displayOutcome.innerHTML = `<h2>Draw!</h2>`;
  //   }

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
