# class ApplicationController < ActionController::API
#   include ActionController::HttpAuthentication::Basic::ControllerMethods
#   before_action :authenticate, except: :index

#   def authenticate
#     authenticate_or_request_with_http_basic do |username, password|
#       username == "amy" && password == "password"
#     end
#   end
# end

# class ApplicationController < ActionController::API
#   before_action :verify_authentication

#   def verify_authentication
#     render json: { error: "You do not have permission to access these resources" }, status: :unauthorized
#   end
# end

class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods
  # we need this because it is not included automatically in api-only apps
  # this module is where the `.authenticate_with_http_token` method comes from
  before_action :verify_authentication

  def verify_authentication
    user = authenticate_with_http_token do |token, options|
      User.find_by(api_token: token)
    end

    unless user
      render json: { error: "You do not have permission to access these resources" }, status: :unauthorized
    end
  end

end