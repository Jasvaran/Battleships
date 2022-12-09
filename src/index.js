const shipFactory = (length, sunk, noOfHits) => {
    
    function hitShip(){
        this.noOfHits++
        this.isSunk()
    }
    
    return { length, 
             sunk, 
             noOfHits, 
             hitShip, 
             isSunk(){
                if (this.length == this.noOfHits){
                    this.sunk = true
                }
             }
            }
}


const gameBoardFactory = (sizeOfBoard) => {
   
    let noOfShips;
    let noOfSuccesfulHits; 
    let missedHits = [] 
    let board = []
    let allShipsSunk = false

    for (let i = 0; i < sizeOfBoard; i++){
    board[i] = []
        for (let j = 0; j < sizeOfBoard; j++){
            board[i][j] = {box: [i, j]}
        }
    }

    return {
        board,
        placeShip([x, y]){
            // places a ship object at specified coordinates
            let ship_placed;
            this.board.forEach(row => {
                // console.log('these are the rows of arrays ', row)
                row.forEach(obj => {
                    // console.log('these are the objects in rows', obj)
                    if(obj.box[0] === x && obj.box[1] === y){
                        if ('ship' in obj === false){
                            obj.ship = shipFactory(1, false, 0)
                            // console.log(obj)
                            ship_placed = 'placed ship'
                            noOfShips++
                            return obj
                        }
                        else if ('ship' in obj === true){
                            ship_placed = 'already placed ship here'
                            return
                        }
                        
                    }
                })
            })
            return ship_placed
        },
        recieveAttack([x, y]){
            let state;
            this.board.forEach(row => {
                row.forEach(obj => {
                    if (obj.box[0] === x && obj.box[1] === y && 'ship' in obj === true){
                        obj.ship.hitShip()
                        noOfSuccesfulHits++
                        state = obj.ship.noOfHits
                        console.log('hit ship')
                        console.log(obj)
                    }
                    else if(obj.box[0] === x && obj.box[1] === y && 'ship' in obj === false){
                        console.log('missed ship')
                        missedHits.push([x, y])
                        state = missedHits
                    }
                })
            })
            this.checkShipStatus()
            return state
        },
        checkShipStatus(){
            if (this.noOfShips > 0 && this.noOfSuccesfulHits == this.noOfShips){
                console.log('All ships sunk')
            }
        },
        missedHits,
        noOfShips,
        noOfSuccesfulHits,
        allShipsSunk
    }
}

const playerFactory = (name) => {
    let winner = false

    return {
        name,
        winner
    }
}

const aiFactory = (name) => {
    let winner = false
    return {
        name,
        winner,  
    }
}

const mainGameFunction = () => {
    let player1 = playerFactory('player 1')
    let player2 = playerFactory('player 2')

    let player_1_board = gameBoardFactory(5)
    let player_2_board = gameBoardFactory(5)

    return { 
        player1,
        player2,
        player_1_board,
        player_2_board
    }
}

let player1 = gameBoardFactory(5)
player1.placeShip([0,2])
console.log(player1.board[0])

console.log(mainGameFunction())




module.exports = {shipFactory, gameBoardFactory, playerFactory, aiFactory}

