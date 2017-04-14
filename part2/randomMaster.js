// random mastery tracking
var myArray = [1,2,3,4,5,6]
function isGreater(){
  return myArray.filter((e)=>{
    return e >= 3;
  });
}

function isGreater(){
  function testGreater(e){
    return e >= 3;
  }
  return myArray.filter(testGreater);
}
