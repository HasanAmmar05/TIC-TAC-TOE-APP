const gameBoard = document.querySelector("#gameboard");
const InfoDisplay = document.querySelector("#info");
const startCells = [
    "", "", "", 
    "", "", "", 
    "", "", ""
];

const CrossBtn = document.getElementById("Cross");
const CircleBtn = document.getElementById("Circle");

let isCirclePressed = false;
let isCrossPressed = false;

let go = "";

function CirclePressed (){
    isCirclePressed = true;
    isCrossPressed = false;
    go = "circle";
    InfoDisplay.textContent = "Circle goes first";
}

function WhoStarts(){

    let go = (isCirclePressed ? "circle" : "cross");

    if (go == "circle"){
        go = "circle";
        InfoDisplay.textContent = "Circle goes first";
    }
    else {
        go = "cross";
        InfoDisplay.textContent = "Cross goes first";
    }
}

CircleBtn.addEventListener('click', WhoStarts);


CrossBtn.addEventListener('click', function() {
    isCirclePressed = false;
    isCrossPressed = true;
    go = "cross";
});


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
    go = (go == "circle" ? "cross" : "circle");



    InfoDisplay.textContent = "it is now " + go + "'s turn";
    e.target.removeEventListener("click", addGo);

    checkScore();

}

InfoDisplay.id = "WinnerText";

function checkScore() {
    const allSquares = document.querySelectorAll(".square");
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
        ];

        winningCombos.forEach(array => {
            const circleWins = array.every(cell => 
                allSquares[cell].firstChild?.classList.contains("circle"))
                if(circleWins) {
                    InfoDisplay.textContent = "Circle Wins!";
                    
                    disableBoard();
                }
        });

        winningCombos.forEach(array => {
            const crossWins = array.every(cell => 
                allSquares[cell].firstChild?.classList.contains("cross"))
                if(crossWins) {
                    InfoDisplay.textContent = "Cross Wins!";
                    disableBoard();
                }
        });

}


function disableBoard() {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));  // Remove event listeners
}