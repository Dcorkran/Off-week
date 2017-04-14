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
