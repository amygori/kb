require 'test_helper'
require 'capybara'

class SessionsControllerTest < ActionDispatch::IntegrationTest
  def setup
  @user = users(:one)
  end

  def test_get_login_form
    get new_session_url
    assert_response :success
  end

  def test_redirect_to_root_on_login
    post session_url, params: { email: @user.email, password: "validpassword" }
    assert_equal "You are now logged in", flash[:notice]
    assert_redirected_to root_path
  end

  def test_redirect_to_login_form_on_failed_login
    post session_url, params: { email: @user.email, password: "invalidpassword" }
    assert_redirected_to new_session_path
  end

  def test_redirect_on_logout
    delete session_url
    assert_redirected_to root_path
    assert_equal "You've been logged out", flash[:notice]
  end
end
