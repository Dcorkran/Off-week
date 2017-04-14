function comp(array1, array2){
  if (!array2) {
    return false
  }
  else if (array1.length === 0 && array2.length === 0) {
    return true
  } else {
    array2 = array2.sort();
    array1 = array1.map((e)=>{
      return e * e;
    }).sort();
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false
      }
    }
    return true;
  }
}
