var spiralize = function(size) {
  let spiralMatrix = createMatrix(size);

  for (let i = 0, direction = 'right', x = 0, y = 0; i < size; i++) {
    if (direction === 'right') {
      while (spiralMatrix[y][x + 1] === 0) {
        spiralMatrix[y][x] = 1;
        x++;
      }
      spiralMatrix[y][x] = 1;
      direction = changeDirection(direction);
    } else if (direction === 'down') {
      while (spiralMatrix[y + 1][x] != undefined) {
        spiralMatrix[y][x] = 1;
        y++;
      }
      spiralMatrix[y][x] = 1;
      direction = changeDirection(direction);
    } else if (direction === 'left') {
      while (spiralMatrix[y][x - 1] !== undefined) {
        spiralMatrix[y][x] = 1;
        x--;
      }
      spiralMatrix[y][x] = 1;
      direction = changeDirection(direction);
    } else {
      while (spiralMatrix[y - 1][x] !== undefined) {
        spiralMatrix[y][x] = 1;
        y--;
      }
      spiralMatrix[y][x] = 1;
      direction = changeDirection(direction);
    }
  }

  return spiralMatrix;

  function createMatrix(n){
    let matrix = [];
    for (let i = 0; i < n; i++) {
      matrix[i] = [];
      for (let j = 0; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
    return matrix;
  }
  function changeDirection(direction){
    if (direction === 'right') {
      return 'down';
    } else if (direction === 'down') {
      return 'left';
    } else if (direction === 'left') {
      return 'up';
    } else {
      return 'right';
    }
  }

  // function updateMatrix(matrix,direction,x,y){
  //   if (direction === 'right') {
  //     while (matrix[y][x + 1] !== undefined || matrix[y][x + 1] !== 1) {
  //       matrix[y][x] = 1;
  //       x++;
  //     }
  //   }
  // }

};

//  || spiralMatrix[y][x + 1] !== 1
