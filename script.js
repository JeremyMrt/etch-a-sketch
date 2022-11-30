const theGrid = document.querySelector(".grid-container");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', (e)=> {
        theGrid.textContent="";
        const numberGrid = e.target.id

        
        let sqrtRootGrid = Math.floor(Math.sqrt(numberGrid));
        let gridSize = 600 / sqrtRootGrid;
        
        for (let i=0 ; i< numberGrid ; i++) {
            const oneBox = document.createElement('div');
            oneBox.classList.add('one-box');
            theGrid.appendChild(oneBox);
        }
        
        theGrid.style.gridTemplateColumns = `repeat(${sqrtRootGrid}, ${gridSize}px`;
        theGrid.style.gridTemplateRows = `repeat(${sqrtRootGrid}, ${gridSize}px`;
    })
    
})

let isDrawing = false;


theGrid.addEventListener('mousedown', (e)=> {
    e.target.classList.add('mouse-over');
    isDrawing = true
})

theGrid.addEventListener('mousemove', (e)=> {
    if (isDrawing) {
        e.target.classList.add('mouse-over');
}})

theGrid.addEventListener('mouseup', (e)=> {
    if (isDrawing) {
        e.target.classList.add('mouse-over');
        isDrawing = false;
}})



