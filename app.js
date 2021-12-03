let move = ["rock", "paper", "sicssor"];
let playerScore = 0;
let computerScore = 0;
let playerSelection;
const wrapper = document.querySelector(".wrapper");
const displayResult = document.querySelector(".display-result");
const displayPlayerScore = document.querySelector(".player-score");
const displayComputerScore = document.querySelector(".computer-score");

wrapper.addEventListener("click", (event) => {
  playerSelection = event.target.value;
  game(playerSelection);
});

function makeMove() {
  return move[Math.floor(Math.random() * move.length)];
}

function playRound(playerMove, computerMove) {
  let winner;
  if (playerMove === computerMove) {
    console.log("draw");
  } else if (
    (playerMove === "rock" && computerMove === "sicssor") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "sicssor" && computerMove === "paper")
  ) {
    displayResult.innerText = `You win! ${playerMove} beat ${computerMove}`;
    winner = "player";
  } else {
    displayResult.innerText = `You lose! ${playerMove} lose ${computerMove}`;
    winner = "computer";
  }
  return winner;
}

function game(playerSelection) {
  let playerMove = playerSelection;
  let computerMove = makeMove();
  if (playRound(playerMove, computerMove) === "player") {
    playerScore++;
  } else {
    computerScore++;
  }
  displayScore(playerScore, computerScore);
}

function displayScore(playerScore, computerScore) {
  displayPlayerScore.innerText = playerScore;
  displayComputerScore.innerText = computerScore;
}
