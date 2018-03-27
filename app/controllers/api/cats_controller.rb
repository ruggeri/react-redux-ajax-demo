class Api::CatsController < ApplicationController
  def index
    @cats = Cat.all
    render json: @cats
  end

  def create
    @cat = Cat.new(cat_params)
    if @cat.save
      render json: @cat
    else
      # Unprocessable Entity.
      render json: @cat.errors.full_messages, status: 422
    end
  end

  private
  def cat_params
    params.require(:cat).permit(:name, :favorite_song, :is_liked)
  end
end








# ...
