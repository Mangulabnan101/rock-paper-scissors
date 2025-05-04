


function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 99) +1;
    if (randomNumber >= 1 && randomNumber <= 33) {
      return "rock";
    }
    else if (randomNumber >= 34 && randomNumber <= 66) {
      return "paper";
    }
    else {
      return "scissors";
    }
}

function getHumanChoice(humanInput) { 
  let getChoice = prompt("Enter your choice:(rock, paper, scissors)");
  return getChoice;
  
}
let humanScore = 0;
let computerScore = 0;


function playRound (humanChoice, computerChoice) {
      switch (humanChoice.toLowerCase()) {
        case "rock": 
          if (computerChoice == "rock") {
            console.log("it's a tie");
            return;
          }
          else if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock!");
            computerScore++;
            return;
          }
          else if (computerChoice == "scissors") {
            console.log("You win! rock beats scissor!");
            humanScore++;
            return;
          }
        break;

        case "paper":
          if (computerChoice == "rock") {
            console.log("You win! paper beats rock!");
            humanScore++;
            return;
          }
          else if (computerChoice == "paper") {
            console.log("it's a tie");
            return;
          }
          else if (computerChoice == "scissors") {
            console.log("You lose! scissor beats paper");
            computerScore++;
            return;
          }
        break;

        case "scissors":
          if (computerChoice == "rock") {
            console.log("You lose! rock beats scissor!");
            computerScore++;
            return;
          }
          else if (computerChoice == "scissors") {
            console.log("it's a tie");
            return;
          }
          else if (computerChoice == "paper") {
            console.log("You win! scissor beats paper");
            humanScore++;
            return;
          }
        break;
        
        default:
          console.log ("error input");
        break;
      }

    }


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(humanSelection);

