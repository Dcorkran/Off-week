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


function zip(arr1, arr2){
  var maxArrLength = Math.max(arr1.length, arr2.length);
  var answerArray = [];
  for (var i = 0; i < maxArrLength; i++) {
    if (arr1[i]) {
      answerArray.push(arr1[i]);
    }
    if (arr2[i]) {
      answerArray.push(arr2[i]);
    }
  }
  return answerArray;
}

function charCheck(text, max, spaces){
  if (spaces) {
      if (text.length <= max) {
        return [true,text];
      } else {
        return [false,text.substring(0,max)];
      }
  } else {
    if (text.replace(/\s/g, '').length <= max) {
      return [true,text.replace(/\s/g, '')];
    } else {
      return [false,text.replace(/\s/g, '').substring(0,max)];
    }
  }
};


function stockList(listOfArt, listOfCat){
  console.log(listOfArt, listOfCat);
  var answer = "";
  if (listOfCat.length === 0 || listOfArt.length === 0) {
    return answer;
  } else {
    var answerString = '';
    for (var i = 0; i < listOfCat.length; i++) {
      var letter = listOfCat[i];
      var count = 0;
      for (var j = 0; j < listOfArt.length; j++) {
        var intStart = listOfArt[j].indexOf(' ') + 1;
        if (letter === listOfArt[j][0]) {
          count += parseInt(listOfArt[j].substring(intStart,listOfArt[j].length));
        }
      }
      if (i === 0) {
        answerString += `(${letter} : ${count})`;
      } else {
        answerString += ` - (${letter} : ${count})`;
      }
    }
    return answerString;
  }
}

function isPrime(num){
  if (num === 0 || num === 1 || num === -1) {
    return false;
  } else if (num > 0) {
    for (var i = num - 1; i > 1 ;i--) {
      if ((num / i) % 1 === 0) {
        return false;
      }
    }
    return true;
  } else {
    for (var i = num + 1; i < -1 ;i++) {
      if ((num / i) % 1 === 0) {
        return false;
      }
    }
    return true;
  }
}

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

function threes(n){
  while (n > 1) {
    if ((n / 3) % 1 === 0) {
      console.log(n, 0);
      n /= 3;
    } else if (((n - 1) / 3) % 1 === 0) {
      console.log(n, -1);
      n -= 1;
      n /= 3;
    } else {
      console.log(n, 1);
      n += 1;
      n /= 3;
    }
  }
}




function BSTNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BSTNode.prototype.add = function (node) {
  if (node.value < this.value) {
    this.left ? this.left.add(node) : this.left = node;
  } else {
    this.right ? this.right.add(node) : this.right = node;
  }
}


let bstn1 = new BSTNode(8);
let bstn2 = new BSTNode(3);
let bstn3 = new BSTNode(1);
let bstn4 = new BSTNode(6);
let bstn5 = new BSTNode(4);
let bstn6 = new BSTNode(7);
let bstn7 = new BSTNode(10);
let bstn8 = new BSTNode(14);
let bstn9 = new BSTNode(13);

for (let i = 2; i < 10; i++) {
  bstn1.add(window[`bstn${i}`]);
}

function search(value, node) {
  if (value === node.value) {
    return node;
  } else if (value < node.value) {
    if (node.left !== null) {
      node = node.left;
    } else {
      return null;
    }
  } else {
    if (node.right !== null) {
      node = node.right;
    } else {
      return null;
    }
  }
}

function findSenior(list) {
  let answerArr = [];
  list.map(function(obj){
    if (answerArr.length === 0 || answerArr[0].age < obj.age) {
      return answerArr = [obj];
    } else if (answerArr[0].age === obj.age) {
      return answerArr.push(obj);
    }
  })
  return answerArr;
}

function findSenior(list) {
  let answerArr = [];
  list.map(checkAge);
  return answerArr;

  function checkAge(obj){
    if (answerArr.length === 0 || answerArr[0].age < obj.age) {
      return answerArr = [obj];
    } else if (answerArr[0].age === obj.age) {
      return answerArr.push(obj);
    }
  }
}

function wordy(str){
  var re = /by |\?/g;
  str = str.replace(re, '');
  var splitStrArr = str.split(' ');
  splitStrArr.shift();
  splitStrArr.shift();
  var numArr = [];
  var opArr = [];

  for (var i = 0; i < splitStrArr.length; i++) {
    if (i % 2 === 0) {
      numArr.push(splitStrArr[i]);
    } else {
      opArr.push(splitStrArr[i]);
    }
  }
  for (var i = 0; i < opArr.length; i++) {
    if (opArr[i] === 'plus') {
      numArr[i + 1] = parseInt(numArr[i]) + parseInt(numArr[i + 1]);
    } else if (opArr[i] === 'minus') {
      numArr[i + 1] = parseInt(numArr[i]) - parseInt(numArr[i + 1]);
    } else if (opArr[i] === 'divided') {
      numArr[i + 1] = parseInt(numArr[i]) / parseInt(numArr[i + 1]);
    } else {
      numArr[i + 1] = parseInt(numArr[i]) * parseInt(numArr[i + 1]);
    }
  }
  return numArr[numArr.length - 1];
}


