class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    puts user_params
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
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
