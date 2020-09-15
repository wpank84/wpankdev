Rails.application.routes.draw do
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'admin', to: 'sessions#welcome'
  delete 'logout', to: 'sessions#destroy'

  resources :projects do
    resources :paragraphs
  end
  get 'home' => 'home#index'
  get 'about', to: 'about#index'
  root 'home#index'
end
