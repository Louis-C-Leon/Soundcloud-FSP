export const fetchSongs = () => {
  return $.ajax({
    url: "api/songs",
    method: "get"
  })
}

export const fetchSong = (id) => {
  return $.ajax({
    url: `api/songs/${id}`
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

export const shufflePlaylist = (playlist) => {
  for(let i = playlist.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [playlist[i], playlist[j]] = [playlist[j], playlist[i]];
  }
}