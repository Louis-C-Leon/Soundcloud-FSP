export const fetchSongs = () => {
  return $.ajax({
    url: "api/songs",
    method: "get"
  })
}

export const createSong = (song) => {
  return $.ajax({
    url: "api/songs",
    method: "post",
    data: song,
    processData: false,
    contentType: false,
  })
}

export const destroySong = (id) => {
  return $.ajax({
    url: `api/songs/${id}`,
    method: "delete",
  })
}