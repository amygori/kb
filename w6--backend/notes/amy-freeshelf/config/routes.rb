Rails.application.routes.draw do

  resources :users, except: [:index]
  resource :session, only: [:new, :create, :destroy]

  resources :books do
    resources :checkouts, only: [:new, :create, :destroy]
  end

  root 'books#index'
end
