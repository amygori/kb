Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resource :session, only: :create
      resources :cats
    end
  end
end