class Api::BookingsController < ApplicationController
  def new
  end
  
  def create
    @booking = Booking.new(booking_params)
    @booking.user = current_user
    if @booking.save
      render 'api/bookings/show'
    elsif !current_user
      render( json: ["Please log in or sign up to make a booking"], status:401)
    else
      render json: @booking.errors.full_messages, status:422
    end
  end

  def index
    @bookings = current_user.bookings
  end

  def show
  end

  def update
    @booking = current_user.bookings.find(params[:id])

    if @booking.update(booking_params)
      render 'api/bookings/show'
    else
      render json: @booking.errors.full_messages, status:422
    end
  end

  def edit
  end

  def destroy
    @booking = Booking.find_by_id(params[:id])
    @booking.destroy
    render json: @booking, status: 200
  end

  private

  def booking_params
    params.require(:booking).permit(:id, :user_id, :room_id, :start_date, :end_date, :party_size)
  end

end
