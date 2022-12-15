let player1_container = document.querySelector('.player-1-content')
let player2_container = document.querySelector('.player-2-content')


function createGrids(rows, cols){    
    let container = document.querySelectorAll('#main-grid')
    container.forEach((obj, index) => {
        obj.style.setProperty('--grid-rows', rows)
        obj.style.setProperty('--grid-cols', cols)
        obj.setAttribute('class', `player-${index + 1}-grid`)

        for (let i = 0; i < (rows * cols); i++){
            let cell = document.createElement('div')
            cell.innerText = (i)
            cell.className = 'grid-item'
            obj.appendChild(cell)
        }
    })

    player1_container.appendChild(container[0])
    player2_container.appendChild(container[1])
}

function createCoordinateArray(gameboard){
    let cellList = document.querySelectorAll('.grid-item')
    let coords = [];
    gameboard.board.forEach(arr => {
        arr.forEach(obj => {
            coords.push(obj.box)
        })
    })
    
    cellList.forEach((cell, index) => {
        cell.setAttribute('data-key', `[${coords[index]}]`)
    })
}

function dataTest(){
    let cellList = document.querySelector('#test')
    console.log(cellList.dataset.key === 'testing')

}


module.exports = {
    createGrids,
    player1_container,
    createCoordinateArray,
    dataTest
}