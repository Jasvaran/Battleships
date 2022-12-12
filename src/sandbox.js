let arr = [
    [0,0],[0,1],
    [1,0],[1,1]
]
let x = []
let input = '[1,1]'

for(let i = 0; i < arr.length; i++){
   let y = JSON.stringify(arr[i])
   x.push(y)
}

// console.log(x.some(ele => ele === input))

// let contains = arr.some(ele => {
//     console.log(ele)
//     JSON.stringify(ele) === x})
// console.log(contains)



let gb = {
    board: [
        [{box: [0,0]}, {box: [0,1]}],
        [{box: [1,0]}, {box: [1,1]}]
    ]
}


let boardCoordinates = []

for (let i = 0; i < gb.board.length; i++){
    gb.board[i].forEach(obj => {
        let values = JSON.stringify(obj.box)
        boardCoordinates.push(values)
    })
}


let pastMoves = []
let attack = '[0,0]'
let possibleMoves = ['[0,0]', '[0,1]', '[1,0]', '[1,1]']
function checkHistory(attackCoordinates, playerHistory){
    // let item = JSON.stringify(attackCoordinates)
            
    let contains = playerHistory.some(ele => ele === attackCoordinates)
    return contains
}

function checkMoves(attackCoordinates, moves){
    let contains = moves.some(move => move === attackCoordinates)
    return contains

}
function recieveInput(){
    let valid_ans = false
    while (!valid_ans){
        let input = prompt('enter coordinates')

        if (checkHistory(input, pastMoves) == false && checkMoves(input, possibleMoves) == true){
            alert('valid')
            valid_ans = true
            return input
        }
        else if (checkHistory(input, pastMoves) == true || checkMoves(input, possibleMoves) == false){
            console.log('must make valid move')
            continue
        }
    }
}

console.log(checkHistory(attack, pastMoves))
console.log(checkMoves(attack, possibleMoves))
