Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :index, :create, :update, :destroy]
    resources :songs, only: [:show, :index, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resource :search, only: [:create]
    get "check_registered", to: "users#check_registered"
  end

  root "static_pages#root"

end
