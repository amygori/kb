require 'test_helper'
require 'minitest/pride'
class BooksControllerTest < ActionDispatch::IntegrationTest

  def setup
    @book = books(:one)
  end

  def test_get_index
    get books_path
    assert_response :success
  end

  def test_get_new
    get new_book_path
    assert_response :success
  end

  def test_create_books
    assert_difference('Book.count') do
      post books_path, params: {book: { url: 'example.com', description: 'A terrifying book', title: 'How to Train Your Dragon' }}
    end
    assert_redirected_to book_path(@book)
  end

  test "should show book" do
    get book_path(@book)
    assert_response :success
  end

  test "should update book" do
    patch book_path(@book), params: { book: { url: @book.url, description: @book.description, title: @book.title }}
    assert_response :success
  end

  test "should delete book" do

  end

end