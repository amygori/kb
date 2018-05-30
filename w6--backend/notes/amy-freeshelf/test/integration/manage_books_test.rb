require 'test_helper'

class ManageBooksTest < ActionDispatch::IntegrationTest

  test "should get edit if book was created by current_user" do
    # @book.update(creator: @user)
    get edit_book_path(@book)
    assert_response :success
  end

  test "should get redirected from edit if book was not created by current_user" do
    get edit_book_path(@book)
    assert_response :redirect
  end
end
