const dom = require('./dom')
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
   
    let noOfShips = 0
    let noOfSuccesfulHits = 0 
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
                            this.noOfShips++
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
                        this.noOfSuccesfulHits++
                        state = obj.ship.noOfHits
                        console.log('hit ship')
                    }
                    else if(obj.box[0] === x && obj.box[1] === y && 'ship' in obj === false){
                        console.log('missed ship')
                        this.missedHits.push([x, y])
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
                this.allShipsSunk = true
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
    let gameStart = true
    let player1_turn = true
    let player2_turn = false

    let player1_history = []
    let player2_history = []

    let validMoves = []


    let player1 = playerFactory('player 1')
    let player2 = playerFactory('player 2')

    let player_1_board = gameBoardFactory(2)
    let player_2_board = gameBoardFactory(2)
    player_1_board.placeShip([0,0])
    player_1_board.placeShip([1,1])
    player_2_board.placeShip([0,1])
    player_2_board.placeShip([1,0])

    // for loop takes all the available moves and puts them in
    // an array as string arrays. 
    for (let i = 0; i < player_1_board.board.length; i++){
        player_1_board.board[i].forEach(obj => {
            let values = JSON.stringify(obj.box)
            validMoves.push(values)
        })
    }


    return { 
        player1,
        player2,
        player_1_board,
        player_2_board,
        player2_history,
        player1_turn,
        player2_turn,
        checkMoves(attackCoordinates, moves){
            // check if moves can be made in terms of possible coordinates to choose from
            let contains = moves.some(item => item === attackCoordinates)
            return contains
        },
        checkHistory(attackCoordinates, playerHistory){
            // check if player already made a move to that coordinate
            // let item = JSON.stringify(attackCoordinates)
            let contains = playerHistory.some(ele => ele === attackCoordinates)
            return contains

        },
        recieveInput(player, history){
            let result;
            let valid_ans = false
            while(!valid_ans){
                let input = prompt(player.name + ' enter coordinates')
                if(this.checkHistory(input, history) == false && this.checkMoves(input, validMoves) == true){
                    alert('valid')
                    history.push(input)
                    valid_ans = true
                    result = input
                    return input
                }
                else if (this.checkHistory(input, history) == true || this.checkMoves(input, validMoves) == false){
                    alert('must make valid move')
                    continue
                }
            }
            return result
        },
        registerTurn(playerBoard, attackInput){
            let arr = [];
            let x = parseInt(attackInput[1]);
            let y = parseInt(attackInput[3]);
            arr.push(x, y);
            playerBoard.recieveAttack(arr);
            console.log(playerBoard.board)
            },
        makeMoves(){
            while(gameStart === true){
                if(player1_turn == true){
                    console.log('player 1 turn')
                    let input = this.recieveInput(player1, player2_history)
                    this.registerTurn(player_2_board, input)
                    console.log(input)
                    player1_turn = false
                    player2_turn = true
                }
                else if (player2_turn == true){
                    console.log('player 2 turn')
                    let input = this.recieveInput(player2, player1_history)
                    this.registerTurn(player_1_board, input)
                    console.log(input)
                    player2_turn = false
                    player1_turn = true
                }
                this.endGame(player_1_board, player_2_board)
            }
        },
        endGame(player1Board, player2Board){
            if (player1Board.allShipsSunk == true || player2Board.allShipsSunk == true){
                gameStart = false
            }
        },
        // consoleInput(query){
        //     const readline = require('readline')
        //     var rl = readline.createInterface(process.stdin, process.stdout)
        //     return new Promise(resolve => {
        //       rl.question(query, (input) => {
        //         rl.close()
        //         resolve(input)
        //       })
        //     })
        //   },
        // async getConsoleInput(player, history){
        //     let valid_ans = false
        //     while(!valid_ans){
        //       let result = await this.consoleInput(player.name + ' Enter coordinates to attack ')
        //       if(this.checkHistory(result, history) == false && this.checkMoves(result, validMoves) == true){
        //         console.log('valid')
        //         history.push(result)
        //         valid_ans = true
        //         return result
        //       }
        //     else if (this.checkHistory(result, history) == true || this.checkMoves(result, validMoves) == false){
        //         console.log('must make valid move')
        //         continue
        //       }
        //     }
        //     return result
        //   }   
    }
}
let m = mainGameFunction()
// m.makeMoves()
let gb = gameBoardFactory(2)
dom.createGrids(2,2)
dom.createCoordinateArray(gb);
dom.dataTest()




module.exports = {shipFactory, gameBoardFactory, playerFactory, aiFactory, mainGameFunction}
