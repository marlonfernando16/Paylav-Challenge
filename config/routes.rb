Rails.application.routes.draw do
  get 'sales/index'
  post '/sale', to: 'sales#create'
  root 'sales#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
