function smallest(n) {
  let answerArr = [];
  let smallestInt;
  nString = n.toString();
  for (var i = 0; i < nString.length; i++) {
    if (!smallestInt || parseInt(nString[i]) < smallestInt) {
      smallestInt = parseInt(nString[i]);
      answerArr[1] = i;
    }
  }
  for (var j = 0; j < nString.length; j++) {
    if (parseInt(nString[j]) > smallestInt) {
      answerArr[2] = j;
      let tempInt = parseInt(nString[j]);

    }
  }
}

function switchString(string,posLarge,posSmall){
  let temp = string[]
}

function smallest(n){
  nString = n.toString();
  for (var i = 0; i < nString.length; i++) {
    let pos1 = parseInt(nString[i]);
    let pos2;
    for (var j = i + 1; j < nString.length; j++) {
      if (!pos2 || parseInt(nString[j]) < parseInt(nString[pos2])) {
        pos2 = j;
      }
    }
    if (parseInt(nString[i]) > parseInt(nString[pos2])) {
      return [switchNumbers(nString,i,pos2),pos2,i]
    }
  }
  return [n,0,0];
}

function switchNumbers(n,pos1,pos2){
  let largerNumber = n[pos1];
  let smallerNumber = n[pos2];
  return parseInt(n.substring(0,pos1) + smallerNumber + n.substring(pos1,pos2) + n.substring(pos2 + 1))
}
