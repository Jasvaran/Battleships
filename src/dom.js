let player1_container = document.querySelector('.player-1-content')

function createGrids(){
    let mainGrid = document.createElement('div')
    let cell = document.createElement('div')
    mainGrid.setAttribute('class', 'player-1-grid')
    mainGrid.style.display = 'grid'
    
    mainGrid.appendChild(cell)
    player1_container.appendChild(mainGrid)
}

module.exports = {
    createGrids,
    player1_container
}