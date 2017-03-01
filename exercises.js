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
  // declare new object which we will use to tally the times a number appears
  var newObj = {};
    // if it is the first time a number appears, give it a tally of one
    // if it has already appeared, add one to the tally
    for (var i = 0; i < A.length; i++) {
      if (!newObj[A[i]]) {
        newObj[A[i]] = 1;
      } else {
        newObj[A[i]]++;
      }
    }
    // iterate through the object - when the function finds a number that appears
    // an odd number of times, return it.
    for (var key in newObj) {
      if (newObj[key] % 2 === 1) {
        return parseInt(key);
      }
    }
}

// function zeros (n) {
//   console.log(n);
//   var answerSum = 1;
//   var zeroCount = 0;
//   var moduloCount = 1;
//   for (var i = 2; i < n + 1; i++) {
//     answerSum *= i;
//   }
//   for (var i = answerSum; i > 0; i--) {
//     if (answerSum % moduloCount === 0) {
//       zeroCount++;
//       moduloCount *= 10;
//     } else {
//       zeroCount--;
//       return zeroCount;
//     }
//   }
//
// }
//   console.log(answerSum.toFixed(2));
//   answerSum = answerSum.toString();
//
//   var newArr = answerSum.split('');
//   var zeroCount = 0;
//   var largeNum = '';
//   // console.log(newArr);
//   if (newArr[newArr.length - 3] === '+') {
//     largeNum += newArr[newArr.length - 2];
//     largeNum += newArr[newArr.length - 1];
//     return parseInt(largeNum);
//   } else {
//     for (var i = newArr.length - 1; i > 0; i--) {
//         if (newArr[i] === '0') {
//           zeroCount++;
//         } else {
//           return zeroCount;
//         }
//     }
//     return zeroCount;
//   }
// }

function zeros(n){
  // this answer uses the formula on this page to determine the equation used
  // https://en.wikipedia.org/wiki/Trailing_zero
  var factorial = 5;
  var answer = 0;
  while (factorial < n) {
    answer += Math.floor(n/factorial);
    factorial *= 5;
  }
  return answer;
}

function generateHashtag (str) {
  var stringArr;
  // if the string is empty or over char count, return false
  if (str.length === 0 || str.length > 140) {
    return false;
  } else {
    // split the string into an array in order to better iterate through and change
    // characters / remove spaces
    stringArr = str.split('');
    // deal with there posibly being a bunch of ' ' at the end of an str.
    // if the while loop sees spaces, it will remove it in prep for the for loop
    while (stringArr[stringArr.length - 1] === ' ') {
      stringArr.splice(stringArr.length - 1,1);
    }
    // If the for loop sees a ' ' in stringArr, it will first capitalize the following
    // letter, and then remove the space
    for (var i = stringArr.length - 1; i > 0; i--) {
      if (stringArr[i] === ' ') {
        stringArr[i + 1] = stringArr[i + 1].toUpperCase();
        stringArr.splice(i,1);
      }
    }
    stringArr.unshift('#');
    stringArr[1] = stringArr[1].toUpperCase();
    return stringArr.join('');
  }
}

function solution(digits){
  // the input will be a string, so first we split it into an array
  var newArr = digits.split('');
  // largestNum variable used to track the overall largest number while iterating
  var largestNum = 0;
  // at each loop iteration, it takes the current index through four above the current index
  // to seee if it is a larger number than previously seen
  for (var i = 0; i < newArr.length - 4; i++) {
    var thisFiveNumbers = newArr[i] + newArr[i + 1] + newArr[i + 2] + newArr[i + 3] + newArr[i + 4];
    if (parseInt(thisFiveNumbers) > largestNum) {
      largestNum = parseInt(thisFiveNumbers);
    }
  }
  return largestNum;
}


snail = function(array) {
  var n = array.length;
  var direction = 'right';
  var answerArr = [];
  var limit = n;
  var termination = n*n;
  var x = 1;
  var y = 0;
  if (array[0][0] === undefined) {
    return answerArr;
  }
  answerArr[0] = array[0][0];
  limit--;
  limit--;
  for (var i = 1; i < termination; i++) {
    answerArr[i] = array[y][x];
    if (direction === 'right') {
      limit--;
      x++;
      if (limit === 0) {
        n--;
        limit = n;
        direction = 'down';
      }
    } else if (direction === 'down') {
      limit--;
      y++;
      if (limit === 0) {
        limit = n;
        direction = 'left';
      }
    } else if (direction === 'left') {
      limit--;
      x--;
      if (limit === 0) {
        n--;
        limit = n;
        direction = 'up';
      }
    } else {
      limit--;
      y--;
      if (limit === 0) {
        limit = n;
        direction = 'right';
      }
    }
  }
  return answerArr;
};

