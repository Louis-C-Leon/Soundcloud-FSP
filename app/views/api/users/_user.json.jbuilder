json.extract! user, :id, :email, :screen_name, :full_name

if user.image.attached? 
  json.photoUrl url_for(user.image)
end

if user.cover_image.attached? 
  json.coverPhotoUrl url_for(user.cover_image)
end

json.songs do
  user.songs.each do |curr_song|
    id = curr_song.id
    json.set! id do
      json.extract! curr_song, :id, :title, :genre, :user_id, :release_date
      json.songUrl url_for(curr_song.song_file)

      if curr_song.image.attached?
        json.imageUrl url_for(curr_song.image)
      end
    end
  end
end

