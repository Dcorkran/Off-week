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