function nextBigger(n){
  n = n.toString();
  n = n.split('');

  for (var i = n.length - 2, j = 2; i >= 0; i--, j++) {
    var firstArrayPortion = n.slice(0,n.length - j);
    var secondArrayPortion = n.slice(i,n.length);
    var answerArray = [];
    var sortedArray = secondArrayPortion.slice();
    sortedArray.sort(function(a, b) {
      return a - b;
    });
    for (var k = 0; k < sortedArray.length; k++) {
      if (sortedArray[k] > secondArrayPortion[0]) {
        answerArray[0] = sortedArray[k];
        sortedArray.splice(k,1);
        firstArrayPortion = firstArrayPortion.concat(answerArray);
        firstArrayPortion = firstArrayPortion.concat(sortedArray);
        return parseInt(firstArrayPortion.join(''));
      }
    }
  }
  return -1;
}



function sumStrings(a,b) {
  let answer = [];
  let maxA = a.length - 1;
  let maxB = b.length - 1;
  const CONSTMAX = Math.max(maxA,maxB);
  for (var i = 0; i <= CONSTMAX; i++) {
    if (a[maxA] === undefined) {
      if (answer[i] === undefined) {
        answer[i] = 0;
      }
      answer[i] += parseInt(b[maxB]);
      maxB--;
    } else if (b[maxB] === undefined) {
      if (answer[i] === undefined) {
        answer[i] = 0;
      }
      answer[i] += parseInt(a[maxA]);
      maxA--;
    } else if (a[maxA] === undefined && b[maxB] === undefined){
      return answer.reverse().join('');
    } else {
      if (answer[i] === undefined) {
        answer[i] = 0;
      }
      answer[i] += parseInt(a[maxA]) + parseInt(b[maxB]) % 10;
      if (parseInt(a[maxA]) + parseInt(b[maxB]) >= 10) {
        answer[i + 1] = 1;
      }
      maxA--;
      maxB--;
    }
  }
  return answer.reverse().join('');
}

//
// if (parseInt(a[maxA]) + parseInt(b[maxB]) >= 10) {
//   answer[i + 1] = 1;
//   answer[i] = parseInt(a[maxA]) + parseInt(b[maxB]) % 10;
// } else {
//   answer[i] = parseInt(a[maxA]) + parseInt(b[maxB]) % 10;
// }

function sumStrings(a,b) {
  let answer = [];
  for (var i = 0; i < Math.max(a.length,b.length); i++) {
    answer[i] = 0;
  }



  for (let i = 0, aLength = a.length - 1, bLength = b.length - 1; i < answer.length; i++) {
    if (aLength === -1 && bLength === -1) {
      return answer.reverse().join('');
    } else if (bLength === -1) {
      answer[i] += parseInt(a[aLength]);
      aLength--;
    } else if (aLength === -1) {
      answer[i] += parseInt(b[bLength]);
      bLength--;
    } else {
      answer[i] += (parseInt(a[aLength]) + parseInt(b[bLength])) % 10;
      if (parseInt(a[aLength]) + parseInt(b[bLength]) >= 10) {
        answer[i + 1] += 1;
      }
      aLength--;
      bLength--;
    }
  }
  return answer.reverse().join('');
}


function solution(number){
  let sumOfThreeOrFive = 0;
  for (var i = 0; i < number; i++) {
    if (i % 3 === 0) {
      sumOfThreeOrFive += i;
    } else if (i % 5 === 0) {
      sumOfThreeOrFive += i;
    }
  }
  return sumOfThreeOrFive;
}


function pigIt(str){
  let array = str.split(' ');
  array = array.map((str)=>{
    return moveLetters(str);
  });
  return array.join(' ');
  function moveLetters(str){
    return str.substr(1,str.length - 1) + str[0] + 'ay';
  }
}


