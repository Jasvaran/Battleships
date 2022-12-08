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

            it('If ship is already placed at coordinates, return message stating so', () => {
                let board = project.gameBoardFactory(1)
                board.placeShip([0,0])
                expect(board.placeShip([0,0])).toBe('already placed ship here')
            })

    })

