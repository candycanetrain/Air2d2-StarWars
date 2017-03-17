Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :rooms, only: [:create, :index, :show]
  end

  root "static_pages#root"
  
end
