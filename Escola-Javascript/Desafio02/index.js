const input = [['O', 'O', 'X'],
               ['X', 'O', 'O'],
               ['X', 'X', 'O']];

const checkMatch = (input) => {
  for(let i = 0; i < input.length; i++){
    if(input[i][0] === input[i][1] && input[i][1] === input[i][2]){
      return `O Jogador ${input[i][0]}`;
    }
  }

  for(let i = 0; i < input.length; i++){
    if(input[0][i] === input[1][i] && input[1][i] === input[2][i]){
      return `O Jogador ${input[0][i]} Ganhouuu!!!`;
    }
  }

  if(input[0][0] === input[1][1] && input[1][1] === input[2][2]){
    return `O Jogador ${input[0][0]} Ganhouuu!!!`;
  }

  if(input[0][2] === input[1][1] && input[1][1] === input[2][0]){
    return `O Jogador ${input[0][2]} Ganhouuu!!!`;
  }
}

console.log(checkMatch(input))