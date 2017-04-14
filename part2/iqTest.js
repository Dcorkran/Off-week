function iqTest(numbers){
  numbers = numbers.split(' ');
  let evenIndex = [];
  let oddIndex = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenIndex.push(i + 1);
    } else {
      oddIndex.push(i + 1);
    }
  }
  if (evenIndex.length < oddIndex.length) {
    return evenIndex[0];
  } else {
    return oddIndex[0];
  }
}
