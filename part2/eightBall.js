function eightBall(){
  var name = prompt('Please enter your name.');
  var answers = ['It is certain.', 'Maybe next time.', 'Try again later.','Not a chance.','Answer unclear','My sources say no.'];
  do {
    console.log(prompt);
    var question = prompt('Welcome ' + name + '. What is your question?');
    if (question === null) {
      break;
    } else {
      var answer = answers[Math.floor(Math.random() * answers.length)];
      alert('The question was: ' + question +'\n' + 'The magic 8-ball says: ' + answer);
    }
  } while (question !== null);
}
