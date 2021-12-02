let move = ["rock", "paper", "sicssor"];

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
    console.log(`You win! ${playerMove} beat ${computerMove}`);
    winner = "winner: player";
  } else {
    console.log(`You lose! ${playerMove} lose ${computerMove}`);
    winner = "winner: computer";
  }
  return winner;
}

function game(round) {
  let scoreBoard = [];
  for (let i = 0; i < round; i++) {
    let playerMove = prompt("Enter Rock, Paper or Sicssor").toLowerCase();
    let computerMove = makeMove();
    scoreBoard.push(playRound(playerMove, computerMove));
  }
  console.log(scoreBoard);
}

let numberOfRound = prompt("Enter number of rounds");
game(numberOfRound);
