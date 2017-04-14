function rockPaperScissors(){
  var playerChoice, computerChoice;
  playerChoice = prompt('Choose rock, paper, or scissors');
  computerChoice = Math.random();

  if (computerChoice < .333) {
    computerChoice = 'rock';
  } else if (computerChoice >= .333 && computerChoice < .666) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }

  if (playerChoice === computerChoice) {
    alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. Tie Game.')
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. You Win.')
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. You Win.')
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. You Win.')
  } else {
    alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. You Lose.')
  }
}
