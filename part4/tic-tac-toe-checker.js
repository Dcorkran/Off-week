function isSolved(board) {
  let isFinished = true;
  //check left vert
  if (board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[1][0] !== 0) {
    return board[0][0];
  }
  //check mid vert
  if (board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[1][1] !== 0) {
    return board[0][1];
  }
  // check right vert
  if (board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[1][2] !== 0) {
    return board[0][2];
  }
  // check top horizontal
  if (board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][1] !== 0) {
    return board[0][2];
  }
  // check mid horizontal
  if (board[1][0] === board[1][1] && board[1][1] === board[1][2] && board[1][1] !== 0) {
    return board[1][2];
  }
  // check bot horizontal
  if (board[2][0] === board[2][1] && board[2][1] === board[2][2] && board[2][1] !== 0) {
    return board[2][0];
  }
  // check diag horizontal
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1] !== 0) {
    return board[0][0];
  }
  // check diag down
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[1][1] !== 0) {
    return board[0][2];
  }
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      if (board[i][j] === 0) {
        return -1
      }
    }
  }
  return 0
}


function horizontalChecker(board,row){
  for (var i = 1; i < board.length; i++) {
    if (board[row][i] !== board[row][i-1]) {
      return false;
    }
  }
  return board[row][i]
}

function verticalChecker(board,column){
  for (var i = 1; i < board.length; i++) {
    if (board[i][column] !== board[i - 1][column]) {
      return false;
    }
  }
  return board[i][column]
}

function diagonalChecker(board){
  for (var i = 1; i < board.length; i++) {
    if (board[i][column] !== board[i - 1][column]) {
      return false;
    }
  }
  return board[i][column]
}
