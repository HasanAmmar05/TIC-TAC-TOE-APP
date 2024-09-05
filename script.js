const gameBoard = document.querySelector("#gameboard");
const InfoDisplay = document.querySelector("#info");
let go = "circle";
const startCells = [
    "", "", "", 
    "", "", "", 
    "", "", ""
];

InfoDisplay.textContent = "Circle goes first";

function createBoard() {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        cellElement.id = index;

        cellElement.addEventListener("click", addGo);

        gameBoard.append(cellElement);
    });
}

createBoard();

function addGo(e) {
    const goDisplay = document.createElement("div");
    goDisplay.classList.add(go);
    e.target.append(goDisplay);
    go = (go === "circle" ? "cross" : "circle")
}