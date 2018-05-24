Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :grades
  resources :assignments

  get 'login', to: 'logins#new'
  get 'logout', to: 'logins#destroy', as: 'logout'
  resource :login
  
  root 'assignments#index'
end
