function persistence(num) {
   let n = 0;
   let multipliedDigits = 0;
   while (num.toString().split('').length > 1) {
     let stringNum = num.toString().split('');
     multipliedDigits = parseInt(stringNum[0])
     for (var i = 1; i < stringNum.length; i++) {
       multipliedDigits *= parseInt(stringNum[i]);
     }
     n++;
     num = multipliedDigits;
   }
  return n;
}
