function songDecoder(song){
  // replace all instances of WUB or combined WUBs (WUBWUB) with ' '
  var newSong = song.replace(/(WUB)+/ig, ' ');
  // if there is a ' ' at the beginning or end, remove it.
  if (newSong.charAt(0) === ' ') {
    newSong = newSong.substring(1, newSong.length);
  }
  if (newSong.charAt(newSong.length - 1) === ' ') {
    newSong = newSong.substring(0, newSong.length - 1);
  }
  return newSong;
}

songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")


function goodVsEvil(good, evil){
  // split the string into an array at each space
  good = good.split(' ');
  // create the Sum used to tally the sum
  // I'm sure a clever for loop would have been better here, but I felt this was easier
  // to read than having a for loop with some if statements to change the multiplier
  var goodSum = 0;
  goodSum += (parseInt(good[0]) * 1);
  goodSum += (parseInt(good[1]) * 2);
  goodSum += (parseInt(good[2]) * 3);
  goodSum += (parseInt(good[3]) * 3);
  goodSum += (parseInt(good[4]) * 4);
  goodSum += (parseInt(good[5]) * 10);


  evil = evil.split(' ');
  // same process as good
  var evilSum = 0;
  evilSum += (parseInt(evil[0]) * 1);
  evilSum += (parseInt(evil[1]) * 2);
  evilSum += (parseInt(evil[2]) * 2);
  evilSum += (parseInt(evil[3]) * 2);
  evilSum += (parseInt(evil[4]) * 3);
  evilSum += (parseInt(evil[5]) * 5);
  evilSum += (parseInt(evil[6]) * 10);
  // if evilSum is larger, evil wins. If goodSum is larger, good wins, If tie, return 'tie'
  if (goodSum > evilSum) {
    return 'Battle Result: Good triumphs over Evil';
  } else if (evilSum > goodSum) {
    return 'Battle Result: Evil eradicates all trace of Good';
  } else {
    return 'Battle Result: No victor on this battle field';
  }

}


goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1');


function list(names){
  var newNames = '';
  if (names.length > 1) {
    // if the name array is larger than one we need to add commas after any name that is not the 2nd to last
    newNames += names[0].name;
    for (var i = 1; i < names.length - 1; i++) {
      newNames += ', ' + names[i].name ;
    }
    // the second to last name should use an ampersand
    newNames += ' & ' + names[names.length-1].name;
  }
  // if names.length equals 1, just display the name - no punctuation needed
  else if (names.length === 1) {
    newNames = names[0].name;
  }
  // if names.length is less than one, just return '';
  else {
    return newNames;
  }
  return newNames;
}

list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]);


function array_diff(a, b) {
  // first loop works backwards through array
  for (var i = a.length - 1; i >= 0; i--) {
    // second loop checks each part of the first array to the second array
    // if the current index of the first loop matches any bart of second it will be removed
    for (var j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        a.splice([i],1);
      }
    }
  }
  return a;
}


function shoot(x){
  // declare variable and multiplier sums to be used in loops
  var p1Sum = 0;
  var p2Sum = 0;
  var multiplier = 1;
  // iterate through the array first checking if the boolean is true or false
  // to update the multiplier
  for (var i = 0; i < x.length; i++) {
    // create round score variables to use in order to update the p1 and p2Sums
    var p1Round = 0;
    var p2Round = 0;
    if (x[i][1] === true) {
      multiplier = 2;
    } else {
      multiplier = 1;
    }
    // iterate through the string contained in object checking for X, and add to sum accordingly
    for (var j = 0; j < x[i][0].P1.length; j++) {
      if (x[i][0].P1[j] === 'X') {
        p1Sum += (1 * multiplier);
      }
    }
    for (var j = 0; j < x[i][0].P2.length; j++) {
      if (x[i][0].P2[j] === 'X') {
        p2Sum += (1 * multiplier);
      }
    }
  }
  // Check for win or draw
  if (p1Sum === p2Sum) {
    return 'Draw!'
  } else if (p1Sum > p2Sum) {
    return 'Pete Wins!'
  } else {
    return 'Phil Wins!';
  }
}


/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c){
  // put the arguments into an array and sort them from least to greatest
  var sortArr = [a,b,c];
  sortArr.sort(function(x, y) {
    return x - y;
  });
  // if side a + b is less than or equal to the length c, it isn't a ᐃ
  // if side c^2 is greater than a^2 + b^2, it is an obtuse ᐃ
  // if side c^2 is less than a^2 + b^2, it is an acute ᐃ
  // else, it has to be a right triangle
  if (sortArr[0] + sortArr[1] <= sortArr[2]) {
    return 0;
  } else if (Math.pow(sortArr[2],2) > Math.pow(sortArr[0],2) + Math.pow(sortArr[1],2)) {
    return 3;
  } else if (Math.pow(sortArr[2],2) < Math.pow(sortArr[0],2) + Math.pow(sortArr[1],2)) {
    return 1;
  } else {
    return 2;
  }

}

triangleType(2, 4, 6);

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

function findOdd(A) {
  var newObj = {};
  if (A.length === 1) {
    return A[0];
  }
  for (var i = 0; i < A.length; i++) {
    if (newObj[A[i]] === undefined) {
      newObj[A[i]] = 1;
    } else {
      newObj[A[i]]++;
    }
  }
  var randomObjValue = newObj[A[0]];
  var testArr1 = [];
  var testArr2 = [];
  for (var key in newObj) {
    if (newObj[key] === randomObjValue) {
      testArr1.push(key);
    } else {
      testArr2.push(key);
    }
  }
  if (testArr1.length < testArr2.length) {
    return parseInt(testArr1[0]);
  } else {
    return parseInt(testArr2[0]);
  }
}

function findOdd(A){
  if (A.length === 1) {
    return A[0];
  } else {

  }
}
