const fibonacci = n => {
  if (n < 2){
    return 1;
  }else{
    return fibonacci(n-2) + fibonacci(n-1);
  }
}

function fibonacci (n){
  let fibArr = [1,1];
  for (var i = 1; i < n; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i])
  }
  return fibArr[fibArr.length - 1]
}
