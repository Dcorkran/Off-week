function pigIt(str){
  let array = str.split(' ');
  array = array.map((str)=>{
    return moveLetters(str);
  });
  return array.join(' ');
  function moveLetters(str){
    return str.substr(1,str.length - 1) + str[0] + 'ay';
  }
}
