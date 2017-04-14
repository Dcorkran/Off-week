function order(words){
  words = words.split(' ');
  let newWords = [];
  let regEx = /[1-9]/;
  for (var i = 0; i < words.length; i++) {
    newWords[parseInt(words[i].match(regEx)) - 1] = words[i];
  }
  return newWords.join(' ');
}
