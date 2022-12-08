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
            if (this.noOfShips > 0 && this.noOfSuccesfulHits == this.noOfShips){
                console.log('All ships sunk')
            }
        },
        missedHits,
        noOfShips,
        noOfSuccesfulHits
    }
}

let player1 = gameBoardFactory(5)
console.log(player1.recieveAttack([2,2]))




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUFLQSxrQkFBa0I7Ozs7OztVQ25HbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaGlwRmFjdG9yeSA9IChsZW5ndGgsIHN1bmssIG5vT2ZIaXRzKSA9PiB7XG4gICAgXG4gICAgZnVuY3Rpb24gaGl0U2hpcCgpe1xuICAgICAgICB0aGlzLm5vT2ZIaXRzKytcbiAgICAgICAgdGhpcy5pc1N1bmsoKVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyBsZW5ndGgsIFxuICAgICAgICAgICAgIHN1bmssIFxuICAgICAgICAgICAgIG5vT2ZIaXRzLCBcbiAgICAgICAgICAgICBoaXRTaGlwLCBcbiAgICAgICAgICAgICBpc1N1bmsoKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPT0gdGhpcy5ub09mSGl0cyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxufVxuXG5cbmNvbnN0IGdhbWVCb2FyZEZhY3RvcnkgPSAoc2l6ZU9mQm9hcmQpID0+IHtcbiAgIFxuICAgIGxldCBub09mU2hpcHM7XG4gICAgbGV0IG5vT2ZTdWNjZXNmdWxIaXRzOyBcbiAgICBsZXQgbWlzc2VkSGl0cyA9IFtdIFxuICAgIGxldCBib2FyZCA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemVPZkJvYXJkOyBpKyspe1xuICAgIGJvYXJkW2ldID0gW11cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplT2ZCb2FyZDsgaisrKXtcbiAgICAgICAgICAgIGJvYXJkW2ldW2pdID0ge2JveDogW2ksIGpdfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHBsYWNlU2hpcChbeCwgeV0pe1xuICAgICAgICAgICAgLy8gcGxhY2VzIGEgc2hpcCBvYmplY3QgYXQgc3BlY2lmaWVkIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBsZXQgc2hpcF9wbGFjZWQ7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhlc2UgYXJlIHRoZSByb3dzIG9mIGFycmF5cyAnLCByb3cpXG4gICAgICAgICAgICAgICAgcm93LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoZXNlIGFyZSB0aGUgb2JqZWN0cyBpbiByb3dzJywgb2JqKVxuICAgICAgICAgICAgICAgICAgICBpZihvYmouYm94WzBdID09PSB4ICYmIG9iai5ib3hbMV0gPT09IHkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdzaGlwJyBpbiBvYmogPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouc2hpcCA9IHNoaXBGYWN0b3J5KDEsIGZhbHNlLCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iailcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwX3BsYWNlZCA9ICdwbGFjZWQgc2hpcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub09mU2hpcHMrK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmpcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCdzaGlwJyBpbiBvYmogPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBfcGxhY2VkID0gJ2FscmVhZHkgcGxhY2VkIHNoaXAgaGVyZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gc2hpcF9wbGFjZWRcbiAgICAgICAgfSxcbiAgICAgICAgcmVjaWV2ZUF0dGFjayhbeCwgeV0pe1xuICAgICAgICAgICAgbGV0IHN0YXRlO1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgcm93LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5ib3hbMF0gPT09IHggJiYgb2JqLmJveFsxXSA9PT0geSAmJiAnc2hpcCcgaW4gb2JqID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zaGlwLmhpdFNoaXAoKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9PZlN1Y2Nlc2Z1bEhpdHMrK1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBvYmouc2hpcC5ub09mSGl0c1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpdCBzaGlwJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iailcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG9iai5ib3hbMF0gPT09IHggJiYgb2JqLmJveFsxXSA9PT0geSAmJiAnc2hpcCcgaW4gb2JqID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbWlzc2VkIHNoaXAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgbWlzc2VkSGl0cy5wdXNoKFt4LCB5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gbWlzc2VkSGl0c1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmNoZWNrU2hpcFN0YXR1cygpXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tTaGlwU3RhdHVzKCl7XG4gICAgICAgICAgICBpZiAodGhpcy5ub09mU2hpcHMgPiAwICYmIHRoaXMubm9PZlN1Y2Nlc2Z1bEhpdHMgPT0gdGhpcy5ub09mU2hpcHMpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBbGwgc2hpcHMgc3VuaycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1pc3NlZEhpdHMsXG4gICAgICAgIG5vT2ZTaGlwcyxcbiAgICAgICAgbm9PZlN1Y2Nlc2Z1bEhpdHNcbiAgICB9XG59XG5cbmxldCBwbGF5ZXIxID0gZ2FtZUJvYXJkRmFjdG9yeSg1KVxuY29uc29sZS5sb2cocGxheWVyMS5yZWNpZXZlQXR0YWNrKFsyLDJdKSlcblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSB7c2hpcEZhY3RvcnksIGdhbWVCb2FyZEZhY3Rvcnl9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9