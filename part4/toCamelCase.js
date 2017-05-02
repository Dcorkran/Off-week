function toCamelCase(str){
  if (!str){
    return '';
  } else {
    return str.split(/[-_]/g).map((e,i)=>{
      if (i === 0 && e[0].toLowerCase() === e[0]) {
        return e
      } else {
        return e[0].toUpperCase() + e.substring(1)
      }
    }).join('')
  }
}
