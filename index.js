function theBeatlesPlay(musicians, instruments) {
  var musiciansPlay = [];
  for (var i = 0; i < musicians.length; i++) {
    musiciansPlay.push(musicians[i] + instruments[i]);
  }
  return musiciansPlay;
}
