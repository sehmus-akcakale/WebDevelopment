const buttons = document.querySelectorAll(".place");
const strPlayer = document.getElementById("player");
const winnerPart = document.querySelector(".winnerPart");
const container = document.getElementsByClassName("container");
const winnerContainer = document.getElementById("winnerContainer");
const startAgainButton = document.querySelector(".startAgain");
var player = 0;
var gameCounter = 0;
var board = initializeBoard();

buttons.forEach(function (button) {
  button.addEventListener("click", (event) => {
    gameCounter = gameCounter + 1;

    if (gameCounter == 9) {
      winnerPart.innerHTML = "GAME IS TIE";
      container[0].classList.add("cannotSee");
      winnerContainer.classList.remove("cannotSee");
    }

    const row = parseInt(event.target.getAttribute("data-row"));
    const column = parseInt(event.target.getAttribute("data-column"));

    if (board[row][column] == "") {
      board[row][column] = player == 0 ? "X" : "0";
      event.target.textContent = board[row][column];
      if (checkGame(board, row, column)) {
        winnerPart.innerHTML = (player == 0 ? "X" : "0") + " WON THE GAME";
        container[0].classList.add("cannotSee");
        winnerContainer.classList.remove("cannotSee");
      }
      player = (player + 1) % 2;
      strPlayer.innerHTML = player == 0 ? "X" : "0";
    }
  });
});

function initializeGame() {
  player = 0;
  gameCounter = 0;
  board = initializeBoard();
  strPlayer.innerHTML = player == 0 ? "X" : "0";
  container[0].classList.remove("cannotSee");
  winnerContainer.classList.add("cannotSee");
  buttons.forEach(function (button) {
    button.textContent = "";
  });
}
function initializeBoard() {
  return [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
}

// Checking the Game
function checkGame(board, row, column) {
  return (
    checkRow(board, row, column) ||
    checkColumn(board, row, column) ||
    checkDiagonal(board, row, column) ||
    checkOtherDiagonal(board, row, column)
  );
}

function checkRow(board, row, column) {
  const character = board[row][column];
  for (let i = 0; i < 3; i++) {
    if (board[row][i] != character) {
      return false;
    }
  }
  return true;
}

function checkColumn(board, row, column) {
  const character = board[row][column];
  for (let i = 0; i < 3; i++) {
    if (board[i][column] != character) {
      return false;
    }
  }
  return true;
}

function checkDiagonal(board, row, column) {
  if (row != column) {
    return false;
  }
  const character = board[row][column];
  for (let i = 0; i < 3; i++) {
    if (board[i][i] != character) {
      return false;
    }
  }
  return true;
}

function checkOtherDiagonal(board, row, column) {
  if (row + column != 2) {
    return false;
  }
  character = board[row][column];
  for (let i = 0; i < 3; i++) {
    if (board[i][2 - i] != character) {
      return false;
    }
  }
  return true;
}

// Start Again the Game
startAgainButton.addEventListener("click", initializeGame);
