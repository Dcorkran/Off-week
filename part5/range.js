let range = function(start,step,end){
  let answer = [];
  if (arguments.length === 1) {
    for (var i = 1; i <= start; i++) {
      answer.push(i)
    }
    return answer
  } else if (arguments.length === 2) {
    for (var i = start; i <= step; i++) {
      answer.push(i)
    }
    return answer
  } else {
    for (var i = start; i <= end; i++) {
      answer.push(i)
      i += step - 1
    }
    return answer;
  }
};

console.log(range(2,3,15));
var test = 2
console.log(test += 3);
