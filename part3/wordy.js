function wordy(str){
  var re = /by |\?/g;
  str = str.replace(re, '');
  var splitStrArr = str.split(' ');
  splitStrArr.shift();
  splitStrArr.shift();
  var numArr = [];
  var opArr = [];

  for (var i = 0; i < splitStrArr.length; i++) {
    if (i % 2 === 0) {
      numArr.push(splitStrArr[i]);
    } else {
      opArr.push(splitStrArr[i]);
    }
  }
  for (var i = 0; i < opArr.length; i++) {
    if (opArr[i] === 'plus') {
      numArr[i + 1] = parseInt(numArr[i]) + parseInt(numArr[i + 1]);
    } else if (opArr[i] === 'minus') {
      numArr[i + 1] = parseInt(numArr[i]) - parseInt(numArr[i + 1]);
    } else if (opArr[i] === 'divided') {
      numArr[i + 1] = parseInt(numArr[i]) / parseInt(numArr[i + 1]);
    } else {
      numArr[i + 1] = parseInt(numArr[i]) * parseInt(numArr[i + 1]);
    }
  }
  return numArr[numArr.length - 1];
}
