function recursiveReverse(str){
  if (str.length < 1) {
    return str
  } else {
    return str[str.length-1] + recursiveReverse(str.substring(0,str.length-1))
  }
}
