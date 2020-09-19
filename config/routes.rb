Rails.application.routes.draw do
  devise_for :admins, skip: %i[registrations confirmations password]
  devise_scope :admin do
    get 'login', to: 'devise/sessions#new'
    post 'login', to: 'devise/sessions#create'
    delete 'logout', to: 'devise/sessions#destroy'
  end

  resources :projects do
    resources :paragraphs
  end
  get 'home' => 'home#index'
  get 'about', to: 'about#index'
  root 'home#index'
end
