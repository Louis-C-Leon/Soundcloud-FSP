json.extract! user, :id, :email, :screen_name, :full_name

if user.image.attached? 
  json.photoUrl url_for(user.image)
end

user_songs = []
user.songs.each{ |song| user_songs << song.id};

json.songs user_songs