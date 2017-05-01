var isSquare = function(n){
  for (var i = 0; i <= Math.floor(n/2); i++) {
    if (Math.pow(i,2) === n || n === 0 || n === 1) {
      return true;
    }
  }
  return false
}
