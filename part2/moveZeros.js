
var moveZeros = function (arr) {
  let zeroArr = [];
  function removeZeros(value){
    if (value === 0) {
      zeroArr.push(value);
    }
    return value !== 0;
  }
  let answerArr = arr.filter(removeZeros);
  return answerArr.concat(zeroArr);
}
