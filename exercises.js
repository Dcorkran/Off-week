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
