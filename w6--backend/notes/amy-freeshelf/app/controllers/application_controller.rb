class ApplicationController < ActionController::Base

  helper_method :current_user

protected
  def current_user
    # Putting this method here gives us access to it in every controller that inherits from it
    # Because we stored the user_id in session#create in the SessionsController,
    # we have access to it in the session, which extends across requests
    @current_user ||= User.find_by(id: session[:user_id])
  end

end