function tribonacci(signature,n){
  var answerArr = [];
  for (var i = 0; i < n; i++) {
    if (i <= 2) {
      answerArr.push(signature[i]);
    } else {
      answerArr.push(answerArr[i - 1] + answerArr[i - 2] + answerArr[i - 3]);
    }
  }
  return answerArr;
}

function isMerge(s, part1, part2) {
  if (part1.length + part2.length !== s.length) {
    return false;
  }
  part1 = part1.split('');
  part2 = part2.split('');
  for (var i = 0; i < s.length; i++) {
    if (s[i] === part1[0]) {
      part1.shift();
    } else if (s[i] === part2[0]) {
      part2.shift();
    } else {
      return false;
    }
  }
  return true;
}

function alphabetPosition(text) {
  var regEx = /[^a-zA-Z]/g;
  var textArr = text.toLowerCase().replace(regEx,'').split('');
  return textArr.map((letter)=>{
    return String(letter.charCodeAt(0) - 96);
  }).join(' ')
}

function missingAlphabets(s) {
  let alphObj = {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0};
  let arr = s.split('');
  for (var i = 0; i < arr.length; i++) {
    alphObj[arr[i]]++;
  }
  let valueArr = Object.values(alphObj);
  let max = Math.max(...valueArr);
  let answerStr = '';
  for (var key in alphObj) {
    for (var i = alphObj[key]; i < max; i++) {
      answerStr += key;
    }
  }
  return answerStr;
}

function longestConsec(strarr, k) {
  let i = 0;
  let tempStr = "";
  let answerStr = "";
  while (i <= strarr.length - k) {
    for (var j = 0; j < k; j++) {
      tempStr += strarr[i + j];
    }
    if (tempStr.length > answerStr.length) {
      answerStr = tempStr;
    }
    i++;
    tempStr = "";
  }
  return answerStr;
}


function orderWeight(str) {
  let arr = str.split(' ');
  return arr.sort((a,b)=>{
    let sum1 = getVal(a);
    let sum2 = getVal(b);
    if (sum1 === sum2) {
      for (var i = 0; i < Math.min(a.length,b.length); i++) {
        if (a[i] < b[i]) {
          return -1;
        } else if (a[i] > b[i]) {
          return 1
        }
      }
      if (a.length < b.length) {
        return -1
      } else if (a.length > b.length) {
        return 1
      } else {
        return 0;
      }
    } else {
      return sum1 - sum2;
    }
  }).join(' ')
  function getVal(str){
    let sum = 0;
    for (var i = 0; i < str.length; i++) {
      sum += parseInt(str[i]);
    }
    return sum;
  }
}

function loop_size(node){
  let i = 1;
  node.seen = true;
  if (node.next.seen) {
    return i;
  } else {
    let start = node;
    let finish = node.getNext();
    while (start !== finish) {
      i++;
      finish = finish.getNext();
    }
  }
  return i;
}

function duplicateEncode(word){
  word = word.toLowerCase();
  let letterCountObj = {};
  let answerStr = '';
  for (var i = 0; i < word.length; i++) {
    if (letterCountObj[word[i]]) {
      letterCountObj[word[i]]++;
    } else {
      letterCountObj[word[i]] = 1;
    }
  }
  for (var i = 0; i < word.length; i++) {
    if (letterCountObj[word[i]] > 1) {
      answerStr += ')';
    } else {
      answerStr += '(';
    }
  }
  return answerStr;
}


function titleCase(title, minorWords) {
  if (minorWords) {
    let minorWordsArr = minorWords.split(' ');
    return title.split(' ').map((e,i)=>{
      if (i === 0) {
        return makeTitleCase(e);
      } else {
        for (var j = 0; j < minorWordsArr.length; j++) {
          if (e.toLowerCase() === minorWordsArr[j].toLowerCase()) {
            return e.toLowerCase();
          }
        }
        return makeTitleCase(e);
      }
    }).join(' ');
  } else {
    return title.split(' ').map((e,i)=>{
      return makeTitleCase(e);
    }).join(' ');
  }

  function makeTitleCase(word){
    return word.substring(0,1).toUpperCase() + word.substring(1,word.length).toLowerCase();
  }
}

function comp(array1, array2){
  if (!array2) {
    return false
  }
  else if (array1.length === 0 && array2.length === 0) {
    return true
  } else {
    array2 = array2.sort();
    array1 = array1.map((e)=>{
      return e * e;
    }).sort();
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false
      }
    }
    return true;
  }
}

