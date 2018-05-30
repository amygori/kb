class SessionsController < ApplicationController

  def new
    # this action doesn't need to do anything except render the template
    # the new template is the login form
  end

  def create
    @user ||= User.find_by_email(params[:email])
    # the authenticate method comes from bcrypt
    # takes the password typed into the login form as an argument
    if @user && @user.authenticate(params[:password])
      # if we have a match for the user and password,
      # store the user_id in the session.
      # This is programmatically "logging in".
      # since it exists in the session, which extends across requests, it lets us identify a "current user"
      # see that method in ApplicationController
      session[:user_id] = @user.id
      flash[:msg] = "success"
      redirect_to root_path, notice: "You are now logged in"
    else
      flash[:msg] = "danger"
      redirect_to new_session_path, notice: "There was a problem logging you in. Please try again."
    end
  end

  def destroy
    # To programmatically "log out", we remove the user_id from the session.
    # Here we are doing that by setting it to nil.
    session[:user_id] = nil
    flash[:msg] = "info"
    redirect_to root_url, notice: "You've been logged out"
  end

end
