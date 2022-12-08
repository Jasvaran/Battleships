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

            let ship_placed;
            this.board.forEach(row => {
                console.log('these are the rows of arrays ', row)
                row.forEach(obj => {
                    console.log('these are the objects in rows', obj)
                    if(obj.box[0] === x && obj.box[1] === y){
                        if ('ship' in obj === false){
                            obj.ship = shipFactory(1, false, 0)
                            console.log(obj)
                            ship_placed = 'placed ship'
                            return obj
                        }
                        else if ('ship' in obj === true){
                            ship_placed = 'already placed ship here'
                            return console.log('ship already placed here')
                        }
                        
                    }
                })
            })
            return ship_placed
        },

        
    }
}

let player1 = gameBoardFactory(1)
console.log(player1)
player1.placeShip([0,0])
console.log(player1)
player1.placeShip([0,0])





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBLG9CQUFvQixpQkFBaUI7QUFDckMsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUEsa0JBQWtCOzs7Ozs7VUN4RWxCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2hpcEZhY3RvcnkgPSAobGVuZ3RoLCBzdW5rLCBub09mSGl0cykgPT4ge1xuICAgIFxuICAgIGZ1bmN0aW9uIGhpdFNoaXAoKXtcbiAgICAgICAgdGhpcy5ub09mSGl0cysrXG4gICAgICAgIHRoaXMuaXNTdW5rKClcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgbGVuZ3RoLCBcbiAgICAgICAgICAgICBzdW5rLCBcbiAgICAgICAgICAgICBub09mSGl0cywgXG4gICAgICAgICAgICAgaGl0U2hpcCwgXG4gICAgICAgICAgICAgaXNTdW5rKCl7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09IHRoaXMubm9PZkhpdHMpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbn1cblxuXG5jb25zdCBnYW1lQm9hcmRGYWN0b3J5ID0gKHNpemVPZkJvYXJkKSA9PiB7XG4gXG4gICBsZXQgYm9hcmQgPSBbXVxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplT2ZCb2FyZDsgaSsrKXtcbiAgICBib2FyZFtpXSA9IFtdXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplT2ZCb2FyZDsgaisrKXtcbiAgICAgICAgYm9hcmRbaV1bal0gPSB7Ym94OiBbaSwgal19XG4gICAgfVxuICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQsXG5cbiAgICAgICAgcGxhY2VTaGlwKFt4LCB5XSl7XG5cbiAgICAgICAgICAgIGxldCBzaGlwX3BsYWNlZDtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGVzZSBhcmUgdGhlIHJvd3Mgb2YgYXJyYXlzICcsIHJvdylcbiAgICAgICAgICAgICAgICByb3cuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhlc2UgYXJlIHRoZSBvYmplY3RzIGluIHJvd3MnLCBvYmopXG4gICAgICAgICAgICAgICAgICAgIGlmKG9iai5ib3hbMF0gPT09IHggJiYgb2JqLmJveFsxXSA9PT0geSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ3NoaXAnIGluIG9iaiA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zaGlwID0gc2hpcEZhY3RvcnkoMSwgZmFsc2UsIDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2JqKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBfcGxhY2VkID0gJ3BsYWNlZCBzaGlwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmpcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCdzaGlwJyBpbiBvYmogPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBfcGxhY2VkID0gJ2FscmVhZHkgcGxhY2VkIHNoaXAgaGVyZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ3NoaXAgYWxyZWFkeSBwbGFjZWQgaGVyZScpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHNoaXBfcGxhY2VkXG4gICAgICAgIH0sXG5cbiAgICAgICAgXG4gICAgfVxufVxuXG5sZXQgcGxheWVyMSA9IGdhbWVCb2FyZEZhY3RvcnkoMSlcbmNvbnNvbGUubG9nKHBsYXllcjEpXG5wbGF5ZXIxLnBsYWNlU2hpcChbMCwwXSlcbmNvbnNvbGUubG9nKHBsYXllcjEpXG5wbGF5ZXIxLnBsYWNlU2hpcChbMCwwXSlcblxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtzaGlwRmFjdG9yeSwgZ2FtZUJvYXJkRmFjdG9yeX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=