// function solution(input, markers){
//   const inputLineArray = input.split('\n')
//   return inputLineArray.reduce((a,b,c,d)=>{
//     markers.forEach((symbol) => {
//       if (b.indexOf(symbol) >= 0) {
//         b = b.slice(0,b.indexOf(symbol)).trim()
//       }
//     })
//     return c !== d.length - 1 ? a + b + '\n' : a+b
//   },'')
// }
//
// console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));


function convertQueryToMap(query) {
  query = query.split('&')
  query.reduce((a,b) => {
    let properties = b.split('.')
    let selectedProperty
    properties.forEach((property, index) => {
      if (!a[property]) {
        a[property] = {}
        selectedProperty = a[propert]
      }
      console.log(property);
    })
    // console.log(properties)
    // properties.forEach((!property) => {
    //   console.log(property);
      // console.log(a)

      // !a[property] ? a[property] = null : null
    // })
    // console.log(a)
    return a

  },{})
}

convertQueryToMap('user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue')
