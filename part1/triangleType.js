/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c){
  // put the arguments into an array and sort them from least to greatest
  var sortArr = [a,b,c];
  sortArr.sort(function(x, y) {
    return x - y;
  });
  // if side a + b is less than or equal to the length c, it isn't a ᐃ
  // if side c^2 is greater than a^2 + b^2, it is an obtuse ᐃ
  // if side c^2 is less than a^2 + b^2, it is an acute ᐃ
  // else, it has to be a right triangle
  if (sortArr[0] + sortArr[1] <= sortArr[2]) {
    return 0;
  } else if (Math.pow(sortArr[2],2) > Math.pow(sortArr[0],2) + Math.pow(sortArr[1],2)) {
    return 3;
  } else if (Math.pow(sortArr[2],2) < Math.pow(sortArr[0],2) + Math.pow(sortArr[1],2)) {
    return 1;
  } else {
    return 2;
  }

}

triangleType(2, 4, 6);
