const STARTED = 0;
const END = 1;

const playerSpan = document.getElementById("player");
const gameTable = document.getElementById("table");
const game = {
  state: STARTED,
  turn: "X",
  move: 0,
};

function boxClicked(row, col) {
  console.log("box clicked is : " + row + " " + col);

  let clickbox = gameTable.children[0].children[row - 1].children[col - 1];
  clickbox.textContent = game.turn;

  nextTurn();

  isRowCaptured(row);
  isColumnCaptured(col);
  checkDiagonal(row, col);
}

function isRowCaptured(row) {
  //  let tableRow = Array.from(
  //    gameTable.getChildren[0].children[row - 1].children
  //  );
  //  let winningCombo = game.turn + game.turn + game.turn;

  //  if (tableRow.map((i) => i.textContent).join("") == winningCombo) {
  //    alert("Game Over | Winner is " + game.turn);

  let temp = "O";
  if (game.turn == "O") temp = "X";
  else temp = "O";
  var flag = true;
  tableRow = table.rows[row - 1];
  for (var j = 0, col; (col = tableRow.cells[j]); j++) {
    if (col.textContent != temp) {
      flag = false;
      break;
    }
  }

  if (flag) {
    endGame(turn);
    restart();
  }
}

function isColumnCaptured(col) {
  let temp = "O";
  if (game.turn == "O") temp = "X";
  else temp = "O";
  var flag = true;
  //tableRow = table.rows[row - 1];
  for (var i = 0, tableRow; (tableRow = table.rows[i]); i++) {
    if (tableRow.cells[col - 1].textContent != temp) {
      flag = false;
      break;
    }
  }

  if (flag) {
    endGame(turn);
    restart();
  }
}

function nextTurn() {
  if (game.state == END) {
    return;
  }
  game.move++;
  if (game.move == 9) {
    endGame();
  }
  if (game.turn == "X") game.turn = "O";
  else game.turn = "X";

  playerSpan.textContent = game.turn;
}

function checkDiagonal(row, col) {
  let temp = "O";
  if (game.turn == "O") temp = "X";
  else temp = "O";
  var count = 1;
  let tableRow = row - 1;
  let tableCol = col - 1;

  while (tableRow <= 2 && tableCol <= 2) {
    tableRow += 1;
    tableCol += 1;
    if (tableRow <= 2 && tableCol <= 2) {
      let child = gameTable.children[0].children[tableRow].children[tableCol];

      if (child.textContent != temp) break;
      else count++;
    } else break;
  }

  tableRow = row - 1;
  tableCol = col - 1;
  while (tableRow >= 0 && tableCol >= 0) {
    tableRow -= 1;
    tableCol -= 1;
    if (tableRow >= 0 && tableCol >= 0) {
      let child = gameTable.children[0].children[tableRow].children[tableCol];
      if (child.textContent != temp) break;
      else count++;
    } else break;
  }

  tableRow = row - 1;
  tableCol = col - 1;
  while (tableRow >= 0 && tableCol <= 2) {
    tableRow -= 1;
    tableCol += 1;
    if (tableRow >= 0 && tableCol <= 2) {
      let child = gameTable.children[0].children[tableRow].children[tableCol];
      if (child.textContent != temp) break;
      else count++;
    } else break;
  }

  tableRow = row - 1;
  tableCol = col - 1;
  while (tableRow <= 2 && tableCol >= 0) {
    tableRow += 1;
    tableCol -= 1;
    if (tableRow <= 2 && tableCol >= 0) {
      let child = gameTable.children[0].children[tableRow].children[tableCol];
      if (child.textContent != temp) break;
      else count++;
    } else break;
  }

  console.log(" " + count);
  if (count == 3) {
    endGame(temp);
    restart();
  }
  // if(row != col && (row + col != 4)) return ;
  // let diag1 = {

  // }
}

function endGame(winner) {
  if (winner) alert("Game Over | Winner is " + winner);
  else alert("Game Over | Draw");

  game.turn = "X";
  move = 0;

  game.state = END;
}

function restart() {
  if (Math.random() > 0.5) game.turn = "O";
  else game.turn = "X";

  playerSpan.textContent = game.turn;
  game.state = STARTED;

  Array.from(document.getElementsByTagName("td")).forEach((cell) => {
    cell.textContent = "";
  });
}
