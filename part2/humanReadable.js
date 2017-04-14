function humanReadable(seconds) {
  let i = 0, hours = 0, minutes = 0, newSeconds = 0;
  while (i < seconds) {
    newSeconds++;
    i++;
    if (newSeconds === 60) {
      minutes++;
      newSeconds = 0;
      if (minutes === 60) {
        hours++;
        minutes = 0;
      }
    }
  }
  return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + newSeconds).slice(-2)}`;
}
