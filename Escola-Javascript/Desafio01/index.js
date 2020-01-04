const matches = "SRRSPSRPPRSSSR";
const games = matches.length/2;

// S = tesoura
// R = pedra
// P = papel
// JOGADA PLAYER A = SRRSPSR
// JOGADA PLAYER B = PPRSSSR

const checkRounds = (playerA, playerB) => {
  const possibleAnswers = {
    RP: 'Player Two Won',
    RS: 'Player One Won',
    PR: 'Player One Won',
    PS: 'Player Two Won',
    SR: 'Player Two Won',
    SP: 'Player One Won',
    tied: 'The game tied'
  }
  return (possibleAnswers[`${playerA}${playerB}`] || possibleAnswers['tied']);
}

for(let i = 0; i < games; i++){
  console.log(checkRounds(matches[i], matches[i+games]));
}