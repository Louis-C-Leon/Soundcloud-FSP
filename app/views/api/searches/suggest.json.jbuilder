json.songs do 
  json.partial! './api/songs/index', songs: @songs
end

json.users do
  json.partial! './api/users/index', users: @users
end