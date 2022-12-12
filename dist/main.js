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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBLHdCQUF3QixpQkFBaUI7QUFDekMsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsaUNBQWlDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxrQkFBa0I7Ozs7Ozs7O1VDL05sQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCwgc3Vuaywgbm9PZkhpdHMpID0+IHtcbiAgICBcbiAgICBmdW5jdGlvbiBoaXRTaGlwKCl7XG4gICAgICAgIHRoaXMubm9PZkhpdHMrK1xuICAgICAgICB0aGlzLmlzU3VuaygpXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7IGxlbmd0aCwgXG4gICAgICAgICAgICAgc3VuaywgXG4gICAgICAgICAgICAgbm9PZkhpdHMsIFxuICAgICAgICAgICAgIGhpdFNoaXAsIFxuICAgICAgICAgICAgIGlzU3Vuaygpe1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PSB0aGlzLm5vT2ZIaXRzKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG59XG5cblxuY29uc3QgZ2FtZUJvYXJkRmFjdG9yeSA9IChzaXplT2ZCb2FyZCkgPT4ge1xuICAgXG4gICAgbGV0IG5vT2ZTaGlwcyA9IDBcbiAgICBsZXQgbm9PZlN1Y2Nlc2Z1bEhpdHMgPSAwIFxuICAgIGxldCBtaXNzZWRIaXRzID0gW10gXG4gICAgbGV0IGJvYXJkID0gW11cbiAgICBsZXQgYWxsU2hpcHNTdW5rID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZU9mQm9hcmQ7IGkrKyl7XG4gICAgYm9hcmRbaV0gPSBbXVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemVPZkJvYXJkOyBqKyspe1xuICAgICAgICAgICAgYm9hcmRbaV1bal0gPSB7Ym94OiBbaSwgal19XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBib2FyZCxcbiAgICAgICAgcGxhY2VTaGlwKFt4LCB5XSl7XG4gICAgICAgICAgICAvLyBwbGFjZXMgYSBzaGlwIG9iamVjdCBhdCBzcGVjaWZpZWQgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGxldCBzaGlwX3BsYWNlZDtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGVzZSBhcmUgdGhlIHJvd3Mgb2YgYXJyYXlzICcsIHJvdylcbiAgICAgICAgICAgICAgICByb3cuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhlc2UgYXJlIHRoZSBvYmplY3RzIGluIHJvd3MnLCBvYmopXG4gICAgICAgICAgICAgICAgICAgIGlmKG9iai5ib3hbMF0gPT09IHggJiYgb2JqLmJveFsxXSA9PT0geSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ3NoaXAnIGluIG9iaiA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zaGlwID0gc2hpcEZhY3RvcnkoMSwgZmFsc2UsIDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBfcGxhY2VkID0gJ3BsYWNlZCBzaGlwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9PZlNoaXBzKytcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgnc2hpcCcgaW4gb2JqID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwX3BsYWNlZCA9ICdhbHJlYWR5IHBsYWNlZCBzaGlwIGhlcmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHNoaXBfcGxhY2VkXG4gICAgICAgIH0sXG4gICAgICAgIHJlY2lldmVBdHRhY2soW3gsIHldKXtcbiAgICAgICAgICAgIGxldCBzdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgICAgIHJvdy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouYm94WzBdID09PSB4ICYmIG9iai5ib3hbMV0gPT09IHkgJiYgJ3NoaXAnIGluIG9iaiA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouc2hpcC5oaXRTaGlwKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9PZlN1Y2Nlc2Z1bEhpdHMrK1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBvYmouc2hpcC5ub09mSGl0c1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpdCBzaGlwJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iailcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG9iai5ib3hbMF0gPT09IHggJiYgb2JqLmJveFsxXSA9PT0geSAmJiAnc2hpcCcgaW4gb2JqID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbWlzc2VkIHNoaXAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5taXNzZWRIaXRzLnB1c2goW3gsIHldKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBtaXNzZWRIaXRzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTaGlwU3RhdHVzKClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgICB9LFxuICAgICAgICBjaGVja1NoaXBTdGF0dXMoKXtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vT2ZTaGlwcyA+IDAgJiYgdGhpcy5ub09mU3VjY2VzZnVsSGl0cyA9PSB0aGlzLm5vT2ZTaGlwcyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FsbCBzaGlwcyBzdW5rJylcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFNoaXBzU3VuayA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWlzc2VkSGl0cyxcbiAgICAgICAgbm9PZlNoaXBzLFxuICAgICAgICBub09mU3VjY2VzZnVsSGl0cyxcbiAgICAgICAgYWxsU2hpcHNTdW5rXG4gICAgfVxufVxuXG5jb25zdCBwbGF5ZXJGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgICBsZXQgd2lubmVyID0gZmFsc2VcblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHdpbm5lclxuICAgIH1cbn1cblxuY29uc3QgYWlGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgICBsZXQgd2lubmVyID0gZmFsc2VcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICB3aW5uZXIsICBcbiAgICB9XG59XG5cbmNvbnN0IG1haW5HYW1lRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgbGV0IGdhbWVTdGFydCA9IHRydWVcbiAgICBsZXQgcGxheWVyMV90dXJuID0gdHJ1ZVxuICAgIGxldCBwbGF5ZXIyX3R1cm4gPSBmYWxzZVxuXG4gICAgbGV0IHBsYXllcjFfaGlzdG9yeSA9IFtdXG4gICAgbGV0IHBsYXllcjJfaGlzdG9yeSA9IFtdXG5cbiAgICBsZXQgdmFsaWRNb3ZlcyA9IFtdXG5cblxuICAgIGxldCBwbGF5ZXIxID0gcGxheWVyRmFjdG9yeSgncGxheWVyIDEnKVxuICAgIGxldCBwbGF5ZXIyID0gcGxheWVyRmFjdG9yeSgncGxheWVyIDInKVxuXG4gICAgbGV0IHBsYXllcl8xX2JvYXJkID0gZ2FtZUJvYXJkRmFjdG9yeSgyKVxuICAgIGxldCBwbGF5ZXJfMl9ib2FyZCA9IGdhbWVCb2FyZEZhY3RvcnkoMilcbiAgICBwbGF5ZXJfMV9ib2FyZC5wbGFjZVNoaXAoWzAsMF0pXG4gICAgcGxheWVyXzFfYm9hcmQucGxhY2VTaGlwKFsxLDFdKVxuICAgIHBsYXllcl8yX2JvYXJkLnBsYWNlU2hpcChbMCwxXSlcbiAgICBwbGF5ZXJfMl9ib2FyZC5wbGFjZVNoaXAoWzEsMF0pXG5cbiAgICAvLyBmb3IgbG9vcCB0YWtlcyBhbGwgdGhlIGF2YWlsYWJsZSBtb3ZlcyBhbmQgcHV0cyB0aGVtIGluXG4gICAgLy8gYW4gYXJyYXkgYXMgc3RyaW5nIGFycmF5cy4gXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJfMV9ib2FyZC5ib2FyZC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHBsYXllcl8xX2JvYXJkLmJvYXJkW2ldLmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBKU09OLnN0cmluZ2lmeShvYmouYm94KVxuICAgICAgICAgICAgdmFsaWRNb3Zlcy5wdXNoKHZhbHVlcylcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHJldHVybiB7IFxuICAgICAgICBwbGF5ZXIxLFxuICAgICAgICBwbGF5ZXIyLFxuICAgICAgICBwbGF5ZXJfMV9ib2FyZCxcbiAgICAgICAgcGxheWVyXzJfYm9hcmQsXG4gICAgICAgIHBsYXllcjJfaGlzdG9yeSxcbiAgICAgICAgcGxheWVyMV90dXJuLFxuICAgICAgICBwbGF5ZXIyX3R1cm4sXG4gICAgICAgIGNoZWNrTW92ZXMoYXR0YWNrQ29vcmRpbmF0ZXMsIG1vdmVzKXtcbiAgICAgICAgICAgIGxldCBjb250YWlucyA9IG1vdmVzLnNvbWUoaXRlbSA9PiBpdGVtID09PSBhdHRhY2tDb29yZGluYXRlcylcbiAgICAgICAgICAgIHJldHVybiBjb250YWluc1xuICAgICAgICB9LFxuICAgICAgICBjaGVja0hpc3RvcnkoYXR0YWNrQ29vcmRpbmF0ZXMsIHBsYXllckhpc3Rvcnkpe1xuICAgICAgICAgICAgLy8gbGV0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeShhdHRhY2tDb29yZGluYXRlcylcbiAgICAgICAgICAgIGxldCBjb250YWlucyA9IHBsYXllckhpc3Rvcnkuc29tZShlbGUgPT4gZWxlID09PSBhdHRhY2tDb29yZGluYXRlcylcbiAgICAgICAgICAgIHJldHVybiBjb250YWluc1xuXG4gICAgICAgIH0sXG4gICAgICAgIHJlY2lldmVJbnB1dChwbGF5ZXIsIGhpc3Rvcnkpe1xuICAgICAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgICAgIGxldCB2YWxpZF9hbnMgPSBmYWxzZVxuICAgICAgICAgICAgd2hpbGUoIXZhbGlkX2Fucyl7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gcHJvbXB0KHBsYXllci5uYW1lICsgJyBlbnRlciBjb29yZGluYXRlcycpXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja0hpc3RvcnkoaW5wdXQsIGhpc3RvcnkpID09IGZhbHNlICYmIHRoaXMuY2hlY2tNb3ZlcyhpbnB1dCwgdmFsaWRNb3ZlcykgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCd2YWxpZCcpXG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaChpbnB1dClcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRfYW5zID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpbnB1dFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jaGVja0hpc3RvcnkoaW5wdXQsIGhpc3RvcnkpID09IHRydWUgfHwgdGhpcy5jaGVja01vdmVzKGlucHV0LCB2YWxpZE1vdmVzKSA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdtdXN0IG1ha2UgdmFsaWQgbW92ZScpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9LFxuICAgICAgICByZWdpc3RlclR1cm4ocGxheWVyQm9hcmQsIGF0dGFja0lucHV0KXtcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgICAgIGxldCB4ID0gcGFyc2VJbnQoYXR0YWNrSW5wdXRbMV0pO1xuICAgICAgICAgICAgbGV0IHkgPSBwYXJzZUludChhdHRhY2tJbnB1dFszXSk7XG4gICAgICAgICAgICBhcnIucHVzaCh4LCB5KTtcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnJlY2lldmVBdHRhY2soYXJyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllckJvYXJkLmJvYXJkKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgbWFrZU1vdmVzKCl7XG4gICAgICAgICAgICB3aGlsZShnYW1lU3RhcnQgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIGlmKHBsYXllcjFfdHVybiA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXllciAxIHR1cm4nKVxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSB0aGlzLnJlY2lldmVJbnB1dChwbGF5ZXIxLCBwbGF5ZXIyX2hpc3RvcnkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJUdXJuKHBsYXllcl8yX2JvYXJkLCBpbnB1dClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5wdXQpXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjFfdHVybiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjJfdHVybiA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGxheWVyMl90dXJuID09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIDIgdHVybicpXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IHRoaXMucmVjaWV2ZUlucHV0KHBsYXllcjIsIHBsYXllcjFfaGlzdG9yeSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlclR1cm4ocGxheWVyXzFfYm9hcmQsIGlucHV0KVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbnB1dClcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyMl90dXJuID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyMV90dXJuID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVuZEdhbWUocGxheWVyXzFfYm9hcmQsIHBsYXllcl8yX2JvYXJkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbmRHYW1lKHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkKXtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIxQm9hcmQuYWxsU2hpcHNTdW5rID09IHRydWUgfHwgcGxheWVyMkJvYXJkLmFsbFNoaXBzU3VuayA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBnYW1lU3RhcnQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxubGV0IG0gPSBtYWluR2FtZUZ1bmN0aW9uKClcbm0ubWFrZU1vdmVzKClcbmNvbnNvbGUubG9nKG0udmFsaWRNb3ZlcylcblxuXG5cbm1vZHVsZS5leHBvcnRzID0ge3NoaXBGYWN0b3J5LCBnYW1lQm9hcmRGYWN0b3J5LCBwbGF5ZXJGYWN0b3J5LCBhaUZhY3RvcnksIG1haW5HYW1lRnVuY3Rpb259XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==