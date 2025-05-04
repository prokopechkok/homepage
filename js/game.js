const secretButton = document.getElementById("secret-button");
const gameContainer = document.getElementById("game-container");
const boardElement = document.getElementById("board");
const status = document.getElementById("status");
const closeBtn = document.getElementById("close-btn");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

secretButton.addEventListener("click", () => {
  secretButton.style.display = "none";
  gameContainer.style.display = "flex";
  initBoard();
});

closeBtn.addEventListener("click", () => {
  gameContainer.style.display = "none";
  secretButton.style.display = "inline-block";
  resetGame();
});

function initBoard() {
  boardElement.innerHTML = "";
  board.forEach((cell, index) => {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    cellDiv.dataset.index = index;
    cellDiv.addEventListener("click", handleCellClick);
    boardElement.appendChild(cellDiv);
  });
}

function handleCellClick(e) {
  const index = e.target.dataset.index;
  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWinner()) {
    status.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
  } else if (board.every((cell) => cell !== "")) {
    status.textContent = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winPatterns.some((pattern) => {
    const [a, b, c] = pattern;
    return board[a] && board[a] === board[b] && board[b] === board[c];
  });
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  status.textContent = `Player X's turn`;
  initBoard();
}
