class Api::UsersController < ApplicationController

  def index
    @users = User.includes(:songs).all
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def check_registered
    render json: User.registered?(user_params[:email])
  end

  def show
    @user = User.includes(:songs).find_by(id: params[:id])
    if @user
      render :show;
    else
      render json: ["User not found"] ,status: 404;
    end
    
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
