import * as mainGameModule from './index'

let player1_container = document.querySelector('.player-1-content')
let player2_container = document.querySelector('.player-2-content')
const startGame = document.querySelector('.start-game')
const notifyDom = document.querySelector('.notify')
const submitBtn = document.querySelector('.submit')
const inputBar = document.querySelector('#attack')
const p1_missed = document.querySelector('#p1-missed')
const p1_success = document.querySelector('#p1-success')
const p2_missed = document.querySelector('#p2-missed')
const p2_success = document.querySelector('#p2-success')
const p1_grid = document.querySelector('.player-1-grid')
const p2_grid = document.querySelector('.player-2-grid')
const restartBtn = document.querySelector('.restart')

const domTracking = {
    p1_missed,
    p1_success,
    p2_missed,
    p2_success,
    restartBtn
}

let gameStarted = false

// click start game
// create grids on screen
startGame.addEventListener('click', async function()  {
    if (gameStarted == false){
        gameStarted = true
        let main = mainGameModule.mainGameFunction()
        createGrids(2,2)
        assignCellsToPlayerBoards(main)
        console.log(main)
        await setPlayerOneShips(main)
        await setPlayerTwoShips(main)
        main.makeMoves()
    }
    else if (gameStarted == true){
        alert('game in progress')
    }

})

restartBtn.addEventListener('click', () => {
    //cleanUp
    gameStarted = false
    cleanUp()
    
})

function cleanUp(){
    p1_grid.innerHTML = ""
    p2_grid.innerHTML = ""
    p1_missed.textContent = "Missed Hits: "
    p2_missed.textContent = "Missed Hits: "
    p1_success.textContent = "Succesfull Hits: "
    p2_success.textContent = "Successfull Hits: "
}



function renderMisses(gameboard, missedHitSelector){
    gameboard.missedHits.forEach(coord => {
        console.log(coord)
        missedHitSelector.textContent += coord
    })
}


// ask player1 to assign his ships
async function setPlayerOneShips(mainGameFn){
    let history = []
    for (let i = 0; i < 2; i++){
        notifyDom.innerHTML = `Player 1 assign ship ${i + 1}`
        let valid_ans = false
        while(!valid_ans){
            let getinput = await inputClick()
            if (mainGameFn.validMoves.some(ele => ele === getinput) && !history.includes(getinput)){
                let coords = []
                let x = parseInt(getinput[1])
                let y = parseInt(getinput[3])
                coords.push(x, y)
                mainGameFn.player_1_board.placeShip(coords)
                mainGameFn.player_1_board.manipulateDom(coords)
                history.push(getinput)
                console.log(mainGameFn.player_1_board)

                valid_ans = true
            }
            else {
                alert('Example: \'[0,0]\' // cannot place multiple ships in same coordinates')
            }
        }
    }
    notifyDom.innerHTML = "";
}

function inputClick(){
    return new Promise((resolve) => {
        submitBtn.onclick = function (){
            let input = inputBar.value
            inputBar.value = "";
            resolve(input)
        }
    })
}


// assign player2 ships

function setPlayerTwoShips(mainGameFn){
    const valid_coords = mainGameFn.validMoves
    let history = []
    
    for (let i = 0; i < 2; i++){
        const randomCoord = valid_coords[Math.floor(Math.random() * valid_coords.length)]
        if (!history.includes(randomCoord)){
            let coords = []
            let x = parseInt(randomCoord[1])
            let y = parseInt(randomCoord[3])
            coords.push(x, y)
            mainGameFn.player_2_board.placeShip(coords)
            mainGameFn.player_2_board.manipulateDom(coords)
            history.push(randomCoord)
            console.log(mainGameFn.player_2_board)
        }
        else {
            continue
        }
    }

}


// when all ships are assigned start to make Moves




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
    let referenceBoard = mainGameModule.gameBoardFactory(2)
    createCoordinateArray(referenceBoard)   
}

function createCoordinateArray(gameboard){
    // creates coordinates to assign to each cells data attribute and inner HTML
    let cellList = document.querySelectorAll('.grid-item')
    let coords = [];
    gameboard.board.forEach(arr => {
        arr.forEach(obj => {
            coords.push(obj.box)
        })
    })

    let cell_list_array = Array.from(cellList)
    const middleIndex = Math.ceil(cell_list_array.length / 2)
    const firstHalf = cell_list_array.splice(0, middleIndex)
    const secondHalf = cell_list_array.splice(-middleIndex)

    const split_array = []
    split_array.push(firstHalf, secondHalf)

    
    split_array.forEach(array => {
        array.forEach((cell, index) => {
            cell.setAttribute('data-key', `[${coords[index]}]`)
            cell.setAttribute('data-ship', false)
            cell.innerHTML = `[${coords[index]}]` 
        })
    })
}

function assignCellsToPlayerBoards(gameBoard){
    let cellList = document.querySelectorAll('.grid-item')
    let cell_list_array = Array.from(cellList)
    const middleIndex = Math.ceil(cell_list_array.length / 2)
    const firstHalf = cell_list_array.splice(0, middleIndex)
    const secondHalf = cell_list_array.splice(-middleIndex)

    gameBoard.player_1_board.gridItems = firstHalf
    gameBoard.player_2_board.gridItems = secondHalf


}




export {
    createGrids,
    player1_container,
    player2_container,
    createCoordinateArray,
    inputClick,
    notifyDom,
    domTracking,
    renderMisses,
    gameStarted
}