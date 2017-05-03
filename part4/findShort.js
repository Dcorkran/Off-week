function findShort(s){
  let shortestLength;
  s = s.split(' ');
  for (var i = 0; i < s.length; i++) {
    if (s[i].length < shortestLength || !shortestLength) {
      shortestLength = s[i].length;
    }
  }
  return shortestLength;
}
