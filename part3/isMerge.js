function isMerge(s, part1, part2) {
  if (part1.length + part2.length !== s.length) {
    return false;
  }
  part1 = part1.split('');
  part2 = part2.split('');
  for (var i = 0; i < s.length; i++) {
    if (s[i] === part1[0]) {
      part1.shift();
    } else if (s[i] === part2[0]) {
      part2.shift();
    } else {
      return false;
    }
  }
  return true;
}
