function nextBigger(n){
  n = n.toString();
  n = n.split('');

  for (var i = n.length - 2, j = 2; i >= 0; i--, j++) {
    var firstArrayPortion = n.slice(0,n.length - j);
    var secondArrayPortion = n.slice(i,n.length);
    var answerArray = [];
    var sortedArray = secondArrayPortion.slice();
    sortedArray.sort(function(a, b) {
      return a - b;
    });
    for (var k = 0; k < sortedArray.length; k++) {
      if (sortedArray[k] > secondArrayPortion[0]) {
        answerArray[0] = sortedArray[k];
        sortedArray.splice(k,1);
        firstArrayPortion = firstArrayPortion.concat(answerArray);
        firstArrayPortion = firstArrayPortion.concat(sortedArray);
        return parseInt(firstArrayPortion.join(''));
      }
    }
  }
  return -1;
}
