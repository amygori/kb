ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'
require 'bcrypt'
require 'capybara/rails'
require 'capybara/minitest'

module TestPasswordHelper
  def default_password_digest
    BCrypt::Password.create(default_password, cost: 4)
  end

  def default_password
    "password"
  end
end
class ActiveSupport::TestCase
  include TestPasswordHelper
  fixtures :all

#   def login(user = nil, password = nil)
#     user ||= users(:one)
#     password ||= default_password
#     visit login_path
#     fill_in "Email", :with => user.email
#     fill_in "Password", :with => password
#     click_button "Login"
#     user
#   end
end

# https://github.com/teamcapybara/capybara
class ActionDispatch::IntegrationTest
  # Make the Capybara DSL available in all integration tests
  include Capybara::DSL
  # Make `assert_*` methods behave like Minitest assertions
  include Capybara::Minitest::Assertions

  # Reset sessions and driver between tests
  # Use super wherever this method is redefined in your individual test classes
  def teardown
    Capybara.reset_sessions!
    Capybara.use_default_driver
  end
end
