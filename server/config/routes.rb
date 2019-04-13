Rails.application.routes.draw do
  post '/create', to: 'application#create'
  get '/read', to: 'application#read'
  post '/delete', to: 'application#delete'
end
