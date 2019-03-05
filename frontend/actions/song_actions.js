import * as Util from "../util/song_util";

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS";
export const REMOVE_SONG = "REMOVE_SONG";
export const PLAY_SONG = "PLAY_SONG"

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

export const playSong = (id) => {
  return({
    type: PLAY_SONG,
    songId: id,
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