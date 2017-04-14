function zip(arr1, arr2){
  var maxArrLength = Math.max(arr1.length, arr2.length);
  var answerArray = [];
  for (var i = 0; i < maxArrLength; i++) {
    if (arr1[i]) {
      answerArray.push(arr1[i]);
    }
    if (arr2[i]) {
      answerArray.push(arr2[i]);
    }
  }
  return answerArray;
}
