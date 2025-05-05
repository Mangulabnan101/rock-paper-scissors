


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

function getHumanChoice() { 
  let getChoice = prompt("Enter your choice:(rock, paper, scissors)");
  return getChoice.toLowerCase();
  
}
let humanScore = 0;
let computerScore = 0;


function playRound (humanChoice, computerChoice) {

      switch (humanChoice) {
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



function playGame() {

  for (let i=0; i<=5; i++) {
    switch (i) {
      case 0:
        let humanSelection1 = getHumanChoice();
        let computerSelection1 = getComputerChoice();
        console.log(computerSelection1);
        console.log(humanSelection1);
        playRound(humanSelection1, computerSelection1)
        console.log(`The score is ` + humanScore + ` vs ` + computerScore);
      break;
      case 1:
        let humanSelection2 = getHumanChoice();
        let computerSelection2 = getComputerChoice();
        console.log(computerSelection2);
        console.log(humanSelection2);
        playRound(humanSelection2, computerSelection2)
        console.log(`The score is ` + humanScore + ` vs ` + computerScore);
      break;
      case 2:
        let computerSelection3 = getComputerChoice();
        let humanSelection3 = getHumanChoice();
        console.log(computerSelection3);
        console.log(humanSelection3);
        playRound(humanSelection3, computerSelection3)
        console.log(`The score is ` + humanScore + ` vs ` + computerScore);
      break;
      case 3:
        let computerSelection4 = getComputerChoice();
        let humanSelection4 = getHumanChoice();
        console.log(computerSelection4);
        console.log(humanSelection4);
        playRound(humanSelection4, computerSelection4)
        console.log(`The score is ` + humanScore + ` vs ` + computerScore);
      break;
      case 4:
        let computerSelection5 = getComputerChoice();
        let humanSelection5 = getHumanChoice();
        console.log(computerSelection5);
        console.log(humanSelection5);
        playRound(humanSelection5, computerSelection5)
        console.log(`The score is ` + humanScore + ` vs ` + computerScore);
      break;
      case 5:
        if (humanScore > computerScore) {
          console.log("You won the game!");
        }
        else if (humanScore < computerScore) {
          console.log("You lost the game!");
        }
        else {
          console.log("No one won");
        }
      break;
      default:
        console.log("game ended");
        return;
    }
   
  }

}

playGame();