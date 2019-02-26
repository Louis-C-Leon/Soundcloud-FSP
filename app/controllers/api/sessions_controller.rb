class SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(session_params[:email], session_params[:password])
    if user
      login(user)
      render json: user
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    user = current_user
    if user
      logout(user)
      render json: "Success!"
    else
      render json: ["Nobody logged in"], status: 404
    end
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
  
end
