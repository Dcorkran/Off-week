function towerBuilder(nFloors) {
  let answerArr = []
  for (var i = 0; i < nFloors; i++) {
    let spaces = ''
    let stars = '*'
    for (var j = 0; j < nFloors - 1 - i; j++) {
      spaces += ' '
    }
    for (var k = 0; k < i; k++) {
      stars += '**'
    }
    answerArr.push(spaces+stars+spaces)
  }
  return answerArr
}

towerBuilder(4)
