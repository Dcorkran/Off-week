function incrementString (strng) {
  let word = strng.replace(/[0-9]+/g, '');
  let num = strng.replace(/[a-zA-Z]+/g, '').split('');
  let numSum = num.reduce(function(acc, val) {
    return acc + parseInt(val);
  }, 0);
  let keepAdding = true;
  if (num.length === 0 || numSum[i] === 0) {
    num.unshift(1);
  } else {
    for (var i = num.length - 1; i >= 0; i--) {
      if (keepAdding && i === 0 && num.length > 1) {
        num[i] = 0;
        num.unshift(1);
      }
      else if (keepAdding) {
        if (num[i] === '9') {
          num[i] = '0';
        } else {
          num[i] = (parseInt(num[i]) + 1).toString();
          keepAdding = false;
        }
      }
    }
  }
  return word + num.join('');
}
