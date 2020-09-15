class SessionsController < ApplicationController
  skip_before_action :authorized, only: %i[new create welcome]

  def new; end

  def create
    @user = User.find_by(username: params[:username])
    if @user&.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to '/admin'
    else
      redirect_to '/login'
    end
  end

  def login; end

  def welcome; end

  def destroy
    session.delete(:user_id)
    @current_user = nil
    redirect_to '/admin'
  end
end
