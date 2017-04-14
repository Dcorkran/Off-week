function pascalsTriangle(n) {
  let answerArray = [1];
  for (let i = 0; i < n - 1; i++) {
    let j = 1;
    let newArr = [1];
    while (j <= i) {
      newArr[j] = answerArray[i][j - 1] + answerArray[i][j];
      j++;
    }
    newArr[newArr.length] = 1;
    answerArray.push(newArr);
  }
  return answerArray.reduce((a,b)=>{
    return a.concat(b);
  },[]);
}
