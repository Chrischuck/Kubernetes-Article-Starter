require 'json'

class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token  

  def create
    body = JSON.parse(request.body.read)

    workout = Workout.create({
      :title => body['title'],
      :textdata => body['text'],
      :createdat => body['date']
    })

    render json: { workoutId: workout.id }
  end

  def read
    render json: Workout.all
  end

  def delete
    params = request.query_parameters

    id = params["id"]

    if !id 
      render json: { error: "No ID present" }
      return
    end
    
    workout = Workout.find_by(id: id)
    workout.destroy
    render json: { workoutId: workout['id'] }
  end
end
