function deleteNth(arr,x){
  let answerObj = {};
  return arr.filter(e=>{
    !answerObj[e] ? answerObj[e] = 1 : answerObj[e]++;
    return answerObj[e] <= x ? e : false;
  })
}
