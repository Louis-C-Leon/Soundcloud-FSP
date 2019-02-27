class Api::SessionsController < ApplicationController

  def create
    if current_user
      render json: ["Already logged in!"], status: 401
    else
      @user = User.find_by_credentials(session_params[:email], session_params[:password])
      if @user
        login(@user)
        render 'api/users/show'
      else
        render json: ["Invalid credentials"], status: 401
      end
    end
  end

  def destroy
    user = current_user
    if user
      logout
      render json: ["Success!"]
    else
      render json: ["Nobody logged in"], status: 404
    end
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
  
end
