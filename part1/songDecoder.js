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
