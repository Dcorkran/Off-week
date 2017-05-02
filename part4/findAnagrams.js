function anagrams(word, words) {
  let answerArr = [];
  word = word.split('').sort().join('');
  return words.filter(e=>anagramChecker(word,e))

  function anagramChecker(word1,word2){
    if (word1.length !== word2.length) {
      return false;
    } else {
      word2 = word2.split('').sort().join('');
      if (word1 === word2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
