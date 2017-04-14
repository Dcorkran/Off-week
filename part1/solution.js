function solution(digits){
  // the input will be a string, so first we split it into an array
  var newArr = digits.split('');
  // largestNum variable used to track the overall largest number while iterating
  var largestNum = 0;
  // at each loop iteration, it takes the current index through four above the current index
  // to seee if it is a larger number than previously seen
  for (var i = 0; i < newArr.length - 4; i++) {
    var thisFiveNumbers = newArr[i] + newArr[i + 1] + newArr[i + 2] + newArr[i + 3] + newArr[i + 4];
    if (parseInt(thisFiveNumbers) > largestNum) {
      largestNum = parseInt(thisFiveNumbers);
    }
  }
  return largestNum;
}


function solution(number){
  let sumOfThreeOrFive = 0;
  for (var i = 0; i < number; i++) {
    if (i % 3 === 0) {
      sumOfThreeOrFive += i;
    } else if (i % 5 === 0) {
      sumOfThreeOrFive += i;
    }
  }
  return sumOfThreeOrFive;
}
