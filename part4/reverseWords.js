function reverseWords(str) {
  return str.split(' ').map(e=>{
    let tempStrArr = []
    for (var i = e.length - 1; i >= 0; i--) {
      tempStrArr.push(e[i]);
    }
    return tempStrArr.join('');
  }).join(' ');
}
