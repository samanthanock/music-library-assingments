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
  printPlaylists: function() {
    for (var a in this.playlists) {
      console.log(
        a +
          ': ' +
          this.playlists[a].name +
          ' - ' +
          this.playlists[a].tracks.length +
          ' tracks',
      );
    }
  },
  printTracks: function() {
    for (var b in this.tracks) {
      console.log(
        b +
          ': ' +
          this.tracks[b].name +
          ' by ' +
          this.tracks[b].artist +
          ' (' +
          this.tracks[b].album +
          ' )',
      );
    }
  },
  printPlaylist: function(playlistId) {
    console.log(
      playlistId +
        ': ' +
        this.playlists[playlistId].name +
        ' - ' +
        this.playlists[playlistId].tracks.length +
        ' tracks',
    );
    for (var i = 0; i < this.playlists[playlistId].tracks.length; i++) {
      var track = this.playlists[playlistId].tracks[i];
      console.log(
        track +
          ': ' +
          this.tracks[track].name +
          ' by ' +
          this.tracks[track].artist +
          '(' +
          this.tracks[track].album +
          ')',
      );
      console.log(track);
    }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    var addTrack = this.playlists[playlistId].tracks.push(trackId);
    console.log(addTrack);
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  },
  addTrack: function(name, artist, album) {
    var newTrack = {
      id: this.uid(),
      name: name,
      artist: artist,
      album: album,
    };
    var add = (this.tracks[newTrack.id] = newTrack);
  },
  addPlaylist: function(name) {
    {
      var newPlaylist = {
        id: this.uid(),
        name: name,
        tracks: [],
      };
      this.playlists[newPlaylist.id] = newPlaylist;
      console.log(this.playlists);
    }
  },
}; // library ends here
