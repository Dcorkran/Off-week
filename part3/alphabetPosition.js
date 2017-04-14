function alphabetPosition(text) {
  var regEx = /[^a-zA-Z]/g;
  var textArr = text.toLowerCase().replace(regEx,'').split('');
  return textArr.map((letter)=>{
    return String(letter.charCodeAt(0) - 96);
  }).join(' ')
}
