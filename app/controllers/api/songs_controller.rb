class Api::SongsController < ApplicationController

  before_action :work_plz

  def work_plz
    headers['Last-Modified'] = Time.now.httpdate
  end

  def show
    @song=Song.find_by(id: params[:id])
  end


  def index
    @songs = Song.all.limit(5)
  end

  def create
    @song=Song.new(song_params)

    if @song.save
      render :show
    else
      render json: @song.errors.full_messages
    end
  end

  def update

  end

  def destroy
    id = params[:id]
    Song.destroy(id)
    render json: id
  end


  private

  def song_params
    params.require(:song).permit(:title, :release_date, :image, :user_id, :genre, :song_file, :description);
  end
end
