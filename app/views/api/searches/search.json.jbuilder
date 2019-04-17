@songs.each do |curr_song|
  id = curr_song.id
  json.set! id do
    json.partial! './api/songs/song', song: curr_song
  end 
end

@users.each do |curr_user|
  id = curr_user.id
  json.set! id do
    json.partial! './api/users/flat_user', user: curr_user
  end
end