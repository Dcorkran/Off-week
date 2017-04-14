function sortArray(array) {
  if (array.length === 0) {
    return array;
  } else {
    let onlyOddArray = [];
    let onlyEvenArray = array.map((e)=>{
      if (e % 2 === 0) {
        return e;
      } else {
        onlyOddArray.push(e);
        return null;
      }
    })
    onlyOddArray = onlyOddArray.sort((a,b)=>{
      return a - b;
    })
    for (var i = 0, j = 0; i < onlyEvenArray.length; i++) {
      if (onlyEvenArray[i] === null) {
        onlyEvenArray[i] = onlyOddArray[j];
        j++;
      }
    }
    return onlyEvenArray;
  }
}
