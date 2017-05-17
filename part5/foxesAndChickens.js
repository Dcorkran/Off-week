var hungryFoxes = function(farm) {
  farm = farm.split('');
  let killOuside = catchOutsideFoxes(farm);
  let
}

function catchOutsideFoxes(farm){
  let inCoop = false;
  for (var i = 0; i < farm.length; i++) {
    if (e === '[') {
      inCoop = true;
    }
    if (e === ']') {
      inCoop = false;
    }
    if (e === 'F' && !inCoop) {
      return true;
    }
  }
  return false;
}

function killCoops(farm){
  farm.map(e=>{
    if (true) {

    }
  })
}


var hungryFoxes = function(farm) {
  let outsideFarm = farm.replace(/\[(.*?)\]/ig,'').search('F');
  let insideCoop = false;
  let killCoop = false;
  let indexStart;
  let indexEnd;
  farm = farm.split('');
  for (var i = 0; i < farm.length; i++) {
    if (farm[i] === '[') {
      insideCoop = true;
      indexStart = i;
    }
    if (farm[i] === ']') {
      insideCoop = false;
      indexEnd = i;
      if (killCoop) {
        farm = killInside(farm,indexStart,indexEnd);
      }
      indexEnd = null;
      indexStart = null;
      killCoop = false;
    }
    if (outsideFarm !== -1 && !insideCoop && farm[i] !== 'F' && farm[i] !== ']') {
      farm[i] = '.'
    }
    if (insideCoop && farm[i] === 'F') {
      killCoop = true;
    }
  }
  return farm.join('');
}

function killInside(farm,start,end){
  for (var i = start + 1; i < end; i++) {
    farm[i] = (farm[i] === 'F') ? 'F' : '.';
  }
  return farm;
}
