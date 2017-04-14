
function findEvenIndex(arr){
  for (let i = 1; i < arr.length; i++) {
    let leftSide = 0;
    for (let j = 0; j < i; j++) {
      leftSide += arr[j];
    }
    let rightSide = 0;
    for (let k = arr.length - 1; k > i; k--) {
      rightSide += arr[k];
    }
    if (leftSide === rightSide) {
      return i;
    }
  }
  return -1;
}
