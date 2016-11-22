function songDecoder(song){
  // replace all instances of WUB or combined WUBs (WUBWUB) with ' '
  var newSong = song.replace(/(WUB)+/ig, ' ');
  // if there is a ' ' at the beginning or end, remove it.
  if (newSong.charAt(0) === ' ') {
    newSong = newSong.substring(1, newSong.length);
  }
  if (newSong.charAt(newSong.length - 1) === ' ') {
    newSong = newSong.substring(0, newSong.length - 1);
  }
  return newSong;
}

songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")


function goodVsEvil(good, evil){
  // split the string into an array at each space
  good = good.split(' ');
  // create the Sum used to tally the sum
  // I'm sure a clever for loop would have been better here, but I felt this was easier
  // to read than having a for loop with some if statements to change the multiplier
  var goodSum = 0;
  goodSum += (parseInt(good[0]) * 1);
  goodSum += (parseInt(good[1]) * 2);
  goodSum += (parseInt(good[2]) * 3);
  goodSum += (parseInt(good[3]) * 3);
  goodSum += (parseInt(good[4]) * 4);
  goodSum += (parseInt(good[5]) * 10);


  evil = evil.split(' ');
  // same process as good
  var evilSum = 0;
  evilSum += (parseInt(evil[0]) * 1);
  evilSum += (parseInt(evil[1]) * 2);
  evilSum += (parseInt(evil[2]) * 2);
  evilSum += (parseInt(evil[3]) * 2);
  evilSum += (parseInt(evil[4]) * 3);
  evilSum += (parseInt(evil[5]) * 5);
  evilSum += (parseInt(evil[6]) * 10);
  // if evilSum is larger, evil wins. If goodSum is larger, good wins, If tie, return 'tie'
  if (goodSum > evilSum) {
    return 'Battle Result: Good triumphs over Evil';
  } else if (evilSum > goodSum) {
    return 'Battle Result: Evil eradicates all trace of Good';
  } else {
    return 'Battle Result: No victor on this battle field';
  }

}


goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1');


function list(names){
  var newNames = '';
  if (names.length > 1) {
    // if the name array is larger than one we need to add commas after any name that is not the 2nd to last
    newNames += names[0].name;
    for (var i = 1; i < names.length - 1; i++) {
      newNames += ', ' + names[i].name ;
    }
    // the second to last name should use an ampersand
    newNames += ' & ' + names[names.length-1].name;
  }
  // if names.length equals 1, just display the name - no punctuation needed
  else if (names.length === 1) {
    newNames = names[0].name;
  }
  // if names.length is less than one, just return '';
  else {
    return newNames;
  }
  return newNames;
}

list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]);
