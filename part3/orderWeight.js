function orderWeight(str) {
  let arr = str.split(' ');
  return arr.sort((a,b)=>{
    let sum1 = getVal(a);
    let sum2 = getVal(b);
    if (sum1 === sum2) {
      for (var i = 0; i < Math.min(a.length,b.length); i++) {
        if (a[i] < b[i]) {
          return -1;
        } else if (a[i] > b[i]) {
          return 1
        }
      }
      if (a.length < b.length) {
        return -1
      } else if (a.length > b.length) {
        return 1
      } else {
        return 0;
      }
    } else {
      return sum1 - sum2;
    }
  }).join(' ')
  function getVal(str){
    let sum = 0;
    for (var i = 0; i < str.length; i++) {
      sum += parseInt(str[i]);
    }
    return sum;
  }
}
