class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.welcome.subject
  #
  def welcome(user)
    @user = user
    @greeting = "Thanks for signing up #{@user.name}!"
    mail(
      to: @user.email,
      from: "amy@momentumlearn.com",
      subject: "Welcome, #{@user.name}!"
    )
  end
end
