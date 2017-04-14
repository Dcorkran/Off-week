function missingAlphabets(s) {
  let alphObj = {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0};
  let arr = s.split('');
  for (var i = 0; i < arr.length; i++) {
    alphObj[arr[i]]++;
  }
  let valueArr = Object.values(alphObj);
  let max = Math.max(...valueArr);
  let answerStr = '';
  for (var key in alphObj) {
    for (var i = alphObj[key]; i < max; i++) {
      answerStr += key;
    }
  }
  return answerStr;
}
