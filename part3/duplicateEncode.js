function duplicateEncode(word){
  word = word.toLowerCase();
  let letterCountObj = {};
  let answerStr = '';
  for (var i = 0; i < word.length; i++) {
    if (letterCountObj[word[i]]) {
      letterCountObj[word[i]]++;
    } else {
      letterCountObj[word[i]] = 1;
    }
  }
  for (var i = 0; i < word.length; i++) {
    if (letterCountObj[word[i]] > 1) {
      answerStr += ')';
    } else {
      answerStr += '(';
    }
  }
  return answerStr;
}
