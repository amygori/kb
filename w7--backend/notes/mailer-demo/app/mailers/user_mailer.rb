class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.users_mailer.signup.subject
  #
  def signup(user)
    @greeting = "Thanks for signing up, #{user.name}!"
    @user = user
    mail(
      to: user.email,
      subject: "Welcome #{user.name}!"
    )
  end
end
