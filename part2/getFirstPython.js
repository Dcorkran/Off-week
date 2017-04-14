function getFirstPython(list) {
  return list.find(function(element){
    if (element.language === 'Python') {
      return `${element.firstName}, ${element.country}`;
    }
  });

}


function getFirstPython(list) {
  var answer = list.find(function(element){
    return element.language === 'Python';
  });
  if (answer) {
    return `${answer.firstName}, ${answer.country}`;
  } else {
    return `There will be no Python developers`;
  }

}
