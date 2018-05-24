class ApplicationController < ActionController::Base
  helper_method :current_user

  def current_user    
    if session[:user_id]
      @user ||= User.find(session[:user_id])
      return @user
    end
  end

  def ensure_logged_in
    unless current_user
      session[:redirect_url] = request.original_url
      redirect_to login_url, alert: "You must be logged to do that."
    end
  end
end
