function sumConsecutives(s) {
  let answerArray = [];
    s.forEach((e,i)=>{
      let j = i;
      let num = e;
      while (e === s[i + 1]) {
        num += s[i + 1];
        s.splice(i + 1,1);
      }
      s[j] = num;
    });
    return s
}
