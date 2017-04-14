function charCheck(text, max, spaces){
  if (spaces) {
      if (text.length <= max) {
        return [true,text];
      } else {
        return [false,text.substring(0,max)];
      }
  } else {
    if (text.replace(/\s/g, '').length <= max) {
      return [true,text.replace(/\s/g, '')];
    } else {
      return [false,text.replace(/\s/g, '').substring(0,max)];
    }
  }
};
