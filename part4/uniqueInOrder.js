  var uniqueInOrder=function(iterable){
  typeof iterable === 'string' ? iterable = iterable.split('') : iterable;
  return iterable.filter((e,i,a)=>{
    if (i === 0) {
      return e
    } else {
      if (e !== a[i - 1]) {
        return e;
      }
    }
  })
}
