export const RECEIVE_UI_ERRORS = "RECEIVE_UI_ERRORS";
export const RECEIVE_PLAY_SONG = "RECEIVE_PLAY_SONG"
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const receiveUiErrors = (errors) => {
  return({
    type: RECEIVE_UI_ERRORS,
    errors,
  })
}

export const openModal = (name) => {
  return({
    type: OPEN_MODAL,
    modal: name,
  })
}

export const closeModal = () => {
  return({
    type: CLOSE_MODAL,
  })
}

export const receivePlayingSong = (song) => {
  return({
    type: RECEIVE_PLAY_SONG,
    song
  })
}