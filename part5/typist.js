function typist(s){
  let sum = 0;
  for (var i = 0; i < s.length; i++) {
    if (i === 0 && s[i].toUpperCase() === s[i]) {
      sum = 2;
    } else if (i === 0) {
      sum = 1;
    } else {
      sum++;
      if (i !== s.length - 1 && !sameCase(s[i - 1], s[i])) {
        sum = sum + 2;
      }
    }
  }
  return s[s.length - 1] === s[s.length - 1].toUpperCase() ? sum - 2 : sum - 1
}

function sameCase(s1,s2){
  if (s1.toUpperCase === s1 && s2.toUpperCase() === s2) {
    return true;
  } else if (s1.toLowerCase() === s1 && s2.toLowerCase() === s2) {
    return true;
  } else {
    return false;
  }
}
