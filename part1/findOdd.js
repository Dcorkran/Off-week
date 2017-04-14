function findOdd(A) {
  var newObj = {};
  if (A.length === 1) {
    return A[0];
  }
  for (var i = 0; i < A.length; i++) {
    if (newObj[A[i]] === undefined) {
      newObj[A[i]] = 1;
    } else {
      newObj[A[i]]++;
    }
  }
  var randomObjValue = newObj[A[0]];
  var testArr1 = [];
  var testArr2 = [];
  for (var key in newObj) {
    if (newObj[key] === randomObjValue) {
      testArr1.push(key);
    } else {
      testArr2.push(key);
    }
  }
  if (testArr1.length < testArr2.length) {
    return parseInt(testArr1[0]);
  } else {
    return parseInt(testArr2[0]);
  }
}

function findOdd(A){
  // declare new object which we will use to tally the times a number appears
  var newObj = {};
    // if it is the first time a number appears, give it a tally of one
    // if it has already appeared, add one to the tally
    for (var i = 0; i < A.length; i++) {
      if (!newObj[A[i]]) {
        newObj[A[i]] = 1;
      } else {
        newObj[A[i]]++;
      }
    }
    // iterate through the object - when the function finds a number that appears
    // an odd number of times, return it.
    for (var key in newObj) {
      if (newObj[key] % 2 === 1) {
        return parseInt(key);
      }
    }
}
