function isMerge(s, part1, part2) {
  let returnSum = 0
  returnSum = getValue(s)
  if (returnSum - (getValue(part1) + getValue(part2)) === 0) {

  }
  }

  function getValue(string){
    let sum = 0
    for (var i = 0; i < string.length; i++) {
      sum += string.charCodeAt([i])
    }
    return sum
  }

  function checkReverse(string, part){
    part.forEach((character) => {
      
    })
  }

}

var test = isMerge('codewars', 'code', 'wars')
console.log(test);

// console.log(checkOrder('codewars', 'code'));
