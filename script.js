const STARTED = 0;
const END = 1;

const playerSpan = document.getElementById("player");
const gameTable = document.getElementById("table");
const game = {
  state: STARTED,
  turn: "X",
};

function boxClicked(row, col) {
  console.log("box clicked is : " + row + " " + col);
  nextTurn();
}

function nextTurn() {
  if (game.turn == "X") game.turn = "O";
  else game.turn = "X";

  playerSpan.textContent = game.turn;
}
