function threes(n){
  while (n > 1) {
    if ((n / 3) % 1 === 0) {
      console.log(n, 0);
      n /= 3;
    } else if (((n - 1) / 3) % 1 === 0) {
      console.log(n, -1);
      n -= 1;
      n /= 3;
    } else {
      console.log(n, 1);
      n += 1;
      n /= 3;
    }
  }
}
