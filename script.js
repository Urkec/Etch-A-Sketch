const container = document.querySelector("#container");
const gridButton =document.querySelector("#gridButton");

function createGrid(gridSize) { 
    const squareSize = 960 / gridSize; 

container.innerHTML = "";

for (let i = 0;i < gridSize * gridSize; i++) {

const square = document.createElement("div");

square.style.width = squareSize + "px";
square.style.height = squareSize + "px";

square.classList.add("square");

square.addEventListener("mouseenter", () => {
    square.style.backgroundColor="black";
});
container.appendChild(square);
   }
}

createGrid(16);

gridButton.addEventListener("click", () => {
const gridSize = Number(prompt("How many squares per side"));

if ( 
    gridSize >= 1 &&
    gridSize <= 100 &&
    Number.isInteger(gridSize)
 ) {

createGrid(gridSize);

} else {
    alert("Please enter a number between 1 and 100.");
}
});