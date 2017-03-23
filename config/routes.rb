Rails.application.routes.draw do



  namespace :api do
    get 'reviews/create'
  end

  namespace :api do
    get 'reviews/index'
  end

  namespace :api do
    get 'reviews/show'
  end

  namespace :api do
    get 'reviews/destroy'
  end

  namespace :api do
    get 'reviews/edit'
  end

  namespace :api do
    get 'reviews/update'
  end

  namespace :api do
    get 'reviews/new'
  end

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :rooms, only: [:create, :index, :show]
    resources :bookings, only: [:create, :show, :destroy, :update, :index]
    resources :reviews, only: [:create, :show, :destroy, :update, :index, :edit]

  end

  root "static_pages#root"
  
end
