function hangman(){
  var guessedLetters = [];
  var wrongGuesses = 5;
  var words = ['xylophone','computer','sushi','skiing','antidisestablishmentarianism'];
  var word = words[Math.floor(Math.random() * 5)];
  var remainingLetters = word.length;
  var answerWord = [];
  for (var i = 0; i < word.length; i++) {
    answerWord[i] = '_';
  }
  while (remainingLetters !== 0 && wrongGuesses !== 0) {
     var guess = prompt('Please guess a letter \n' + answerWord).toLowerCase();
     var alreadyGuessed = false;
     var correctGuess = false;
     guessedLetters.push(guess);
     for (var i = 0; i < guessedLetters.length; i++) {
       if (guess === guessedLetters[i]) {
         alert('You already guessed this letter. Please guess another.')
         alreadyGuessed = true;
       } else {
         guessedLetters.push(guess);
       }
     }
     if (alreadyGuessed === false) {
       for (var i = 0; i < word.length; i++) {
         if (guess === word[i]) {
           answerWord[i] = guess;
           remainingLetters--;
           correctGuess = true;
         }
       }
       if (correctGuess === false) {
         wrongGuesses--;
       }
     }
  }
  if (remainingLetters === 0) {
    alert('Congratulations! You win! The word was ' + word);
  } else {
    alert('Sorry, you lose! The word was ' + word);
  }
}


function hangman(){
  var words = ['xylophone','computer','sushi','skiing','jazz'];
  var word = words[Math.floor(Math.random() * words.length)];
  var currentAnswer = [];
  var lettersNotGuessed = word.length;
  for (var i = 0; i < word.length; i++) {
    currentAnswer[i] = '_';
  }
  while (lettersNotGuessed > 0) {
    var guess = prompt('Please guess a letter \n' + currentAnswer);
    guess = guess.toLowerCase();
    if (guess.length !== 1) {
      alert('Your guess should only be one letter');
    } else {
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          currentAnswer[i] = guess;
          lettersNotGuessed--;
        }
      }
    }
  }
  alert('Congratulations, you win! The word was ' + word);
  console.log(currentAnswer);
}
