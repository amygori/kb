Rails.application.routes.draw do
  resources :users
  get 'login/new'
  get 'login/create'
  post 'login/create'
  get 'login/destroy'

  root 'users#index'
end
