require 'application_system_test_case'

class AuthenticationTest < ApplicationSystemTestCase
  test 'creating and logging in a new User' do
    # Visit the home page
    visit root_url
    assert_selector 'h1', text: 'FreeShelf'

    # Click the New User link
    click_link 'Sign up'

    # Submit the form
    fill_in 'Email', with: 'user1@example.com'
    fill_in 'Password', with: 'secret'
    fill_in 'Password confirmation', with: 'secret'
    click_button 'Register'

    assert current_path, root_url
  end

  test 'checking out a book' do
    user = users(:one)
      # visit the home page
      visit root_url
      assert_selector 'h1', text: 'FreeShelf'

      # click a book title
      click_link 'title-link', match: :first
      # click Check this book out
      click_link 'Check this book out'
      # click Yes Check Out
      click_button 'Yes, Check out'

      assert_selector '.book-entry'
  end
end