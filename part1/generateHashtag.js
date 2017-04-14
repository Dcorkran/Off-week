function generateHashtag (str) {
  var stringArr;
  // if the string is empty or over char count, return false
  if (str.length === 0 || str.length > 140) {
    return false;
  } else {
    // split the string into an array in order to better iterate through and change
    // characters / remove spaces
    stringArr = str.split('');
    // deal with there posibly being a bunch of ' ' at the end of an str.
    // if the while loop sees spaces, it will remove it in prep for the for loop
    while (stringArr[stringArr.length - 1] === ' ') {
      stringArr.splice(stringArr.length - 1,1);
    }
    // If the for loop sees a ' ' in stringArr, it will first capitalize the following
    // letter, and then remove the space
    for (var i = stringArr.length - 1; i > 0; i--) {
      if (stringArr[i] === ' ') {
        stringArr[i + 1] = stringArr[i + 1].toUpperCase();
        stringArr.splice(i,1);
      }
    }
    stringArr.unshift('#');
    stringArr[1] = stringArr[1].toUpperCase();
    return stringArr.join('');
  }
}
