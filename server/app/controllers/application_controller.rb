class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    render html: "hello, world!"
  end

  def create
    render html: "create route"
  end

  def read
    render html: "read route"
  end

  def delete
    render html: "delete route"
  end
end
