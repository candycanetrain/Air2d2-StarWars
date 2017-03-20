class Api::RoomsController < ApplicationController
  def create
    @room = Room.new(room_params)
    if @room.save
      render "api/rooms/#{params[:id]}"
    else
      render json: @room.errors.full_messages,status: 422
    end
  end

  def destroy
  end

  def index
    #logic to filter rooms here. (where(parmas))
    @rooms = Room.all
  end

  def show
    @room = Room.find_by_id(params[:id])
  end

  private

  def room_params
    params.require(:room).permit(:id, :name, :city, :description, :location, :price, :bedrooms, :beds, :bathrooms, :homeType, :accommodates, :amenities)
  end
end
