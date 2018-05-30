require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:one)
    @other_user = users(:two)
  end

  test "should get new user form" do
    get new_user_url
    assert_response :success
  end

  test "should create a new user" do
    assert_difference('User.count') do
      post users_path, params: {user: { name: 'Trixie', email: 'trix@dogs.com', password: default_password }}
    end
  end

  test "should destroy a user" do
    assert_difference('User.count', -1) do
      delete user_url(@other_user)
    end
    assert_redirected_to root_url
  end

end
