function sudoku(puzzle) {
  let numbersAvail = getNumbersAvailable(puzzle);
  let currentPuzzle = guessNumbers(puzzle,numbersAvail);
  // do {
  //   let currentPuzzle = guessNumbers(puzzle,numbersAvail);
  // } while (!checkComplete(currentPuzzle));

  while (!checkComplete(currentPuzzle)) {
    currentPuzzle = guessNumbers(puzzle,numbersAvail);
  }
  console.log(currentPuzzle);
}

function getNumbersAvailable(puzzle){
  let returnObj = {}
  for (var i = 0; i < puzzle.length; i++) {
    returnObj['row'+i] = [1,2,3,4,5,6,7,8,9];
    let currentArr = returnObj['row'+i]
    let sortedPuzzleRow = puzzle[i].slice().sort()
    for (var j = puzzle.length - 1; j >= 0; j--) {
      if (sortedPuzzleRow[j] !== 0) {
        currentArr.splice(sortedPuzzleRow[j] - 1,1);
      }
    }
  }
  return returnObj
}

function guessNumbers(puzzle,availableNumbersObj){
  let newPuzzle = [];
  for (var i = 0; i < puzzle.length; i++) {
    let currentPuzzleRow = puzzle[i].slice();
    let tempAvailNumbers = availableNumbersObj['row'+i].slice();
    for (var j = puzzle.length - 1; j >= 0 ;j--) {
      let randomIndex = Math.floor(Math.random() * tempAvailNumbers.length)
      if (puzzle[i][j] === 0) {
        currentPuzzleRow[j] = tempAvailNumbers[randomIndex];
        tempAvailNumbers.splice(randomIndex,1)
      }
    }
    newPuzzle.push(currentPuzzleRow);
  }
  return newPuzzle;
}

function checkComplete(puzzle){
  for (var i = 0; i < puzzle.length; i++) {
    let sum = 0;
    for (var j = 0; j < puzzle.length; j++) {
      sum += puzzle[j][i]
    }
    if (sum !== 45) {
      return false;
    }
  }
  return true;
}