function sortArray(array) {
  if (array.length === 0) {
    return array;
  } else {
    let onlyOddArray = [];
    let onlyEvenArray = array.map((e)=>{
      if (e % 2 === 0) {
        return e;
      } else {
        onlyOddArray.push(e);
        return null;
      }
    })
    onlyOddArray = onlyOddArray.sort((a,b)=>{
      return a - b;
    })
    for (var i = 0, j = 0; i < onlyEvenArray.length; i++) {
      if (onlyEvenArray[i] === null) {
        onlyEvenArray[i] = onlyOddArray[j];
        j++;
      }
    }
    return onlyEvenArray;
  }
}

function findMissingLetter(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].charCodeAt(0) !== array[i+1].charCodeAt(0) - 1) {
      return String.fromCharCode(array[i+1].charCodeAt(0) - 1)
    }
  }
}

function LCS(x, y) {
  let answerString = '';
  let innerLoopStart = 0;
  for (var i = 0; i < y.length; i++) {
    for (var j = innerLoopStart; j < x.length; j++) {
      if (y[i] === x[j]) {
        answerString += y[i];
        i++;
        innerLoopStart = j;
      }
    }
  }
  return answerString
}

function incrementString (strng) {
  let word = strng.replace(/[0-9]+/g, '');
  let num = strng.replace(/[a-zA-Z]+/g, '').split('');
  let numSum = num.reduce(function(acc, val) {
    return acc + parseInt(val);
  }, 0);
  let keepAdding = true;
  if (num.length === 0 || numSum[i] === 0) {
    num.unshift(1);
  } else {
    for (var i = num.length - 1; i >= 0; i--) {
      if (keepAdding && i === 0 && num.length > 1) {
        num[i] = 0;
        num.unshift(1);
      }
      else if (keepAdding) {
        if (num[i] === '9') {
          num[i] = '0';
        } else {
          num[i] = (parseInt(num[i]) + 1).toString();
          keepAdding = false;
        }
      }
    }
  }
  return word + num.join('');
}


function tripledouble(num1, num2) {
  num1=num1.toString();
  num2=num2.toString();
  for (var i = 1, inARow = 1; i < num1.length; i++) {
    if (num1[i] === num1[i - 1]) {
      inARow++;
    } else {
      inARow = 1;
    }
    if (inARow >= 3) {
      for (var i = 0, inARow = 1; i < num2.length; i++) {
        if (num2[i] === num2[i - 1]) {
          inARow++;
        } else {
          inARow = 1;
        }
        if (inARow >= 2) {
          return 1
        }
      }
    }
  }
  return 0;
}

const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  } else {
    return begin + sequenceSum(begin + step,end, step)
  }
};

const factorial = n => {
  if (n === 1) {
    return 0
  } else {
    return n * factorial(n - 1)
  }
};

const fibonacci = n => {
  if (n < 2){
    return 1;
  }else{
    return fibonacci(n-2) + fibonacci(n-1);
  }
}

function fibonacci (n){
  let fibArr = [1,1];
  for (var i = 1; i < n; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i])
  }
  return fibArr[fibArr.length - 1]
}


  function recursiveReverse(str){
    if (str.length < 1) {
      return str
    } else {
      return str[str.length-1] + recursiveReverse(str.substring(0,str.length-1))
    }
  }

function Mormons(startingNumber, reach, target){
//let the mission begin!
  if (startingNumber > target) {
    return 0;
  } else {
    return 1 + Mormons((startingNumber * reach) + startingNumber, reach, target);
  }
}

// return the sum of all values in the tree, including the root
function sumTheTreeValues(root){
  if (!root.right && !root.left) {
    return root.value;
  } else if (root.left && root.right) {
    return root.value + (sumTheTreeValues(root.left) + sumTheTreeValues(root.right));
  } else if (root.left) {
    return root.value + sumTheTreeValues(root.left)
  } else {
    return root.value + sumTheTreeValues(root.right)
  }
}















function test(str){
  if (str.length < 1) {
    return str
  } else {
    return str[str.length-1] + test(str.substring(0,str.length - 1))
  }
}

function arraySum(arraySet) {
  var flatArray = arraySet.map((arr) => {
    if (Array.isArray(arr)) {
      return isArray(arr)
    } else if (Number.isInteger(arr)) {
      return arr;
    }

  })
  return flatArray.reduce((a,b)=>{
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return a+b;
    } else {
      return a + 0;
    }
  },0)
}

//arraySet = [[[[[[[[1]]]]]]]]

function isArray(arraySet){

    if (!Array.isArray(arraySet[0])){
      return arraySet.reduce((a,b)=>{
        if (Number.isInteger(a) && Number.isInteger(b)) {
          return a+b;
        } else {
          return a + 0;
        }
      },0)
     }
     else {
     return isArray(arraySet[0]);
    }
}

function duplicateCount(text){
  text = text.toLowerCase();
  let answerObj = {};
  let dupSum = 0;
  for (var i = 0; i < text.length; i++) {
    if (answerObj[text[i]]) {
      answerObj[text[i]]++
    } else {
      answerObj[text[i]] = 1;
    }
  }
  for (var key in answerObj) {
    if (answerObj[key] > 1) {
      dupSum++;
    }
  }
  return dupSum
}
