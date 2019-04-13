Rails.application.routes.draw do
  get '/stuff', to: 'application#stuff'
  root to: 'application#index'
end
