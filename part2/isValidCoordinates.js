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
