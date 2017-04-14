function isPrime(num){
  if (num === 0 || num === 1 || num === -1) {
    return false;
  } else if (num > 0) {
    for (var i = num - 1; i > 1 ;i--) {
      if ((num / i) % 1 === 0) {
        return false;
      }
    }
    return true;
  } else {
    for (var i = num + 1; i < -1 ;i++) {
      if ((num / i) % 1 === 0) {
        return false;
      }
    }
    return true;
  }
}
