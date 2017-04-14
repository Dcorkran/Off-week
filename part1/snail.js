snail = function(array) {
  var n = array.length;
  var direction = 'right';
  var answerArr = [];
  var limit = n;
  var termination = n*n;
  var x = 1;
  var y = 0;
  if (array[0][0] === undefined) {
    return answerArr;
  }
  answerArr[0] = array[0][0];
  limit--;
  limit--;
  for (var i = 1; i < termination; i++) {
    answerArr[i] = array[y][x];
    if (direction === 'right') {
      limit--;
      x++;
      if (limit === 0) {
        n--;
        limit = n;
        direction = 'down';
      }
    } else if (direction === 'down') {
      limit--;
      y++;
      if (limit === 0) {
        limit = n;
        direction = 'left';
      }
    } else if (direction === 'left') {
      limit--;
      x--;
      if (limit === 0) {
        n--;
        limit = n;
        direction = 'up';
      }
    } else {
      limit--;
      y--;
      if (limit === 0) {
        limit = n;
        direction = 'right';
      }
    }
  }
  return answerArr;
};
