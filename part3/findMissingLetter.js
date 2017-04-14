function findMissingLetter(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].charCodeAt(0) !== array[i+1].charCodeAt(0) - 1) {
      return String.fromCharCode(array[i+1].charCodeAt(0) - 1)
    }
  }
}
