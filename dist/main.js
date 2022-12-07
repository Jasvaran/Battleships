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
            this.board.forEach(row => {
                row.forEach(obj => {
                    if(obj.box[0] === x && obj.box[1] === y){
                        obj.ship = shipFactory(1, false, 0)
                        console.log(obj)
                        return obj
                    }
                })
            })
        }
    }
}

let player1 = gameBoardFactory(5)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBLG9CQUFvQixpQkFBaUI7QUFDckMsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQjs7Ozs7O1VDakRsQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCwgc3Vuaywgbm9PZkhpdHMpID0+IHtcbiAgICBcbiAgICBmdW5jdGlvbiBoaXRTaGlwKCl7XG4gICAgICAgIHRoaXMubm9PZkhpdHMrK1xuICAgICAgICB0aGlzLmlzU3VuaygpXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7IGxlbmd0aCwgXG4gICAgICAgICAgICAgc3VuaywgXG4gICAgICAgICAgICAgbm9PZkhpdHMsIFxuICAgICAgICAgICAgIGhpdFNoaXAsIFxuICAgICAgICAgICAgIGlzU3Vuaygpe1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PSB0aGlzLm5vT2ZIaXRzKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG59XG5cblxuY29uc3QgZ2FtZUJvYXJkRmFjdG9yeSA9IChzaXplT2ZCb2FyZCkgPT4ge1xuIFxuICAgbGV0IGJvYXJkID0gW11cbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZU9mQm9hcmQ7IGkrKyl7XG4gICAgYm9hcmRbaV0gPSBbXVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZU9mQm9hcmQ7IGorKyl7XG4gICAgICAgIGJvYXJkW2ldW2pdID0ge2JveDogW2ksIGpdfVxuICAgIH1cbiAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLFxuICAgICAgICBwbGFjZVNoaXAoW3gsIHldKXtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgICAgIHJvdy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKG9iai5ib3hbMF0gPT09IHggJiYgb2JqLmJveFsxXSA9PT0geSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouc2hpcCA9IHNoaXBGYWN0b3J5KDEsIGZhbHNlLCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2JqKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCBwbGF5ZXIxID0gZ2FtZUJvYXJkRmFjdG9yeSg1KVxucGxheWVyMS5wbGFjZVNoaXAoWzAsMF0pXG5cbm1vZHVsZS5leHBvcnRzID0ge3NoaXBGYWN0b3J5LCBnYW1lQm9hcmRGYWN0b3J5fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==