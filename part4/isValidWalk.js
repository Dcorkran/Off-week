function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false
  } else {
    return walk.reduce((a,b)=>{
      switch (b) {
        case 'n':
          b = 1;
          break;
        case 's':
          b = -1;
          break;
        case 'e':
          b = 1.01;
          break;
        case 'w':
          b = -1.01;
          break;
      }
      return a + b;
    },0) === 0 ? true : false;
  }
}
