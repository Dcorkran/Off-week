function stockList(listOfArt, listOfCat){
  console.log(listOfArt, listOfCat);
  var answer = "";
  if (listOfCat.length === 0 || listOfArt.length === 0) {
    return answer;
  } else {
    var answerString = '';
    for (var i = 0; i < listOfCat.length; i++) {
      var letter = listOfCat[i];
      var count = 0;
      for (var j = 0; j < listOfArt.length; j++) {
        var intStart = listOfArt[j].indexOf(' ') + 1;
        if (letter === listOfArt[j][0]) {
          count += parseInt(listOfArt[j].substring(intStart,listOfArt[j].length));
        }
      }
      if (i === 0) {
        answerString += `(${letter} : ${count})`;
      } else {
        answerString += ` - (${letter} : ${count})`;
      }
    }
    return answerString;
  }
}
