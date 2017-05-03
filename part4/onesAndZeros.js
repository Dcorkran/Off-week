const binaryArrayToNumber = arr => {
  let divide = 16;
  return arr.reduce((a,b)=>{
    divide /= 2;
    return a + (b * divide)
  },0)
};
