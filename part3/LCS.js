function LCS(x, y) {
  let answerString = '';
  let innerLoopStart = 0;
  for (var i = 0; i < y.length; i++) {
    for (var j = innerLoopStart; j < x.length; j++) {
      if (y[i] === x[j]) {
        answerString += y[i];
        i++;
        innerLoopStart = j;
      }
    }
  }
  return answerString
}
