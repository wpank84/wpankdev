Rails.application.routes.draw do
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'admin', to: 'sessions#welcome'
  delete 'logout', to: 'sessions#destroy'

  resources :projects do
    resources :paragraphs
  end
  get 'contact/new'
  get 'algorithms' => 'algorithms#index'
  get 'home' => 'home#index'
  root 'home#index'
end
