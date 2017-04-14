function findSenior(list) {
  let answerArr = [];
  list.map(function(obj){
    if (answerArr.length === 0 || answerArr[0].age < obj.age) {
      return answerArr = [obj];
    } else if (answerArr[0].age === obj.age) {
      return answerArr.push(obj);
    }
  })
  return answerArr;
}

function findSenior(list) {
  let answerArr = [];
  list.map(checkAge);
  return answerArr;

  function checkAge(obj){
    if (answerArr.length === 0 || answerArr[0].age < obj.age) {
      return answerArr = [obj];
    } else if (answerArr[0].age === obj.age) {
      return answerArr.push(obj);
    }
  }
}
