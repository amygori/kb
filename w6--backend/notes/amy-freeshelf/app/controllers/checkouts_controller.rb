class CheckoutsController < ApplicationController

  def new
    @book = Book.find(params[:book_id])
    @user = current_user
    @checkout = Checkout.new
  end

  def create
    user = User.find_by_email(params[:email]) || User.find_by_id(params[:user_id])
    book = Book.find(params[:book_id])
    if book.checked_out?
      flash[:notice] = "#{book.title} is already checked out."
      flash[:msg] = 'alert'
      redirect_to book_url(book)
      return
    end
    @checkout = Checkout.new(user_id: params[:user_id], book_id: book.id)
    if @checkout.save
      flash[:msg] = "info"
      flash[:notice] = "#{book.title} has been checked out to you"
    end
    redirect_to book_url(book)
  end

  def delete
  end

  private
  def checkout_params
    params.require(:checkout).permit([:email, :book_id])
  end

end
