function Mormons(startingNumber, reach, target){
//let the mission begin!
  if (startingNumber > target) {
    return 0;
  } else {
    return 1 + Mormons((startingNumber * reach) + startingNumber, reach, target);
  }
}
