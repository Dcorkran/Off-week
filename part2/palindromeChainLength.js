var palindromeChainLength = function(n) {
  let done = false
  let i = 0;
  while (!done) {
    if (checkPalindrome(n)) {
      return i;
    } else {
      let reversedN = parseInt(n.toString().split('').reverse().join(''));
      n += reversedN;
      i++;
    }
  }
  function checkPalindrome(int){
    let testInt = parseInt(int.toString().split('').reverse().join(''));
    if (testInt === int) {
      return true;
    } else {
      return false;
    }
  }

};
