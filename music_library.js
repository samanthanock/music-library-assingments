var library = {
  tracks: {
    t01: {
      id: 't01',
      name: 'Code Monkey',
      artist: 'Jonathan Coulton',
      album: 'Thing a Week Three',
    },
    t02: {
      id: 't02',
      name: 'Model View Controller',
      artist: 'James Dempsey',
      album: 'WWDC 2003',
    },
    t03: {
      id: 't03',
      name: 'Four Thirty-Three',
      artist: 'John Cage',
      album: 'Woodstock 1952',
    },
  },
  playlists: {
    p01: { id: 'p01', name: 'Coding Music', tracks: ['t01', 't02'] },
    p02: { id: 'p02', name: 'Other Playlist', tracks: ['t03'] },
  },
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function() {
  for (var a in library.playlists) {
    console.log(
      a +
        ': ' +
        library.playlists[a].name +
        ' - ' +
        library.playlists[a].tracks.length +
        ' tracks',
    );
  }
};
//printPlaylists();
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function() {
  for (var b in library.tracks) {
    console.log(
      b +
        ': ' +
        library.tracks[b].name +
        ' by ' +
        library.tracks[b].artist +
        ' (' +
        library.tracks[b].album +
        ' )',
    );
  }
};
//printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function(playlistId) {
  console.log(
    playlistId +
      ': ' +
      library.playlists[playlistId].name +
      ' - ' +
      library.playlists[playlistId].tracks.length +
      ' tracks',
  );
  for (var i = 0; i < library.playlists[playlistId].tracks.length; i++) {
    var track = library.playlists[playlistId].tracks[i];
    console.log(
      track +
        ': ' +
        library.tracks[track].name +
        ' by ' +
        library.tracks[track].artist +
        '(' +
        library.tracks[track].album +
        ')',
    );
    console.log(track);
  }
};

// adds an existing track to an existing playlist

var addTrackToPlaylist = function(trackId, playlistId) {
  var addTrack = library.playlists[playlistId].tracks.push(trackId);
  console.log(addTrack);
};

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// adds a track to the library

var addTrack = function(name, artist, album) {
  var newTrack = {
    id: uid(),
    name: name,
    artist: artist,
    album: album,
  };
  var add = (library.tracks[newTrack.id] = newTrack);
};
console.log(library.tracks);

addTrack('name', 'artist', 'album');

// adds a playlist to the library

var addPlaylist = function(name) {
  {
    var newPlaylist = {
      id: uid(),
      name: name,
      tracks: [],
    };
    library.playlists[newPlaylist.id] = newPlaylist;
    console.log(library.playlists);
  }
};
addPlaylist('p03');

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {};
