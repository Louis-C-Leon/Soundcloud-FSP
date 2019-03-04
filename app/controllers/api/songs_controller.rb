class Api::SongsController < ApplicationController

  def show
    @song=Song.find_by(id: params[:id])
  end


  def index
    @songs = Song.all
  end

  def create
    puts(params)
    @song=Song.new(song_params);
    if @song.save
      render :show
    else
      render json: @song.errors.full_messages
    end

  end

  def update

  end

  def destroy
    @song = Song.find_by(id: params[:id])
    Song.destroy(params[:id])
    render :show
  end


  private

  def song_params
    params.require(:song).permit(:title, :release_date, :image, :user_id, :genre, :song_file);
  end
end
