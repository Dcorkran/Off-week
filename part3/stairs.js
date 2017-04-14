

function stairs(n){
  for (var i = 0; i < n; i++) {
    var row = '';
    for (var j = 0; j < n - i; j++) {
      row += ' ';
    }
    for (var k = n; k >= n - i; k--) {
      row += '#';
    }
    console.log(row);
  }
}
