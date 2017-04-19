function encrypt(text, n) {
  for (var i = 0; i < n; i++) {
    let text1 = [];
    let text2 = [];
    text.split('').forEach((e,i)=>{
      if (i % 2 === 0) {
        text1.push(e);
      } else {
        text2.push(e);
      }
    })
    text = text2.concat(text1).join('');
  }
  return text
}

function decrypt(encryptedText, n) {
  for (var i = 0; i < n; i++) {
    let text1 = encryptedText.substring(Math.floor(encryptedText.length / 2),encryptedText.length);
    let text2 = encryptedText.substring(0,Math.floor(encryptedText.length / 2));
    let returnText = '';
    for (var i = 0; i < Math.max(text1.length, text2.length); i++) {
      text1[i] ? returnText += text1[i] : returnText += '';
      text2[i] ? returnText += text2[i] : returnText += '';
    }
    encryptedText = returnText;
  }
  return encryptedText;
}
