function digital_root(n) {
  while (n.toString().length > 1) {
    n = n.toString().split('').reduce((a,b) => {
      return a + parseInt(b)
    },0)
  }
  return n
}


console.log(digital_root(0))
