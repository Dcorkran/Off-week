function validSolution(board){
  if (validColumnsAndRows(board) && validThreeByThree(board)) {
    return true;
  } else {
    return false;
  }
}

function validColumnsAndRows(board){
  for (var i = 0; i < board.length; i++) {
    let sum = 0;
    for (var j = 0; j < board.length; j++) {
      sum += board[j][i]
    }
    if (sum !== 45) {
      return false;
    }
  }
  return true;
}

function validThreeByThree(board){
  let startingX = 0;
  let startingY = 0;
  for (var i = 1; i < board.length + 1; i++) {
    let sum = 0
    for (var x = startingX; x < startingX + 3; x++) {
      for (var y = startingY; y < startingY + 3; y++) {
        sum += board[x][y]
      }
    }
    if (sum !== 45) {
      return false;
    }
    if (i % 3 === 0) {
      startingX = 0;
      startingY += 3;
    } else {
      startingX += 3;
    }
  }
  return true;
}
