// function zeros (n) {
//   console.log(n);
//   var answerSum = 1;
//   var zeroCount = 0;
//   var moduloCount = 1;
//   for (var i = 2; i < n + 1; i++) {
//     answerSum *= i;
//   }
//   for (var i = answerSum; i > 0; i--) {
//     if (answerSum % moduloCount === 0) {
//       zeroCount++;
//       moduloCount *= 10;
//     } else {
//       zeroCount--;
//       return zeroCount;
//     }
//   }
//
// }
//   console.log(answerSum.toFixed(2));
//   answerSum = answerSum.toString();
//
//   var newArr = answerSum.split('');
//   var zeroCount = 0;
//   var largeNum = '';
//   // console.log(newArr);
//   if (newArr[newArr.length - 3] === '+') {
//     largeNum += newArr[newArr.length - 2];
//     largeNum += newArr[newArr.length - 1];
//     return parseInt(largeNum);
//   } else {
//     for (var i = newArr.length - 1; i > 0; i--) {
//         if (newArr[i] === '0') {
//           zeroCount++;
//         } else {
//           return zeroCount;
//         }
//     }
//     return zeroCount;
//   }
// }

function zeros(n){
  // this answer uses the formula on this page to determine the equation used
  // https://en.wikipedia.org/wiki/Trailing_zero
  var factorial = 5;
  var answer = 0;
  while (factorial < n) {
    answer += Math.floor(n/factorial);
    factorial *= 5;
  }
  return answer;
}
