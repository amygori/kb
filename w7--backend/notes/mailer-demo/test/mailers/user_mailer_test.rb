require 'test_helper'

class UserMailerTest < ActionMailer::TestCase
  def setup
    @user = users(:one)
    @mail = UserMailer.signup(@user)
  end

  test "signup email content" do
    assert_equal "Welcome #{@user.name}!", @mail.subject
    assert_equal [@user.email], @mail.to
    assert_equal ["from@example.com"], @mail.from
    assert_match "You've signed up to be a new user!", @mail.body.encoded
  end

  test "signup is delivered" do
     assert_emails 1 do
      @mail.deliver_now
    end
  end

end
