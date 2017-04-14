function titleCase(title, minorWords) {
  if (minorWords) {
    let minorWordsArr = minorWords.split(' ');
    return title.split(' ').map((e,i)=>{
      if (i === 0) {
        return makeTitleCase(e);
      } else {
        for (var j = 0; j < minorWordsArr.length; j++) {
          if (e.toLowerCase() === minorWordsArr[j].toLowerCase()) {
            return e.toLowerCase();
          }
        }
        return makeTitleCase(e);
      }
    }).join(' ');
  } else {
    return title.split(' ').map((e,i)=>{
      return makeTitleCase(e);
    }).join(' ');
  }

  function makeTitleCase(word){
    return word.substring(0,1).toUpperCase() + word.substring(1,word.length).toLowerCase();
  }
}
