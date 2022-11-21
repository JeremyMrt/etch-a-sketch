const theGrid = document.querySelector(".grid-container");

let numberGrid = 514;
let sqrtRootGrid = Math.floor(Math.sqrt(numberGrid));
let gridSize = 300 / sqrtRootGrid;


for (let i=0 ; i< numberGrid ; i++) {
    const oneBox = document.createElement('div');
    oneBox.classList.add('one-box');
    theGrid.appendChild(oneBox);
}

theGrid.style.gridTemplateColumns = `repeat(${sqrtRootGrid}, ${gridSize}px`;
theGrid.style.gridTemplateRows = `repeat(${sqrtRootGrid}, ${gridSize}px`;

theGrid.addEventListener('mouseover', (e)=> {
    console.log(e)
    e.target.classList.add('mouse-over');
})
