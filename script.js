const gameBoard = document.querySelector("#gameboard");
const InfoDisplay = document.querySelector("#info");
const startCells = [
    "", "", "", 
    "", "", "", 
    "", "", ""
];

InfoDisplay.textContent = "Circle goes first";

function createBoard() {
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        gameBoard.append(cellElement);
    }) 
}

createBoard();