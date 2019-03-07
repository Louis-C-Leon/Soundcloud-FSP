import * as Util from "../util/song_util";

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS";
export const REMOVE_SONG = "REMOVE_SONG";
export const PLAY_SONG = "PLAY_SONG";
export const PREV_SONG = "PREV_SONG";
export const NEXT_SONG = "NEXT_SONG";
export const PAUSE_SONG = "PAUSE_SONG";

export const receiveAllSongs = (songs) => {
  return({
    type: RECEIVE_ALL_SONGS,
    songs,
  })
}

export const receiveSong = (song) => {
  return({
    type: RECEIVE_SONG,
    song
  })
}

export const removeSong = (id) => {
  return({
    type: REMOVE_SONG,
    songId: id,
  });
}

export const pauseSong = () => {
  return({
    type: PAUSE_SONG,
  })
}

export const playSong = (id, playlist) => {
  const next = playlist[Math.floor(Math.random() * playlist.length)];
  const prev = playlist[Math.floor(Math.random() * playlist.length)];
  
  return({
    type: PLAY_SONG,
    songId: id,
    prevSong: prev,
    nextSong: next
  })
}

export const nextSong = (playlist) => {
  const next = playlist[Math.floor(Math.random() * playlist.length)];

  return({
    type: NEXT_SONG,
    nextSong: next,
  })
}

export const prevSong = (playlist) => {
  const prev = playlist[Math.floor(Math.random() * playlist.length)];

  return({
    type: PREV_SONG,
    prevSong: prev,
  })
}

export const receiveSongErrors = (errors) => {
  return({
    type: RECEIVE_SONG_ERRORS,
    errors
  })
}

export const getAllSongs = () => dispatch => {
  return (
    Util.fetchSongs().then(
      (songs) => dispatch(receiveAllSongs(songs)), 
      (err) => dispatch(receiveSongErrors(err.responseJSON)))
  );
}

export const getSong = (id) => {
  return(
    Util.fetchSong.then(
      (res) => dispatch(receiveSong(res)),
      (err) => dispatch(receiveSongErrors(err.responseJSON)))
  );
}

export const createSong = (song) => dispatch => {
  return(
    Util.createSong(song).then(
      (res) => dispatch(receiveSong(res)), 
      (err) => dispatch(receiveSongErrors(err.responseJSON)))
  );
}

export const destroySong = (id) => dispatch => {
  return(
    Util.destroySong(id).then(
      (id) => dispatch(removeSong(id)),
      (err) => {
        dispatch(receiveSongErrors(err.responseJSON))
      }
    )
  );
}