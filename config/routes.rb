Rails.application.routes.draw do
  namespace :api do
    get 'room/create'
  end

  namespace :api do
    get 'room/destroy'
  end

  namespace :api do
    get 'room/index'
  end

  namespace :api do
    get 'room/show'
  end

  namespace :api do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
  
end
