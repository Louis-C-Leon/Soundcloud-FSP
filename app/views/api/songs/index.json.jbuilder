@songs.each do |curr_song|
  id = curr_song.id
  json.set! id do
    json.partial! './api/songs/song', song: curr_song
  end
end