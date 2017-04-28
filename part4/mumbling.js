function accum(s) {
	s = s.split('').map((e,i)=>{
    let accumWord = e.toUpperCase();
    for (var j = 1; j <= i; j++) {
      accumWord += e.toLowerCase();
    }
    return accumWord + '-';
  }).join('');
  return s.substring(0,s.length - 2)
}
