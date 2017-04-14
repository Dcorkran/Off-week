function shoot(x){
  // declare variable and multiplier sums to be used in loops
  var p1Sum = 0;
  var p2Sum = 0;
  var multiplier = 1;
  // iterate through the array first checking if the boolean is true or false
  // to update the multiplier
  for (var i = 0; i < x.length; i++) {
    // create round score variables to use in order to update the p1 and p2Sums
    var p1Round = 0;
    var p2Round = 0;
    if (x[i][1] === true) {
      multiplier = 2;
    } else {
      multiplier = 1;
    }
    // iterate through the string contained in object checking for X, and add to sum accordingly
    for (var j = 0; j < x[i][0].P1.length; j++) {
      if (x[i][0].P1[j] === 'X') {
        p1Sum += (1 * multiplier);
      }
    }
    for (var j = 0; j < x[i][0].P2.length; j++) {
      if (x[i][0].P2[j] === 'X') {
        p2Sum += (1 * multiplier);
      }
    }
  }
  // Check for win or draw
  if (p1Sum === p2Sum) {
    return 'Draw!'
  } else if (p1Sum > p2Sum) {
    return 'Pete Wins!'
  } else {
    return 'Phil Wins!';
  }
}
