function descendingOrder(n){
  return parseInt(n.toString().split('').sort((a,b)=>{
    return parseInt(b) - parseInt(a);
  }).join(''));
}
