function list(names){
  var newNames = '';
  if (names.length > 1) {
    // if the name array is larger than one we need to add commas after any name that is not the 2nd to last
    newNames += names[0].name;
    for (var i = 1; i < names.length - 1; i++) {
      newNames += ', ' + names[i].name ;
    }
    // the second to last name should use an ampersand
    newNames += ' & ' + names[names.length-1].name;
  }
  // if names.length equals 1, just display the name - no punctuation needed
  else if (names.length === 1) {
    newNames = names[0].name;
  }
  // if names.length is less than one, just return '';
  else {
    return newNames;
  }
  return newNames;
}

list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]);
