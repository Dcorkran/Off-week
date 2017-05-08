function mix(s1, s2) {
  var lowerRegEx = /[a-z]/g
  s1 = s1.match(lowerRegEx);
  s2 = s2.match(lowerRegEx);
  let s1Obj = countLetters(s1);
  let s2Obj = countLetters(s2);
  console.log(s1Obj, s2Obj);
  let newObj = compareObjects(s1Obj,s2Obj)
  console.log(newObj);
  let shapedArr = formatArray(newObj);
  console.log(shapedArr);
}

function countLetters(charArray){
  let answerObj = {}
  for (var i = 0; i < charArray.length; i++) {
    let letter = charArray[i];
    if (answerObj[letter]) {
      answerObj[letter]++;
    } else {
      answerObj[letter] = 1;
    }
  }
  return answerObj;
}

function compareObjects(obj1, obj2){
  let answerObj = {};
  for (var key in obj1) {
    if (obj1[key] > 1) {
      answerObj[key] = {
        obj:'1',
        value:key.repeat(obj1[key])
      }
    }
  }
  for (var key in obj2) {
    if (obj2[key] > 1) {
      if (!answerObj[key]) {
        answerObj[key] = {
          obj:'2',
          value:key.repeat(obj2[key])
        }
      } else if (answerObj[key].value.length === obj2[key]) {
        answerObj[key].obj = '='
      } else if (answerObj[key].value.length < obj2[key]) {
        answerObj[key] = {
          obj:'2',
          value:key.repeat(obj2[key])
        }
      }
    }
  }
  return answerObj;
}

function formatArray(object){
  let answerArr = [];
  for (var key in object) {
    answerArr.push(object[key]);
  }
  answerArr.sort((a,b)=>{
    return a.value.length - b.value.length;
  })
  return answerArr;
}
