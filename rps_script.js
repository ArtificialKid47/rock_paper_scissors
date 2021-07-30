function computerPlay() {
    let computerSign = 0; 
    let computerRng = Math.floor(Math.random()*3);
    if (computerRng == 0) { 
        computerSign = "Rock";
    }
    else if (computerRng == 1) {
        computerSign = "Paper";
    }
    else if (computerRng == 2) {
        computerSign = "Scissors";
    }
return computerSign;
}
function playRound(playerSelection,computerSelection) {
    let result = 0;
    if (playerSelection === computerSelection) {
        result = `It's a draw!`;
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        result = "You lose!";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        result = "You win!";
    } else if (playerSelection == "Paper" && computerSelection == "Rock"){
        result = "You lose!";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        result = "You lose!";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        result = "You lose!";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        result = "You win!";
    }
    console.log(result);  
    if (result == "You win!") {
        playerPoints += 1; 
    } else if (result == "You lose!"){ 
        computerPoints += 1;
    }
    return result;
}
function game() {
    computerSelection = computerPlay();   
    console.log(`You chose ${playerSelection}, computer selected ${computerSelection}`)
    playRound(playerSelection,computerSelection);
    console.log("----------------------------------------------")

}  

function scoreCounter() { 
    if (playerPoints == 5 || computerPoints == 5) {
     if (playerPoints > computerPoints) {
        console.log(`You won, final scores: You ${playerPoints}, Computer ${computerPoints}`);
      } else if (computerPoints> playerPoints) {
        console.log(`Computer won, final scores: You ${playerPoints}, Computer ${computerPoints}`);
       } else if (playerPoints == computerPoints) {
         console.log(`It's a draw, final scores: You ${playerPoints}, Computer ${computerPoints}`);       
      }
     resetScores();
    }
}

function resetScores () {
    playerPoints = 0;
    computerPoints = 0;
}

let playerSelection = 0; 
let computerSelection = 0;  
let playerPoints = 0; 
let computerPoints = 0;

const rock = document.querySelector("#rock_button");
const paper = document.querySelector("#paper_button");
const scissors = document.querySelector("#scissors_button");

rock.addEventListener('click',()=> {
    playerSelection = "Rock";
    game();
    scoreCounter();
});
paper.addEventListener('click',()=> {
    playerSelection = "Paper";
    game();
    scoreCounter();
});
scissors.addEventListener('click',()=> {
    playerSelection = "Scissors";
    game();
    scoreCounter();
});
