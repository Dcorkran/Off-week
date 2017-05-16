function censorThis(text, forbiddenWords) {
  return text.split(' ').map(e=>{
    for (var i = 0; i < forbiddenWords.length; i++) {
      if (e.toLowerCase() === forbiddenWords[i]) {
        return replaceChar(e);
      }
    }
    return e;
  }).join(' ');
}

function replaceChar(word){
  let censoredWord = '';
  for (var i = 0; i < word.length; i++) {
    censoredWord += '*';
  }
  return censoredWord;
}
