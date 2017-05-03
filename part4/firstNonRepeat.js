function firstNonRepeatingLetter(s) {
  let answerObj = {};
  for (var i = 0; i < s.length; i++) {
    let letter = s[i].toLowerCase();
    if (answerObj[letter]) {
      answerObj[letter]++;
    } else {
      answerObj[letter] = 1;
    }
  }
  for (var i = 0; i < s.length; i++) {
    let letter = s[i].toLowerCase();
    if (answerObj[letter] === 1) {
      return s[i]
    }
  }
  return ''
}
