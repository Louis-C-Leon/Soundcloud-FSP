class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def create
    user = User.new(user_params)
    user.save!
    login(user)
    render json: current_user
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def update
    
  end

  def destroy

  end

  private

  def user_params
    params.require(:user).permit(:email, :screen_name, :full_name, :password)
  end

end
