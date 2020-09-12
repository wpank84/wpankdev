Rails.application.routes.draw do
  resources :paragraphs
  resources :projects
  get 'contact/new'
  get 'algorithms' => 'algorithms#index'
  get 'home' => 'home#index'
  root 'home#index'
end