function pascalsTriangle(n) {
  let answerArray = [1];
  for (let i = 0; i < n - 1; i++) {
    let j = 1;
    let newArr = [1];
    while (j <= i) {
      newArr[j] = answerArray[i][j - 1] + answerArray[i][j];
      j++;
    }
    newArr[newArr.length] = 1;
    answerArray.push(newArr);
  }
  return answerArray.reduce((a,b)=>{
    return a.concat(b);
  },[]);
}


var spiralize = function(size) {
  let spiralMatrix = createMatrix(size);

  for (let i = 0, direction = 'right', x = 0, y = 0; i < size; i++) {
    if (direction === 'right') {
      while (spiralMatrix[y][x + 1] === 0) {
        spiralMatrix[y][x] = 1;
        x++;
      }
      spiralMatrix[y][x] = 1;
      direction = changeDirection(direction);
    } else if (direction === 'down') {
      while (spiralMatrix[y + 1][x] != undefined) {
        spiralMatrix[y][x] = 1;
        y++;
      }
      spiralMatrix[y][x] = 1;
      direction = changeDirection(direction);
    } else if (direction === 'left') {
      while (spiralMatrix[y][x - 1] !== undefined) {
        spiralMatrix[y][x] = 1;
        x--;
      }
      spiralMatrix[y][x] = 1;
      direction = changeDirection(direction);
    } else {
      while (spiralMatrix[y - 1][x] !== undefined) {
        spiralMatrix[y][x] = 1;
        y--;
      }
      spiralMatrix[y][x] = 1;
      direction = changeDirection(direction);
    }
  }

  return spiralMatrix;

  function createMatrix(n){
    let matrix = [];
    for (let i = 0; i < n; i++) {
      matrix[i] = [];
      for (let j = 0; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
    return matrix;
  }
  function changeDirection(direction){
    if (direction === 'right') {
      return 'down';
    } else if (direction === 'down') {
      return 'left';
    } else if (direction === 'left') {
      return 'up';
    } else {
      return 'right';
    }
  }

  // function updateMatrix(matrix,direction,x,y){
  //   if (direction === 'right') {
  //     while (matrix[y][x + 1] !== undefined || matrix[y][x + 1] !== 1) {
  //       matrix[y][x] = 1;
  //       x++;
  //     }
  //   }
  // }

};

//  || spiralMatrix[y][x + 1] !== 1



function combineAndSort(arr1,arr2){
  return arr1.concat(arr2).sort();
}


function humanReadable(seconds) {
  let i = 0, hours = 0, minutes = 0, newSeconds = 0;
  while (i < seconds) {
    newSeconds++;
    i++;
    if (newSeconds === 60) {
      minutes++;
      newSeconds = 0;
      if (minutes === 60) {
        hours++;
        minutes = 0;
      }
    }
  }
  return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + newSeconds).slice(-2)}`;
}

var moveZeros = function (arr) {
  let zeroArr = [];
  function removeZeros(value){
    if (value === 0) {
      zeroArr.push(value);
    }
    return value !== 0;
  }
  let answerArr = arr.filter(removeZeros);
  return answerArr.concat(zeroArr);
}


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

function spinWords(str){
  let splitStr = str.split(' ');
  return splitStr.map(reverseShort).join(' ');
  function reverseShort(value){
    if (value.length >= 5) {
      return value.split('').reverse().join('');
    } else {
      return value;
    }
  }
}





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

function likes(names) {
  if (names.length === 0) {
    return 'no one likes this';
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

function findOutlier(integers){
  let oddOrEven = {
    odd:0,
    even:0
  };
  for (var i = 0; i < 3; i++) {
    if (integers[i] % 2 === 1 || integers[i] % 2 === -1) {
      oddOrEven.odd++;
    } else {
      oddOrEven.even++;
    }
  }
  for (var i = 0; i < integers.length; i++) {
    if (oddOrEven.even > oddOrEven.odd) {
      if (integers[i] % 2 === 1 ||integers[i] % 2 === -1) {
        return integers[i];
      }
    } else {
      if (integers[i] % 2 === 0 ||integers[i] % 2 === -0) {
        return integers[i];
      }
    }
  }
}

function order(words){
  words = words.split(' ');
  let newWords = [];
  let regEx = /[1-9]/;
  for (var i = 0; i < words.length; i++) {
    newWords[parseInt(words[i].match(regEx)) - 1] = words[i];
  }
  return newWords.join(' ');
}

function findEvenIndex(arr){
  for (let i = 1; i < arr.length; i++) {
    let leftSide = 0;
    for (let j = 0; j < i; j++) {
      leftSide += arr[j];
    }
    let rightSide = 0;
    for (let k = arr.length - 1; k > i; k--) {
      rightSide += arr[k];
    }
    if (leftSide === rightSide) {
      return i;
    }
  }
  return -1;
}

function loop_size(node){
  loopDone = false
  loopLength = 0;
  while (!loopDone) {

    if (true) {

    }
    node.myThing = 1;
    node.getNext();
  }
}

function dirReduc(arr){
  let northCount = false, southCount = false, eastCount = false, westCount = false, newArr = [];
  arr.forEach(deleteDirection);
  // function checkDirection(value){
  // switch (value) {
  // case 'NORTH':
  //   northCount++;
  //   break;
  // case 'SOUTH':
  //   southCount++;
  //   break;
  // case 'EAST':
  //   eastCount++;
  //   break;
  // case 'WEST':
  //   westCount++;
  //   break;
  // }
  // }

  function deleteDirection(value, index, array){
    console.log(value,index,array);
    switch (value) {
    case 'NORTH':
      if (southCount > 0) {
        southCount--;
      } else {
        newArr.push(value);
      }
      break;
    case 'SOUTH':
      if (northCount > 0) {
        northCount--;
      } else {
        newArr.push(value);
      }
      break;
    case 'EAST':
      if (westCount > 0) {
        westCount--;
      } else {
        newArr.push(value);
      }
      break;
    case 'WEST':
      if (eastCount > 0) {
        eastCount--;
      } else {
        newArr.push(value);
      }
      break;
    }
  };
}

String.prototype.toJadenCase = function () {
  return this.split(' ').map((element)=>{
    return element[0].toUpperCase() + element.substr(1);
  }).join(' ');
};

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


function greetDevelopers(list) {
  list.forEach(function(entry) {
    entry.greeting = `Hi ${entry.firstName}, what do you like the most about ${entry.language}?`;
  });
  return list;
}

function isRubyComing(list) {
  let languageIsRuby = false;
  list.forEach((person)=>{
    if (person.language === 'Ruby') {
      languageIsRuby = true;
      return languageIsRuby;
    }
  });
  if (languageIsRuby) {
    return true;
  } else {
    return false;
  }
}


function isRubyComing(list){
  return list.some((element)=>{element.language === 'Ruby'});
}

function getFirstPython(list) {
  return list.find(function(element){
    if (element.language === 'Python') {
      return `${element.firstName}, ${element.country}`;
    }
  });

}


function getFirstPython(list) {
  var answer = list.find(function(element){
    return element.language === 'Python';
  });
  if (answer) {
    return `${answer.firstName}, ${answer.country}`;
  } else {
    return `There will be no Python developers`;
  }

}

function isValidCoordinates(coordinates){
  console.log(coordinates);
  let coordArray = coordinates.split(', ');
  let regEx = /[^\d.-]/;
  if (coordArray.length > 2) {
    return false;
  } else if ((coordArray[0].match(/[.]/g) || []).length > 1 || (coordArray[1].match(/[.]/g) || []).length > 1) {
    return false;
  } else if ((coordArray[0].match(/[-]/g) || []).length > 1 || (coordArray[1].match(/[-]/g) || []).length > 1) {
    return false
  } else {
    if (coordArray[0].match(regEx) || coordArray[1].match(regEx)) {
      return false;
    } else if (parseFloat(coordArray[0]) < -90 || parseFloat(coordArray[0]) > 90) {
      return false;
    } else if (parseFloat(coordArray[1])  < -180 || parseFloat(coordArray[1]) > 180) {
      return false;
    }
  }

  return true; // do your thing!
}


function rockPaperScissors(){
  var playerChoice, computerChoice;
  playerChoice = prompt('Choose rock, paper, or scissors');
  computerChoice = Math.random();

  if (computerChoice < .333) {
    computerChoice = 'rock';
  } else if (computerChoice >= .333 && computerChoice < .666) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }

  if (playerChoice === computerChoice) {
    alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. Tie Game.')
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. You Win.')
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. You Win.')
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. You Win.')
  } else {
    alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. You Lose.')
  }
}


function whoIsNext(names, r){
  let i = 0;
  while (i + 1 < r) {
    i++;
    var name = names.shift();
    names.push(name, name);
  }
  return names[0];
}

function whoIsNext(names, r){
  let fullIteration = Math.floor(r / 5) + 1;
  if (r % fullIteration < fullIteration) {
    return names[0];
  } else if (r % fullIteration > fullIteration && r % fullIteration < (fullIteration * 2) ) {
    return names[1];
  } else if (r % fullIteration > (fullIteration * 2) && r % fullIteration < (fullIteration * 3)) {
    return names[2];
  } else if (r % fullIteration > (fullIteration * 3) && r % fullIteration < (fullIteration * 4)) {
    return names[3];
  } else {
    return names[4];
  }
}


function whoIsNext(names, r){
  if (r <= 5) {
    return names[r-1];
  } else {
    let fullIterations = 2;
    let currentTurnInLine = 5;
    let peopleInLine = 10;
    while (currentTurnInLine + peopleInLine < r) {
      currentTurnInLine += (peopleInLine);
      peopleInLine *= 2;
      fullIterations++;
      if (currentTurnInLine === r) {
        return names[4];
      }
    }
    for (var i = 0, j = 0; i < r - currentTurnInLine; i++) {
      if (i % (peopleInLine / 5) === 0) {
        j++;
      }
    }
    console.log(j);
    return names[j];
  }

}


names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"]


// random mastery tracking
var myArray = [1,2,3,4,5,6]
function isGreater(){
  return myArray.filter((e)=>{
    return e >= 3;
  });
}

function isGreater(){
  function testGreater(e){
    return e >= 3;
  }
  return myArray.filter(testGreater);
}


function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0){
      return '';
    } else {
      for (var i = 0; i < strarr.length; i++) {
        strarr[i]
      }
    }
}

function hangman(){
  var guessedLetters = [];
  var wrongGuesses = 5;
  var words = ['xylophone','computer','sushi','skiing','antidisestablishmentarianism'];
  var word = words[Math.floor(Math.random() * 5)];
  var remainingLetters = word.length;
  var answerWord = [];
  for (var i = 0; i < word.length; i++) {
    answerWord[i] = '_';
  }
  while (remainingLetters !== 0 && wrongGuesses !== 0) {
     var guess = prompt('Please guess a letter \n' + answerWord).toLowerCase();
     var alreadyGuessed = false;
     var correctGuess = false;
     guessedLetters.push(guess);
     for (var i = 0; i < guessedLetters.length; i++) {
       if (guess === guessedLetters[i]) {
         alert('You already guessed this letter. Please guess another.')
         alreadyGuessed = true;
       } else {
         guessedLetters.push(guess);
       }
     }
     if (alreadyGuessed === false) {
       for (var i = 0; i < word.length; i++) {
         if (guess === word[i]) {
           answerWord[i] = guess;
           remainingLetters--;
           correctGuess = true;
         }
       }
       if (correctGuess === false) {
         wrongGuesses--;
       }
     }
  }
  if (remainingLetters === 0) {
    alert('Congratulations! You win! The word was ' + word);
  } else {
    alert('Sorry, you lose! The word was ' + word);
  }
}


function hangman(){
  var words = ['xylophone','computer','sushi','skiing','jazz'];
  var word = words[Math.floor(Math.random() * words.length)];
  var currentAnswer = [];
  var lettersNotGuessed = word.length;
  for (var i = 0; i < word.length; i++) {
    currentAnswer[i] = '_';
  }
  while (lettersNotGuessed > 0) {
    var guess = prompt('Please guess a letter \n' + currentAnswer);
    guess = guess.toLowerCase();
    if (guess.length !== 1) {
      alert('Your guess should only be one letter');
    } else {
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          currentAnswer[i] = guess;
          lettersNotGuessed--;
        }
      }
    }
  }
  alert('Congratulations, you win! The word was ' + word);
  console.log(currentAnswer);
}

function eightBall(){
  var name = prompt('Please enter your name.');
  var answers = ['It is certain.', 'Maybe next time.', 'Try again later.','Not a chance.','Answer unclear','My sources say no.'];
  do {
    console.log(prompt);
    var question = prompt('Welcome ' + name + '. What is your question?');
    if (question === null) {
      break;
    } else {
      var answer = answers[Math.floor(Math.random() * answers.length)];
      alert('The question was: ' + question +'\n' + 'The magic 8-ball says: ' + answer);
    }
  } while (question !== null);
}
