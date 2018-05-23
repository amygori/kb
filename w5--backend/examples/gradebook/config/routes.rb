Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :grades
  resources :assignments

  resource :login
  get 'login', to: 'logins#new'
  get 'logout', to: 'logins#destroy', as: 'logout'

  root 'grades#index'
end
