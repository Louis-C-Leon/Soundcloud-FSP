class Api::SearchesController < ApplicationController 
  def search
    keyword = search_params[:keyword].downcase
    @songs = Song.where("lower(title) LIKE ? OR lower(genre) LIKE ?", "%#{keyword}%", "%#{keyword}%")
    @users = User.where(
      "lower(screen_name) LIKE ? OR lower(full_name) LIKE ?", "%#{keyword}%", "%#{keyword}%"
      ).includes(:songs)
    puts @songs
    puts @users
  end

  def suggest
    @songs = Song.where("lower(title) LIKE ?", "%#{keyword}%")
    @users = User.where("lower(full_name) LIKE ?", "%#{keyword}%")
  end

  private
  def search_params
    params.require(:search).permit(:keyword)
  end
end
