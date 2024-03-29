Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#home'
  get 'gallery' => 'pages#gallery'
  get 'collection' => 'pages#collection'
  resources :furnitures, only: [:show, :index]
  resources :categories, only: [:show]
end
