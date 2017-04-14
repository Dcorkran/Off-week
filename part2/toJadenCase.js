
String.prototype.toJadenCase = function () {
  return this.split(' ').map((element)=>{
    return element[0].toUpperCase() + element.substr(1);
  }).join(' ');
};
