class BooksController < ApplicationController

  def index
    @books = Book.all
  end

  def new
    @book = Book.new
  end

  def create
    @book = Book.new(book_params)
    @book.creator = current_user || User.find_by_email(params[:email])
    if @book.save
      @books = Book.all
      render :index
    else
      render :new
    end
  end

  def show
    @book = Book.find(params[:id])
    @checkout = Checkout.new if !@book.checked_out?
  end

  def edit
    @book = Book.find(params[:id])
  end

  def update
    @book = Book.find(params[:id])
    if @book.update(book_params)
      flash[:notice] = "Book successfully updated!"
      flash[:msg] = "success"
      redirect_to books_url
    else
      render :edit
    end
  end

  def destroy
    @book = Book.find(params[:id])
    title = @book.title
    if @book.destroy
      flash[:notice] = "#{title} has been deleted!"
      flash[:msg] = "warning"
    else
    flash[:notice] = "There was a problem deleting #{title}."
    flash[:msg] = "warning"
    end
    redirect_to books_url
  end

  private
    def book_params
      params.require(:book).permit(:title, :author, :url, :description)
    end
end
