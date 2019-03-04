json.extract! user, :id, :email, :screen_name, :full_name

if user.image.attached? 
  json.photoUrl url_for(user.image)
end

