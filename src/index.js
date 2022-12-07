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
console.log(player1.board[0][0])

module.exports = {shipFactory, gameBoardFactory}