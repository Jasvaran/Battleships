/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

let a = shipFactory(4, false, 3)
console.log(a)
a.hitShip()
console.log(a)

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2hpcEZhY3RvcnkgPSAobGVuZ3RoLCBzdW5rLCBub09mSGl0cykgPT4ge1xuICAgIFxuICAgIGZ1bmN0aW9uIGhpdFNoaXAoKXtcbiAgICAgICAgdGhpcy5ub09mSGl0cysrXG4gICAgICAgIHRoaXMuaXNTdW5rKClcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgbGVuZ3RoLCBcbiAgICAgICAgICAgICBzdW5rLCBcbiAgICAgICAgICAgICBub09mSGl0cywgXG4gICAgICAgICAgICAgaGl0U2hpcCwgXG4gICAgICAgICAgICAgaXNTdW5rKCl7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09IHRoaXMubm9PZkhpdHMpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbn1cblxubGV0IGEgPSBzaGlwRmFjdG9yeSg0LCBmYWxzZSwgMylcbmNvbnNvbGUubG9nKGEpXG5hLmhpdFNoaXAoKVxuY29uc29sZS5sb2coYSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==