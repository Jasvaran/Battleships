

let hold = '20'


function consoleInput(query){
  const readline = require('readline')
  var rl = readline.createInterface(process.stdin, process.stdout)
    return new Promise(resolve => {
      rl.question(query, (input) => {
        rl.close()
        resolve(input)
      })
    })
  }


async function getConsoleInput(){
  let x
  let valid_ans = false
  while(!valid_ans){
    let result = await consoleInput('Enter coordinates')
    if (result == hold){
      x = result
      console.log('valid')
      valid_ans = true
    }
  else if (result != hold){
      console.log('must make valid move')
      continue
    }
  }
  return x
}

async function main(){
  let x = await getConsoleInput()
  console.log(x)
}
main()

// module.exports = {consoleInput, getConsoleInput}