Rails.application.routes.draw do
  resources :users, only: %i[new create]
  post 'users/new', to: 'users#create'
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'welcome', to: 'sessions#welcome'
  delete 'logout', to: 'sessions#destroy'

  resources :projects do
    resources :paragraphs
  end
  get 'contact/new'
  get 'algorithms' => 'algorithms#index'
  get 'home' => 'home#index'
  root 'home#index'
end
