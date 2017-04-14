function duplicateCount(text){
  text = text.toLowerCase();
  let answerObj = {};
  let dupSum = 0;
  for (var i = 0; i < text.length; i++) {
    if (answerObj[text[i]]) {
      answerObj[text[i]]++
    } else {
      answerObj[text[i]] = 1;
    }
  }
  for (var key in answerObj) {
    if (answerObj[key] > 1) {
      dupSum++;
    }
  }
  return dupSum
}
