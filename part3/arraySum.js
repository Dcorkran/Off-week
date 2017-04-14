function arraySum(arraySet) {
  var flatArray = arraySet.map((arr) => {
    if (Array.isArray(arr)) {
      return isArray(arr)
    } else if (Number.isInteger(arr)) {
      return arr;
    }

  })
  return flatArray.reduce((a,b)=>{
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return a+b;
    } else {
      return a + 0;
    }
  },0)
}

//arraySet = [[[[[[[[1]]]]]]]]

function isArray(arraySet){

    if (!Array.isArray(arraySet[0])){
      return arraySet.reduce((a,b)=>{
        if (Number.isInteger(a) && Number.isInteger(b)) {
          return a+b;
        } else {
          return a + 0;
        }
      },0)
     }
     else {
     return isArray(arraySet[0]);
    }
}
