function longestConsec(strarr, k) {
  let i = 0;
  let tempStr = "";
  let answerStr = "";
  while (i <= strarr.length - k) {
    for (var j = 0; j < k; j++) {
      tempStr += strarr[i + j];
    }
    if (tempStr.length > answerStr.length) {
      answerStr = tempStr;
    }
    i++;
    tempStr = "";
  }
  return answerStr;
}
