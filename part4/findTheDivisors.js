function divisors(integer) {
  let arr = [];
  for (var i = 2; i <= Math.ceil(integer / 2); i++) {
    if ((integer / i) % 1 === 0) {
      arr.push(i);
    }
  }
  return arr.length === 0 ? `${integer} is prime` : arr;
};
