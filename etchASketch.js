function colorChange(e) {
    this.style.backgroundColor = 'black';
};

function setGrid() {
    squaresPerSide = window.prompt('How many squares per side? (max of 100)');
    if (squaresPerSide > 150) {squaresPerSide = 150};
    totalSquares = squaresPerSide * squaresPerSide;
    for (i = 0; i < totalSquares; i++) {
        const gridItem = document.createElement('div');
        gridItem.setAttribute('id', 'grid-item');
        gridContainer.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
        gridContainer.appendChild(gridItem);
    };
    const items = document.querySelectorAll('#grid-item');
    items.forEach(item => item.addEventListener('mouseover', colorChange));
};

function resetGrid() {
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    };
    setGrid()
};

const gridContainer = document.querySelector('.grid-container');
setGrid() 

const resetButton = document.querySelector('button');
resetButton.addEventListener('click', resetGrid);

