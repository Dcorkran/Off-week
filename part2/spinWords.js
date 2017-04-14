
function spinWords(str){
  let splitStr = str.split(' ');
  return splitStr.map(reverseShort).join(' ');
  function reverseShort(value){
    if (value.length >= 5) {
      return value.split('').reverse().join('');
    } else {
      return value;
    }
  }
}
