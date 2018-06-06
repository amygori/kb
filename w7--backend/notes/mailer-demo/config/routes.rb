Rails.application.routes.draw do
  resources :users do
    member do
      get 'preview'
    end
  end

end
