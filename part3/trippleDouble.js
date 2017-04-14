function tripledouble(num1, num2) {
  num1=num1.toString();
  num2=num2.toString();
  for (var i = 1, inARow = 1; i < num1.length; i++) {
    if (num1[i] === num1[i - 1]) {
      inARow++;
    } else {
      inARow = 1;
    }
    if (inARow >= 3) {
      for (var i = 0, inARow = 1; i < num2.length; i++) {
        if (num2[i] === num2[i - 1]) {
          inARow++;
        } else {
          inARow = 1;
        }
        if (inARow >= 2) {
          return 1
        }
      }
    }
  }
  return 0;
}
