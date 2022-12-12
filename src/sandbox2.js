takeTurn(playerBoard, history, player){
  let attack = prompt(player.name + ' attack')
  if (this.checkHistory(attack, history) === false){
      let arr = []
      history.push(attack)
      let x = parseInt(attack[1])
      let y = parseInt(attack[3])
      arr.push(x)
      arr.push(y)
      console.log(arr)
      playerBoard.recieveAttack(arr)
      console.log(playerBoard)
  } else {
      console.log('cannot attack same square')
      this.takeTurn(playerBoard, history, player)
  }
},
makeMoves(){
  while(gameStart === true){
      if(player1_turn === true){
          this.takeTurn(player_2_board, player2_history, player1)
          console.log('player 1')
          player1_turn = false
          player2_turn = true
          }
      else if (player2_turn === true){
          this.takeTurn(player_1_board, player1_history, player2)
          console.log('player 2')
          player2_turn = false
          player1_turn = true
      }
      x++
      this.stop()
  }
  return 
},            
recieveInput(){
  let data;
  prompt.start()
  prompt.get(['coordinates'], function(err, result){
      data = result.coordinates
      console.log(' coordinates: ' + result.coordinates)
  })
},
checkWin(){
  if (player_1_board.allShipsSunk === true){
      gameStart = false
  }
  if (player_2_board.allShipsSunk === true){
      gameStart = false
  }
  x++
  this.stop()
},
stop(){
  if(x === 5){
      gameStart = false
  }
}
}
}