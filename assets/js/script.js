// buttonClicked = document.getElementById("button");
// buttonClicked.addEventListener("click", getComputerChoice);

rockClicked = document.getElementById("rock");
rockClicked.addEventListener("click", displayRock);
rockClicked.addEventListener("click", getComputerChoice)

paperClicked = document.getElementById("paper");
paperClicked.addEventListener("click", displayPaper);
paperClicked.addEventListener("click", getComputerChoice)

scissorsClicked = document.getElementById("scissors");
scissorsClicked.addEventListener("click", displayScissors);
scissorsClicked.addEventListener("click", getComputerChoice)

let displayBox = document.getElementById("displayBoxForUser");
let displayBoxForComp = document.getElementById("displayBoxForComputer");

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
  // return choices[randomNum]
  console.log(choices[randomNum]);
  if (choices[randomNum] == "rock") {
    displayBoxForComp.innerHTML = `<h3>Computer has chosen rock</h3>`;
    // displayBoxForComp.innerHTML = `<h2>Draw!</h2>`;
  } else if(choices[randomNum] == "paper"){
    displayBoxForComp.innerHTML = `<h3>Computer has chosen paper</h3>`;
  } else if(choices[randomNum] == "scissors"){
    displayBoxForComp.innerHTML = `<h3>Computer has chosen scissors</h3>`;
  }
}

function decidesWinner() {
  //if user chooses rock and computer choice == rock
  //return draw
  //if I chose rock and if computer choice equals paper
  //display rock covers paper, you loose
  // if(rockClicked && getComputerChoice == paper){
  //     console.log("you loose")
  // }
  //how do I get computer choice? How Do I extract it from the getComputerChoice? is it my lack of knowledge of js that is making this difficult or just straight up my logic? if logic then shouldn't I use a program like flowgorithm to plan out my logic?
}


function decidesLoser() {}

function decidesDraw() {}



//A score of total wins and losses will displayed at the bottom of the screen
function keepScore() {}

//The user can play as many times as they want
