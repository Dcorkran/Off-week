function sumStrings(a,b) {
  let answer = [];
  let maxA = a.length - 1;
  let maxB = b.length - 1;
  const CONSTMAX = Math.max(maxA,maxB);
  for (var i = 0; i <= CONSTMAX; i++) {
    if (a[maxA] === undefined) {
      if (answer[i] === undefined) {
        answer[i] = 0;
      }
      answer[i] += parseInt(b[maxB]);
      maxB--;
    } else if (b[maxB] === undefined) {
      if (answer[i] === undefined) {
        answer[i] = 0;
      }
      answer[i] += parseInt(a[maxA]);
      maxA--;
    } else if (a[maxA] === undefined && b[maxB] === undefined){
      return answer.reverse().join('');
    } else {
      if (answer[i] === undefined) {
        answer[i] = 0;
      }
      answer[i] += parseInt(a[maxA]) + parseInt(b[maxB]) % 10;
      if (parseInt(a[maxA]) + parseInt(b[maxB]) >= 10) {
        answer[i + 1] = 1;
      }
      maxA--;
      maxB--;
    }
  }
  return answer.reverse().join('');
}

function sumStrings(a,b) {
  let answer = [];
  for (var i = 0; i < Math.max(a.length,b.length); i++) {
    answer[i] = 0;
  }
  for (let i = 0, aLength = a.length - 1, bLength = b.length - 1; i < answer.length; i++) {
    if (aLength === -1 && bLength === -1) {
      return answer.reverse().join('');
    } else if (bLength === -1) {
      answer[i] += parseInt(a[aLength]);
      aLength--;
    } else if (aLength === -1) {
      answer[i] += parseInt(b[bLength]);
      bLength--;
    } else {
      answer[i] += (parseInt(a[aLength]) + parseInt(b[bLength])) % 10;
      if (parseInt(a[aLength]) + parseInt(b[bLength]) >= 10) {
        answer[i + 1] += 1;
      }
      aLength--;
      bLength--;
    }
  }
  return answer.reverse().join('');
}
