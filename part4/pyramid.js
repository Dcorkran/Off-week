function pyramid(n){
  for (var i = 1; i <= n; i++) {
    let space = '';
    let x = '';
    for (var j = 0; j < i; j++) {
      x += ' x'
    }
    for (var k = 0; k < n - i; k++) {
      space += ' ';
    }
    console.log(space + x);
  }
}

function pyramid(n){
  let str = '';
  for (var i = 0; i < n; i++) {
    for (var j = n; j > 0; j--) {
      str += j <= i ? 'X ':' ';
    }
    str += '\n'
  }
  return str
}
