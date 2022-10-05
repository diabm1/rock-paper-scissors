//User can select a rock, paper or scissors

buttonClicked = document.getElementById("button");
// buttonClicked.addEventListener("click", getComputerChoice);

rockClicked = document.getElementById("rock");
rockClicked.addEventListener("click", displayRock);

paperClicked = document.getElementById("paper");
paperClicked.addEventListener("click", displayPaper);

scissorsClicked = document.getElementById("scissors");
scissorsClicked.addEventListener("click", displayScissors);

let displayBox = document.getElementById("displayBox");

//if user clicks display either rock, paper, scissor

//When a user selects rock, paper or scissors the screen will display:
    //what the computer player has chosen
    //whether they have won or lost that game
function displayRock(){
    if (rockClicked) {
        displayBox.innerHTML = `<h3>You have chosen rock</h3>`;
      }
}

function displayPaper(){
    if (paperClicked) {
        displayBox.innerHTML = `<h3>You have chosen paper</h3>`;
      }
}

function displayScissors(){
    if (scissorsClicked) {
        displayBox.innerHTML = `<h3>You have chosen scissors</h3>`;
      }
}



function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  // return choices[randomNum]
  console.log(choices[randomNum]);
}

function decidesWinner() {
  //if user chooses rock and computer choice == rock
    //return draw

    
  //how do I get computer choice? How Do I extract it from the getComputerChoice? is it my lack of knowledge of js that is making this difficult or just straight up my logic? if logic then shouldn't I use a program like flowgorithm to plan out my logic
}

function decidesLoser() {}

function decidesDraw() {}

//A score of total wins and losses will displayed at the bottom of the screen
function keepScore(){}



//The user can play as many times as they want

