/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module) => {

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
                        console.log(obj)
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

function valid(gameBoard){
    let gameBoardSize = gameBoard.board.length

}

const mainGameFunction = () => {
    let x = 0
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
            let contains = moves.some(item => item === attackCoordinates)
            return contains
        },
        checkHistory(attackCoordinates, playerHistory){
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
        takeTurn(playerBoard, history, player){

            },
        makeMoves(){
            while(gameStart === true){
                if(player1_turn == true){
                    console.log('player 1 turn')
                    let input = this.recieveInput(player1, player2_history)
                    console.log(input)
                    player1_turn = false
                    player2_turn = true
                }
                else if (player2_turn == true){
                    console.log('player 2 turn')
                    let input = this.recieveInput(player2, player2_history)
                    console.log(input)
                    player2_turn = false
                    player1_turn = true
                }
                x++
                this.stop()
            }
        },
        stop(){
            if(x === 2){
                gameStart = false
            }
        }
    }
}
let m = mainGameFunction()
m.makeMoves()
console.log(m.validMoves)



module.exports = {shipFactory, gameBoardFactory, playerFactory, aiFactory, mainGameFunction}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBLHdCQUF3QixpQkFBaUI7QUFDekMsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixpQ0FBaUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGtCQUFrQjs7Ozs7Ozs7VUM3TmxCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2hpcEZhY3RvcnkgPSAobGVuZ3RoLCBzdW5rLCBub09mSGl0cykgPT4ge1xuICAgIFxuICAgIGZ1bmN0aW9uIGhpdFNoaXAoKXtcbiAgICAgICAgdGhpcy5ub09mSGl0cysrXG4gICAgICAgIHRoaXMuaXNTdW5rKClcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgbGVuZ3RoLCBcbiAgICAgICAgICAgICBzdW5rLCBcbiAgICAgICAgICAgICBub09mSGl0cywgXG4gICAgICAgICAgICAgaGl0U2hpcCwgXG4gICAgICAgICAgICAgaXNTdW5rKCl7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09IHRoaXMubm9PZkhpdHMpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbn1cblxuXG5jb25zdCBnYW1lQm9hcmRGYWN0b3J5ID0gKHNpemVPZkJvYXJkKSA9PiB7XG4gICBcbiAgICBsZXQgbm9PZlNoaXBzID0gMFxuICAgIGxldCBub09mU3VjY2VzZnVsSGl0cyA9IDAgXG4gICAgbGV0IG1pc3NlZEhpdHMgPSBbXSBcbiAgICBsZXQgYm9hcmQgPSBbXVxuICAgIGxldCBhbGxTaGlwc1N1bmsgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplT2ZCb2FyZDsgaSsrKXtcbiAgICBib2FyZFtpXSA9IFtdXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZU9mQm9hcmQ7IGorKyl7XG4gICAgICAgICAgICBib2FyZFtpXVtqXSA9IHtib3g6IFtpLCBqXX1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLFxuICAgICAgICBwbGFjZVNoaXAoW3gsIHldKXtcbiAgICAgICAgICAgIC8vIHBsYWNlcyBhIHNoaXAgb2JqZWN0IGF0IHNwZWNpZmllZCBjb29yZGluYXRlc1xuICAgICAgICAgICAgbGV0IHNoaXBfcGxhY2VkO1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoZXNlIGFyZSB0aGUgcm93cyBvZiBhcnJheXMgJywgcm93KVxuICAgICAgICAgICAgICAgIHJvdy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGVzZSBhcmUgdGhlIG9iamVjdHMgaW4gcm93cycsIG9iailcbiAgICAgICAgICAgICAgICAgICAgaWYob2JqLmJveFswXSA9PT0geCAmJiBvYmouYm94WzFdID09PSB5KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgnc2hpcCcgaW4gb2JqID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnNoaXAgPSBzaGlwRmFjdG9yeSgxLCBmYWxzZSwgMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmopXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcF9wbGFjZWQgPSAncGxhY2VkIHNoaXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub09mU2hpcHMrK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmpcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCdzaGlwJyBpbiBvYmogPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBfcGxhY2VkID0gJ2FscmVhZHkgcGxhY2VkIHNoaXAgaGVyZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gc2hpcF9wbGFjZWRcbiAgICAgICAgfSxcbiAgICAgICAgcmVjaWV2ZUF0dGFjayhbeCwgeV0pe1xuICAgICAgICAgICAgbGV0IHN0YXRlO1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgcm93LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5ib3hbMF0gPT09IHggJiYgb2JqLmJveFsxXSA9PT0geSAmJiAnc2hpcCcgaW4gb2JqID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zaGlwLmhpdFNoaXAoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub09mU3VjY2VzZnVsSGl0cysrXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IG9iai5zaGlwLm5vT2ZIaXRzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGl0IHNoaXAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2JqKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYob2JqLmJveFswXSA9PT0geCAmJiBvYmouYm94WzFdID09PSB5ICYmICdzaGlwJyBpbiBvYmogPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtaXNzZWQgc2hpcCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1pc3NlZEhpdHMucHVzaChbeCwgeV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IG1pc3NlZEhpdHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5jaGVja1NoaXBTdGF0dXMoKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrU2hpcFN0YXR1cygpe1xuICAgICAgICAgICAgaWYgKHRoaXMubm9PZlNoaXBzID4gMCAmJiB0aGlzLm5vT2ZTdWNjZXNmdWxIaXRzID09IHRoaXMubm9PZlNoaXBzKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWxsIHNoaXBzIHN1bmsnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtaXNzZWRIaXRzLFxuICAgICAgICBub09mU2hpcHMsXG4gICAgICAgIG5vT2ZTdWNjZXNmdWxIaXRzLFxuICAgICAgICBhbGxTaGlwc1N1bmtcbiAgICB9XG59XG5cbmNvbnN0IHBsYXllckZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICAgIGxldCB3aW5uZXIgPSBmYWxzZVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgd2lubmVyXG4gICAgfVxufVxuXG5jb25zdCBhaUZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICAgIGxldCB3aW5uZXIgPSBmYWxzZVxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHdpbm5lciwgIFxuICAgIH1cbn1cblxuZnVuY3Rpb24gdmFsaWQoZ2FtZUJvYXJkKXtcbiAgICBsZXQgZ2FtZUJvYXJkU2l6ZSA9IGdhbWVCb2FyZC5ib2FyZC5sZW5ndGhcblxufVxuXG5jb25zdCBtYWluR2FtZUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIGxldCB4ID0gMFxuICAgIGxldCBnYW1lU3RhcnQgPSB0cnVlXG4gICAgbGV0IHBsYXllcjFfdHVybiA9IHRydWVcbiAgICBsZXQgcGxheWVyMl90dXJuID0gZmFsc2VcblxuICAgIGxldCBwbGF5ZXIxX2hpc3RvcnkgPSBbXVxuICAgIGxldCBwbGF5ZXIyX2hpc3RvcnkgPSBbXVxuXG4gICAgbGV0IHZhbGlkTW92ZXMgPSBbXVxuXG5cbiAgICBsZXQgcGxheWVyMSA9IHBsYXllckZhY3RvcnkoJ3BsYXllciAxJylcbiAgICBsZXQgcGxheWVyMiA9IHBsYXllckZhY3RvcnkoJ3BsYXllciAyJylcblxuICAgIGxldCBwbGF5ZXJfMV9ib2FyZCA9IGdhbWVCb2FyZEZhY3RvcnkoMilcbiAgICBsZXQgcGxheWVyXzJfYm9hcmQgPSBnYW1lQm9hcmRGYWN0b3J5KDIpXG4gICAgcGxheWVyXzFfYm9hcmQucGxhY2VTaGlwKFswLDBdKVxuICAgIHBsYXllcl8xX2JvYXJkLnBsYWNlU2hpcChbMSwxXSlcbiAgICBwbGF5ZXJfMl9ib2FyZC5wbGFjZVNoaXAoWzAsMV0pXG4gICAgcGxheWVyXzJfYm9hcmQucGxhY2VTaGlwKFsxLDBdKVxuXG4gICAgLy8gZm9yIGxvb3AgdGFrZXMgYWxsIHRoZSBhdmFpbGFibGUgbW92ZXMgYW5kIHB1dHMgdGhlbSBpblxuICAgIC8vIGFuIGFycmF5IGFzIHN0cmluZyBhcnJheXMuIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyXzFfYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspe1xuICAgICAgICBwbGF5ZXJfMV9ib2FyZC5ib2FyZFtpXS5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gSlNPTi5zdHJpbmdpZnkob2JqLmJveClcbiAgICAgICAgICAgIHZhbGlkTW92ZXMucHVzaCh2YWx1ZXMpXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgcGxheWVyMSxcbiAgICAgICAgcGxheWVyMixcbiAgICAgICAgcGxheWVyXzFfYm9hcmQsXG4gICAgICAgIHBsYXllcl8yX2JvYXJkLFxuICAgICAgICBwbGF5ZXIyX2hpc3RvcnksXG4gICAgICAgIHBsYXllcjFfdHVybixcbiAgICAgICAgcGxheWVyMl90dXJuLFxuICAgICAgICBjaGVja01vdmVzKGF0dGFja0Nvb3JkaW5hdGVzLCBtb3Zlcyl7XG4gICAgICAgICAgICBsZXQgY29udGFpbnMgPSBtb3Zlcy5zb21lKGl0ZW0gPT4gaXRlbSA9PT0gYXR0YWNrQ29vcmRpbmF0ZXMpXG4gICAgICAgICAgICByZXR1cm4gY29udGFpbnNcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tIaXN0b3J5KGF0dGFja0Nvb3JkaW5hdGVzLCBwbGF5ZXJIaXN0b3J5KXtcbiAgICAgICAgICAgIC8vIGxldCBpdGVtID0gSlNPTi5zdHJpbmdpZnkoYXR0YWNrQ29vcmRpbmF0ZXMpXG4gICAgICAgICAgICBsZXQgY29udGFpbnMgPSBwbGF5ZXJIaXN0b3J5LnNvbWUoZWxlID0+IGVsZSA9PT0gYXR0YWNrQ29vcmRpbmF0ZXMpXG4gICAgICAgICAgICByZXR1cm4gY29udGFpbnNcblxuICAgICAgICB9LFxuICAgICAgICByZWNpZXZlSW5wdXQocGxheWVyLCBoaXN0b3J5KXtcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgICAgICBsZXQgdmFsaWRfYW5zID0gZmFsc2VcbiAgICAgICAgICAgIHdoaWxlKCF2YWxpZF9hbnMpe1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IHByb21wdChwbGF5ZXIubmFtZSArICcgZW50ZXIgY29vcmRpbmF0ZXMnKVxuICAgICAgICAgICAgICAgIGlmKHRoaXMuY2hlY2tIaXN0b3J5KGlucHV0LCBoaXN0b3J5KSA9PSBmYWxzZSAmJiB0aGlzLmNoZWNrTW92ZXMoaW5wdXQsIHZhbGlkTW92ZXMpID09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgndmFsaWQnKVxuICAgICAgICAgICAgICAgICAgICB2YWxpZF9hbnMgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmNoZWNrSGlzdG9yeShpbnB1dCwgaGlzdG9yeSkgPT0gdHJ1ZSB8fCB0aGlzLmNoZWNrTW92ZXMoaW5wdXQsIHZhbGlkTW92ZXMpID09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ211c3QgbWFrZSB2YWxpZCBtb3ZlJylcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH0sXG4gICAgICAgIHRha2VUdXJuKHBsYXllckJvYXJkLCBoaXN0b3J5LCBwbGF5ZXIpe1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICBtYWtlTW92ZXMoKXtcbiAgICAgICAgICAgIHdoaWxlKGdhbWVTdGFydCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgaWYocGxheWVyMV90dXJuID09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIDEgdHVybicpXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IHRoaXMucmVjaWV2ZUlucHV0KHBsYXllcjEsIHBsYXllcjJfaGlzdG9yeSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5wdXQpXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjFfdHVybiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjJfdHVybiA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGxheWVyMl90dXJuID09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIDIgdHVybicpXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IHRoaXMucmVjaWV2ZUlucHV0KHBsYXllcjIsIHBsYXllcjJfaGlzdG9yeSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5wdXQpXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjJfdHVybiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjFfdHVybiA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeCsrXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3RvcCgpe1xuICAgICAgICAgICAgaWYoeCA9PT0gMil7XG4gICAgICAgICAgICAgICAgZ2FtZVN0YXJ0ID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmxldCBtID0gbWFpbkdhbWVGdW5jdGlvbigpXG5tLm1ha2VNb3ZlcygpXG5jb25zb2xlLmxvZyhtLnZhbGlkTW92ZXMpXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtzaGlwRmFjdG9yeSwgZ2FtZUJvYXJkRmFjdG9yeSwgcGxheWVyRmFjdG9yeSwgYWlGYWN0b3J5LCBtYWluR2FtZUZ1bmN0aW9ufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=