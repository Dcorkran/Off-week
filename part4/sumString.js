function sumStrings(a,b){
  var longerArr, shorterArr;
  a.length > b.length ? (longerArr = a.split(''), shorterArr = b.split('')): (longerArr = b.split(''), shorterArr = a.split(''));
  for (var shorti = shorterArr.length - 1, longi = longerArr.length - 1; shorti >= 0; shorti--, longi--) {
    let currentSum = stringMath(longerArr[longi],shorterArr[shorti]);
    if (currentSum.length > 1) {
      longerArr[longi] = currentSum[1];
      if (!longerArr[longi - 1]) {
        longerArr.unshift('1')
      } else {
        longerArr[longi - 1] = (parseInt(longerArr[longi - 1]) + 1).toString();
      }
      let j = longi - 2;
      while (longerArr[j] && longerArr[j].length > 1) {
        longerArr[j] = currentSum[1];
        longerArr[j - 1] = (parseInt(longerArr[j]) + 1).toString();
        j--;
      }
    } else {
      longerArr[longi] = currentSum;
    }
  }
  longerArr = longerArr.join('');
  return longerArr[0] === '0' ? longerArr.substring(1): longerArr
}

function stringMath(num1,num2){
  let sum = parseInt(num1) + parseInt(num2);
  return sum.toString();
}
