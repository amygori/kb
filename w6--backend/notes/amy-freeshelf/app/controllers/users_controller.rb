class UsersController < ApplicationController
  before_action :check_if_user_exists, only: :create

  def new
    redirect_to user_path(current_user) if current_user
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      flash[:msg] = "success"
      render :show, notice: "Welcome! You are logged in."
    else
      render :new, notice: "Whoops, something went wrong. Please try again."
    end
  end

  def show
    @user = User.find(params[:id])
    @books_created = @user.books_created
    @books_checked_out = @user.books_checked_out
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      flash[:notice] = "Your account has been deleted."
      flash[:msg] = "warning"
    else
      flash[:notice] = "Something went wrong."
      flash[:msg] = "warning"
    end
    redirect_to root_path
  end


  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

  def check_if_user_exists
    user = User.find_by_email(params[:user][:email])
    if user
    flash[:msg] = "warning"
    redirect_to new_session_url, notice: "An account with that email address already exists. Please log in."
    end
  end
end
