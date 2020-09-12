Rails.application.routes.draw do
  get 'contact/new'
  get 'algorithms' => 'algorithms#index'
  get 'home' => 'home#index'
  root 'home#index'
end
