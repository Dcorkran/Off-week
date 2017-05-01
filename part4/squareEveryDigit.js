function squareDigits(num){
  num = num.toString();
  return parseInt(num.split('').map(e=>{
    return parseInt(e) * parseInt(e);
  }).join(''))
}
