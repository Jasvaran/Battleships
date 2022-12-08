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