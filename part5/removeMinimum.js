function removeSmallest(numbers) {
  let obj = {};
  for (var i = 0; i < numbers.length; i++) {
    if (!obj.value || obj.value > numbers[i]) {
      obj.value = numbers[i];
      obj.index = i;
    }
  }
  numbers.splice(obj.index,1);
  return numbers
}
