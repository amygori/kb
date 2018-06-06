# Preview all emails at http://localhost:3000/rails/mailers/users_mailer
class UserMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/users_mailer/signup
  def signup
    user = User.find_by_email('amy@momentumlearn.com')
    UserMailer.signup(user)
  end

end
