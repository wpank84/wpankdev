class UsersController < ApplicationController
  skip_before_action :authorized, only: %i[new create]

  def new; end

  def create
    @user = User.create(params[:username, :password])
    session[:user_id] = @user.id
    redirect_to '/welcome'
  end
end
