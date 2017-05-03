function getCount(str) {
  return str.match(/[AEIOU]/gi) ? str.match(/[AEIOU]/gi).length : 0
}
