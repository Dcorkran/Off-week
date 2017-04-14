function tribonacci(signature,n){
  var answerArr = [];
  for (var i = 0; i < n; i++) {
    if (i <= 2) {
      answerArr.push(signature[i]);
    } else {
      answerArr.push(answerArr[i - 1] + answerArr[i - 2] + answerArr[i - 3]);
    }
  }
  return answerArr;
}
