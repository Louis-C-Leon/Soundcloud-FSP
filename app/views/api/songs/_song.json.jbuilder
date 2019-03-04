json.extract! song, :id, :title, :genre, :user_id, :release_date
json.songUrl url_for(song.song_file)

if song.image.attached?
  json.imageUrl url_for(song.image)
end