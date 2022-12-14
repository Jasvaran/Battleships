// const project = require('../src/index')

// test('if shipFactory returns a ship object', () => {
//     let ship = project.shipFactory(4, false, 0)
//     expect(ship).toMatchObject({
//         length: 4,
//         sunk: false,
//         noOfHits: 0,
//         hitShip: expect.any(Function),
//         isSunk: expect.any(Function)
//       })
// })

// describe('gameBoardFactory Function',
//         () => {
//             it('should return gameboard object', () => {
//                 let board = project.gameBoardFactory(1)
//                 expect(board).toMatchObject({board: [[expect.any(Object)]], placeShip: expect.any(Function)})
//             })

//             it('should place ship at coordinate specified ', () => {
//                 let board = project.gameBoardFactory(1)
//                 expect(board.placeShip([0,0])).toBe('placed ship')
//                 expect(board.placeShip([0,0])).toBe('already placed ship here')
            
//                 expect(board.board[0][0]).toMatchObject(
//                     {
//                         box: [0,0], 
//                         ship: {
//                             length: 1, 
//                             sunk: false, 
//                             noOfHits: 0, 
//                             hitShip: expect.any(Function), 
//                             isSunk: expect.any(Function)}})
//             })

//             test('If ship is already placed at coordinates, return message stating so', () => {
//                 let board = project.gameBoardFactory(5)
//                 board.placeShip([0,2])
//                 expect(board.placeShip([0,2])).toBe('already placed ship here')
//             })

//             test('recieveAttack() should register a hit if a ship is placed at coordinates', () => {
//                 let board = project.gameBoardFactory(1)
//                 board.placeShip([0,0])
//                 expect(board.recieveAttack([0,0])).toBe(1)
//             })

//             test('recieveAttack() should log missed coordinates', () => {
//                 let board = project.gameBoardFactory(1)
//                 expect(board.recieveAttack([0,0])).toStrictEqual([[0,0]])
                
//             })
//     })

// describe('playerFactory Function', () => {
    
//     it('should return a player object', () => {
//         let player1 = project.playerFactory('player 1')
//         expect(player1).toMatchObject(
//             {
//                 name: 'player 1',
//                 winner: false

//         })
//     })
    
// })

// describe('aiFactory function,', () => {
//     it('should return a computer player object', () => {
//         let ai = project.aiFactory('computer')
//         expect(ai).toMatchObject({
//             name: 'computer',
//             winner: false
//         })
//     })

// })

// describe('mainGameFunction', () => {
    
//     it('should return an object with two players, two gameboards', () => {
        
//         let game = project.mainGameFunction()
//         expect(game).toMatchObject(
//             {
//                 player1 : {
//                     name: 'player 1',
//                     winner: false
//                 },

//                 player2: {
//                     name: 'player 2',
//                     winner: false
//                 },

//                 player_1_board: expect.any(Object),
//                 player_2_board: expect.any(Object)
//             }
//         )
//     })

//     test('runGame function should let player attack coordinates', () => {
//         let gameStart = true
//         let player1_turn = true
//         let player2_turn = false
    
//         let player1_history = []
//         let player2_history = []
    
//         let player1 = playerFactory('player 1')
//         let player2 = playerFactory('player 2')
    
//         let player_1_board = gameBoardFactory(2)
//         let player_2_board = gameBoardFactory(2)
//         player_1_board.placeShip([0,0])
//         player_1_board.placeShip([1,1])
//         player_2_board.placeShip([0,1])
//         player_2_board.placeShip([1,0])

        

//     })

//     it('should not proceed if the coordinates have been attacked before')
// })
