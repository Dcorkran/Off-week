
function isRubyComing(list) {
  let languageIsRuby = false;
  list.forEach((person)=>{
    if (person.language === 'Ruby') {
      languageIsRuby = true;
      return languageIsRuby;
    }
  });
  if (languageIsRuby) {
    return true;
  } else {
    return false;
  }
}

function isRubyComing(list){
  return list.some((element)=>{element.language === 'Ruby'});
}
