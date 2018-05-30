require 'test_helper'

class CheckoutsControllerTest < ActionDispatch::IntegrationTest
  def test_get_new
    get new_checkouts_url
    assert_response :success
  end

  def test_create
    get checkouts_create_url
    assert_response :success
  end

  def test_delete
    get checkouts_delete_url
    assert_response :success
  end

end
