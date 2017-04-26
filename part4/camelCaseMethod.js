String.prototype.camelCase=function(){
  if (this.length === 0) {
    return '';
  }
  return this.trim().split(' ').map((e)=>{
    return e[0].toUpperCase() + e.substring(1,e.length);
  }).join('')
}
