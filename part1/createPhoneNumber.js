function createPhoneNumber(numbers){
  // start the phoneNumber variable with ( so it doesn't need to be added in a loop
  var phoneNumber = '(';
  for (var i = 0; i < numbers.length; i++) {
    phoneNumber += numbers[i];
    // the if statement handles the closing ')' and the '-' at appropriate iterations
    if (i === 2) {
      phoneNumber += ') ';
    } else if (i === 5) {
      phoneNumber += '-';
    }
  }
  return phoneNumber;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
