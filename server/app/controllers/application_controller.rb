require 'json'

class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token  

  def create
    body = JSON.parse(request.body.read)

    @workout = Workout.create({
      :title => body['title'],
      :textdata => body['text']
    })
  end

  def read
    render html: "read route"
  end

  def delete
    render html: "delete route"
  end
end
