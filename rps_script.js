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
    resetNewGame();
    if (playerSelection === computerSelection) {
        result = `It's a draw!`;
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        result = "You lose!";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        result = "You win!";
    } else if (playerSelection == "Paper" && computerSelection == "Rock"){
        result = "You win!";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        result = "You lose!";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        result = "You lose!";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        result = "You win!";
    }
    para2.textContent = (result);
    console.log(result);
    if (result == "You win!") {
        playerPoints += 1; 
    } else if (result == "You lose!"){ 
        computerPoints += 1;
    }
    para4.textContent = `You: ${playerPoints} - Computer: ${computerPoints}`;
    return result;
}

function game() {
    removeConfetti();
    computerSelection = computerPlay();
    para1.textContent = (`You chose ${playerSelection}, computer selected ${computerSelection}`);
    console.log(`You chose ${playerSelection}, computer selected ${computerSelection}`)
    playRound(playerSelection,computerSelection);
    console.log("----------------------------------------------")
}

function scoreCounter() { 
    if (playerPoints == 5 || computerPoints == 5) {
     if (playerPoints > computerPoints) {
        para3.textContent = (`Final scores: You ${playerPoints}, Computer ${computerPoints}`);
        header1.className = "office-banner";
        header1.textContent = "🏆 YOU WON! 🏆";
        createConfetti();
        console.log(`You won, final scores: You ${playerPoints}, Computer ${computerPoints}`);
      } else if (computerPoints> playerPoints) {
        para3.textContent = (`Final scores: You ${playerPoints}, Computer ${computerPoints}`);
        header1.className = "office-banner";
        header1.textContent = "🤖 YOU. LOST. COMPUTER. WINS. HA. HA. 🤖";
        createConfettiComputer();
        console.log(`Computer won, final scores: You ${playerPoints}, Computer ${computerPoints}`);
       } else if (playerPoints == computerPoints) {
        console.log(`It's a draw, final scores: You ${playerPoints}, Computer ${computerPoints}`);
      }
     resetText();
     resetScores();
    }
}

function resetScores() {
    playerPoints = 0;
    computerPoints = 0;
}

function resetNewGame() {
    header1.className = "";
    header1.textContent = "";
    para3.textContent = "";
}

function resetText() {
    para1.textContent = "";
    para2.textContent = "";
    para4.textContent = "";
}

function createConfetti() {
    confetti.className = "confetti";
    confetti.textContent = "";
    containerConfetti.appendChild(confetti);
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
}

function createConfettiComputer() {
    confetti.className = "confettiComputer";
    confetti.textContent = "🤖";
    containerConfetti.appendChild(confetti);
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
    containerConfetti.appendChild(confetti.cloneNode(true));
}

function removeConfetti() {
    containerConfetti.innerHTML = "";
}


let playerSelection = 0; 
let computerSelection = 0;  
let playerPoints = 0; 
let computerPoints = 0;
const rock = document.querySelector("#rock_button");
const paper = document.querySelector("#paper_button");
const scissors = document.querySelector("#scissors_button");
const buttonNewGame = document.querySelector("#new_game");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const para4 = document.createElement("p");
const header1 = document.createElement("h1");
const resultsDiv = document.querySelector("#results_div");
const containerConfetti = document.querySelector("#containerConfetti");
const confetti = document.createElement("div");


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
buttonNewGame.addEventListener('click', ()=> {
    resetNewGame();
    resetText();
    resetScores();
    removeConfetti();
});


resultsDiv.appendChild(para1);
resultsDiv.appendChild(para2);
resultsDiv.appendChild(para4);
resultsDiv.appendChild(para3);
resultsDiv.appendChild(header1);