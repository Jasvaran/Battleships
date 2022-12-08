const project = require('../src/index')

test('if shipFactory returns a ship object', () => {
    let ship = project.shipFactory(4, false, 0)
    expect(ship).toMatchObject({
        length: 4,
        sunk: false,
        noOfHits: 0,
        hitShip: expect.any(Function),
        isSunk: expect.any(Function)
      })
})

describe('gameBoardFactory Function',
        () => {
            it('should return gameboard object', () => {
                let board = project.gameBoardFactory(1)
                expect(board).toMatchObject({board: [[expect.any(Object)]], placeShip: expect.any(Function)})
            })

            it('should place ship at coordinate specified ', () => {
                let board = project.gameBoardFactory(1)
                expect(board.placeShip([0,0])).toBe('placed ship')
                expect(board.placeShip([0,0])).toBe('already placed ship here')
            
                expect(board.board[0][0]).toMatchObject(
                    {
                        box: [0,0], 
                        ship: {
                            length: 1, 
                            sunk: false, 
                            noOfHits: 0, 
                            hitShip: expect.any(Function), 
                            isSunk: expect.any(Function)}})
            })

            test('If ship is already placed at coordinates, return message stating so', () => {
                let board = project.gameBoardFactory(5)
                board.placeShip([0,2])
                expect(board.placeShip([0,2])).toBe('already placed ship here')
            })

            test('recieveAttack() should register a hit if a ship is placed at coordinates', () => {
                let board = project.gameBoardFactory(1)
                board.placeShip([0,0])
                expect(board.recieveAttack([0,0])).toBe(1)
            })

            test('recieveAttack() should log missed coordinates', () => {
                let board = project.gameBoardFactory(1)
                expect(board.recieveAttack([0,0])).toStrictEqual([[0,0]])
                
            })
    })

describe('playerFactory Function', () => {
    
    it('should return a player object', () => {
        let player1 = project.playerFactory('player 1', project.gameBoardFactory(1))
        expect(player1).toMatchObject(
            {
                name: 'player 1',
                winner: false

        })
    })


})


