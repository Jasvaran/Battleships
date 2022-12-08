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
   
   let noOfShips;
   let noOfSuccesfulHits; 
   let missedHits = [] 
   let board = []
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
            if (this.noOfSuccesfulHits == this.noOfShips){
                console.log('All ships sunk')
            }
        },
        missedHits,
        noOfShips,
        noOfSuccesfulHits
    }
}

let player1 = gameBoardFactory(1)
player1.placeShip([0,0])
player1.recieveAttack([0,0])



module.exports = {shipFactory, gameBoardFactory}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBLG9CQUFvQixpQkFBaUI7QUFDckMsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQSxrQkFBa0I7Ozs7OztVQ3JHbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaGlwRmFjdG9yeSA9IChsZW5ndGgsIHN1bmssIG5vT2ZIaXRzKSA9PiB7XG4gICAgXG4gICAgZnVuY3Rpb24gaGl0U2hpcCgpe1xuICAgICAgICB0aGlzLm5vT2ZIaXRzKytcbiAgICAgICAgdGhpcy5pc1N1bmsoKVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyBsZW5ndGgsIFxuICAgICAgICAgICAgIHN1bmssIFxuICAgICAgICAgICAgIG5vT2ZIaXRzLCBcbiAgICAgICAgICAgICBoaXRTaGlwLCBcbiAgICAgICAgICAgICBpc1N1bmsoKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPT0gdGhpcy5ub09mSGl0cyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxufVxuXG5cbmNvbnN0IGdhbWVCb2FyZEZhY3RvcnkgPSAoc2l6ZU9mQm9hcmQpID0+IHtcbiAgIFxuICAgbGV0IG5vT2ZTaGlwcztcbiAgIGxldCBub09mU3VjY2VzZnVsSGl0czsgXG4gICBsZXQgbWlzc2VkSGl0cyA9IFtdIFxuICAgbGV0IGJvYXJkID0gW11cbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZU9mQm9hcmQ7IGkrKyl7XG4gICAgYm9hcmRbaV0gPSBbXVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZU9mQm9hcmQ7IGorKyl7XG4gICAgICAgIGJvYXJkW2ldW2pdID0ge2JveDogW2ksIGpdfVxuICAgIH1cbiAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLFxuXG4gICAgICAgIHBsYWNlU2hpcChbeCwgeV0pe1xuICAgICAgICAgICAgLy8gcGxhY2VzIGEgc2hpcCBvYmplY3QgYXQgc3BlY2lmaWVkIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBsZXQgc2hpcF9wbGFjZWQ7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhlc2UgYXJlIHRoZSByb3dzIG9mIGFycmF5cyAnLCByb3cpXG4gICAgICAgICAgICAgICAgcm93LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoZXNlIGFyZSB0aGUgb2JqZWN0cyBpbiByb3dzJywgb2JqKVxuICAgICAgICAgICAgICAgICAgICBpZihvYmouYm94WzBdID09PSB4ICYmIG9iai5ib3hbMV0gPT09IHkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdzaGlwJyBpbiBvYmogPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouc2hpcCA9IHNoaXBGYWN0b3J5KDEsIGZhbHNlLCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iailcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwX3BsYWNlZCA9ICdwbGFjZWQgc2hpcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub09mU2hpcHMrK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmpcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCdzaGlwJyBpbiBvYmogPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBfcGxhY2VkID0gJ2FscmVhZHkgcGxhY2VkIHNoaXAgaGVyZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gc2hpcF9wbGFjZWRcbiAgICAgICAgfSxcblxuICAgICAgICByZWNpZXZlQXR0YWNrKFt4LCB5XSl7XG4gICAgICAgICAgICBsZXQgc3RhdGU7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICByb3cuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmJveFswXSA9PT0geCAmJiBvYmouYm94WzFdID09PSB5ICYmICdzaGlwJyBpbiBvYmogPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnNoaXAuaGl0U2hpcCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBub09mU3VjY2VzZnVsSGl0cysrXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IG9iai5zaGlwLm5vT2ZIaXRzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGl0IHNoaXAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2JqKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYob2JqLmJveFswXSA9PT0geCAmJiBvYmouYm94WzFdID09PSB5ICYmICdzaGlwJyBpbiBvYmogPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtaXNzZWQgc2hpcCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBtaXNzZWRIaXRzLnB1c2goW3gsIHldKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBtaXNzZWRIaXRzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTaGlwU3RhdHVzKClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgICB9LFxuXG4gICAgICAgIGNoZWNrU2hpcFN0YXR1cygpe1xuICAgICAgICAgICAgaWYgKHRoaXMubm9PZlN1Y2Nlc2Z1bEhpdHMgPT0gdGhpcy5ub09mU2hpcHMpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBbGwgc2hpcHMgc3VuaycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1pc3NlZEhpdHMsXG4gICAgICAgIG5vT2ZTaGlwcyxcbiAgICAgICAgbm9PZlN1Y2Nlc2Z1bEhpdHNcbiAgICB9XG59XG5cbmxldCBwbGF5ZXIxID0gZ2FtZUJvYXJkRmFjdG9yeSgxKVxucGxheWVyMS5wbGFjZVNoaXAoWzAsMF0pXG5wbGF5ZXIxLnJlY2lldmVBdHRhY2soWzAsMF0pXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtzaGlwRmFjdG9yeSwgZ2FtZUJvYXJkRmFjdG9yeX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=