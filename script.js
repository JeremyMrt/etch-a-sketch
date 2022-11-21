const theGrid = document.querySelector(".grid-container");

let numberGrid = 16;
let sqrtRootGrid = Math.sqrt(numberGrid);

for (let i=0 ; i< numberGrid ; i++) {
    const oneBox = document.createElement('div');
    oneBox.classList.add('one-box');
    theGrid.appendChild(oneBox);
}

theGrid.style.gridTemplateColumns = `repeat(${sqrtRootGrid}, 20px`;
theGrid.style.gridTemplateRows = `repeat(${sqrtRootGrid}, 20px`;
