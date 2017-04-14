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
