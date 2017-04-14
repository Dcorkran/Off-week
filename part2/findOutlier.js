
function findOutlier(integers){
  let oddOrEven = {
    odd:0,
    even:0
  };
  for (var i = 0; i < 3; i++) {
    if (integers[i] % 2 === 1 || integers[i] % 2 === -1) {
      oddOrEven.odd++;
    } else {
      oddOrEven.even++;
    }
  }
  for (var i = 0; i < integers.length; i++) {
    if (oddOrEven.even > oddOrEven.odd) {
      if (integers[i] % 2 === 1 ||integers[i] % 2 === -1) {
        return integers[i];
      }
    } else {
      if (integers[i] % 2 === 0 ||integers[i] % 2 === -0) {
        return integers[i];
      }
    }
  }
}
