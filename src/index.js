import * as dom from './dom'

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
    let successHits = [] 
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
        manipulateDom([x,y]){
            // sets cells data ship attribute to true when ship is placed in it.
            if (this.gridItems){
                let coord = JSON.stringify([x,y])
                console.log(coord)
                this.gridItems.forEach(cell => {
                    if (cell.dataset.key === coord){
                        let boatImg = document.createElement('img')
                        boatImg.setAttribute('src', '../images/battleship.svg')
                        boatImg.setAttribute('class', 'battleship')
                        cell.appendChild(boatImg)

                        cell.dataset.ship = true
                        cell.style.color = 'red'
                        console.log(cell)
                    }
                })
            }
        },
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
        colorSquare(coordinates){
            if (this.gridItems){
                this.gridItems.forEach(cell => {
                    if (cell.dataset.key === coordinates){
                        cell.style.backgroundColor = 'grey'
                    }
                })
            }
        },
        recieveAttack([x, y]){

            // turn coord to string to save missed hits and successful hits in array to display later
            let coord = [x, y]
            let coordToString = JSON.stringify(coord)
            //
            

            let state;
            this.board.forEach(row => {
                row.forEach(obj => {
                    if (obj.box[0] === x && obj.box[1] === y && 'ship' in obj === true){
                        obj.ship.hitShip()
                        this.noOfSuccesfulHits++
                        this.successHits.push(coordToString)
                        this.pushHits(coordToString)
                        state = obj.ship.noOfHits
                        console.log('hit ship')
                    }
                    else if(obj.box[0] === x && obj.box[1] === y && 'ship' in obj === false){
                        console.log('missed ship')
                        this.pushMisses(coordToString)
                        state = missedHits
                    }
                })
            })

            this.colorSquare(coordToString)
            this.checkShipStatus()
            return state
        },
        checkShipStatus(){
            if (this.noOfShips > 0 && this.noOfSuccesfulHits == this.noOfShips){
                console.log('All ships sunk')
                this.allShipsSunk = true
            }
        },
        renderMisses(missedHitSelector){
            this.missedHits.forEach(coord => {
                if (!missedHitSelector.textContent.includes(coord)){
                    missedHitSelector.textContent += `${coord}, `
                }
            })
        },
        pushMisses(coord){
            if (coord in this.missedHits == false){
                this.missedHits.push(coord)
            }
            else if (coord in this.missedHits == true){
                return
            } 
        },
        pushHits(coord){
            if (coord in this.successHits == false){
                this.successHits.push(coord)
            }
            else if (coord in this.successHits == true){
                return
            }
        },
        renderHits(successHitsSelector){
            this.successHits.forEach(coord => {
                if (!successHitsSelector.textContent.includes(coord)){
                    successHitsSelector.textContent += `${coord}, `
                }
            })
        },
        missedHits,
        noOfShips,
        noOfSuccesfulHits,
        allShipsSunk,
        successHits
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

    let p1_shipsReady = false
    let p2_shipsReady = false

    let validMoves = []


    let player1 = playerFactory('player 1')
    let player2 = playerFactory('player 2')

    let player_1_board = gameBoardFactory(2)
    let player_2_board = gameBoardFactory(2)
    player_1_board.ai = false
    player_2_board.ai = true


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
        validMoves,
        p1_shipsReady,
        p2_shipsReady,
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
        async recieveInput(history){
            let result;
            let valid_ans = false
            while(!valid_ans){
                let input = await dom.inputClick()
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
        async makeMoves(){
            while(gameStart === true){
                if(player1_turn == true){
                    console.log('player 1 turn')
                    // let input = this.recieveInput(player1, player2_history)
                    dom.notifyDom.innerHTML = "Player 1 Enter Coordinates to attack"
                    let input = await this.recieveInput(player2_history)
                    this.registerTurn(player_2_board, input)
                    player_2_board.renderMisses(dom.domTracking.p2_missed)
                    player_2_board.renderHits(dom.domTracking.p2_success)
                    console.log(input)
                    player1_turn = false
                    player2_turn = true
                }
                else if (player2_turn == true){
                    console.log('player 2 turn')
                    // let input = this.recieveInput(player2, player1_history)
                    dom.notifyDom.innerHTML = "Player 2 Enter Coordinates to attack"
                    let input = await this.recieveInput(player1_history)
                    this.registerTurn(player_1_board, input)
                    player_1_board.renderMisses(dom.domTracking.p1_missed)
                    player_1_board.renderHits(dom.domTracking.p1_success)
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
            if (player1Board.allShipsSunk == true){
                alert('player 2 wins')
            }
            if (player2Board.allShipsSunk == true){
                alert('player 1 wins')
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






export {shipFactory, gameBoardFactory, playerFactory, aiFactory, mainGameFunction}