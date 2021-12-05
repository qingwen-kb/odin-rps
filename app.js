let move = ["rock", "paper", "sicssor"];
let playerScore = 0;
let computerScore = 0;
let playerSelection;

const displayStatus = document.querySelector(".display-status");
const displayPlayerScore = document.querySelector(".player-score");
const displayComputerScore = document.querySelector(".computer-score");
const displayWinner = document.querySelector(".winner-result");
const resetButton = document.querySelector(".reset-btn");
const wrapperButtons = document.querySelectorAll(".wrapper button");

wrapperButtons.forEach((element) => {
  element.addEventListener("click", (event) => {
    playerSelection = event.target.value;
    game(playerSelection);
  });
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
    displayStatus.textContent = `You win! ${playerMove} beat ${computerMove}`;
    winner = "player";
  } else {
    displayStatus.textContent = `You lose! ${playerMove} lose ${computerMove}`;
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

  if (playerScore === 5) {
    displayWinner.textContent = "You won!!";

    wrapperButtons.forEach((element) => (element.disabled = true));
  } else if (computerScore === 5) {
    displayWinner.textContent = "Computer Won!";

    wrapperButtons.forEach((element) => (element.disabled = true));
  }
}

function displayScore(playerScore, computerScore) {
  displayPlayerScore.textContent = playerScore;
  displayComputerScore.textContent = computerScore;
}

resetButton.addEventListener("click", resetGame);

function resetGame() {
  location.reload();
}
