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
    all_rooms = Room.all

    if number_to_display != 0
      @rooms = Room.all.limit(number_to_display)
      @rooms
    elsif city != nil
      @rooms = Room.all.where("lower(city) LIKE lower(?)", "%#{city}%")
    else
      @rooms = all_rooms
    end
  end

  def show
    @room = Room.find_by_id(params[:id])
  end

  private

  def room_params
    params.require(:room).permit(:id, :name, :city, :description, :lat, :lng, :price, :bedrooms, :beds, :bathrooms, :homeType, :accommodates, :amenities, :number_to_display, :startDate, :endDate, :party_size)
  end

  def number_to_display
    room_params[:number_to_display].to_i;
  end

  def city
    room_params[:city];
  end

  def party_size
    room_params[:party_size];
  end

  def start_date
    room_params[:startDate];
  end

  def end_date
    room_params[:endDate];
  end




end
