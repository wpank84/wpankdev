Rails.application.routes.draw do
  resources :projects do
    resources :paragraphs
  end
  get 'contact/new'
  get 'algorithms' => 'algorithms#index'
  get 'home' => 'home#index'
  root 'home#index'
end
