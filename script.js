const gridContainer = document.getElementById("grid_container");
const submitButton = document.getElementById("submitButton");
const textInput = document.getElementById("textInput");

function createGrid(nSquares) {
    // remove everything
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    // create new grid
    for (let i = 0; i < (nSquares * nSquares); i++) {
        const cell = document.createElement('div');
        
        cell.classList.add('grid-item');
        cell.style.width = `${Math.ceil((382 - (3 * nSquares)) / nSquares)}px`;
        cell.style.height = `${Math.ceil((382 - (3 * nSquares)) / nSquares)}px`;
        gridContainer.appendChild(cell);
        cell.addEventListener('mouseover', () => { cell.style.background = 'green' });
    }
}


submitButton.addEventListener('click', () => {
    const userInput = textInput.value;
    createGrid(userInput);
    textInput.value = '';
});


// Start the page with the 16x16 grid
document.addEventListener('DOMContentLoaded', () => { createGrid(16); });