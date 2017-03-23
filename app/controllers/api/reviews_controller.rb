class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.user = current_user
    
    if @review.save
      render 'api/reviews/show'
    elsif !current_user
      render( json: ["Please log in or sign up to leave a review."], status:401)
    else
      render json: @review.errors.full_messages, status:422
    end

  end

  def index

    if params[:room_id]
      @reviews = Review.all.where("room_id = ?", params[:room_id])
    elsif params[:user_id]
      @reviews = Review.all.where("user_id = ?", params[:user_id])
    else
      render json: "No reviews right now", status: 200
    end
  end

  def show
    @review = Review.find_by_id(review_params)
    if @review
      render 'api/reviews/show'
    else
      render( json: ["No reviews right now"], status:401)
    end
  end

  def destroy
  end

  def edit
  end

  def update
    @review = current_user.reviews.find_by_id(params[:id])

    if @review.update(review_params)
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status:422
    end
  end

  def new
  end

  private
  def review_params
    params.require(:review).permit(:user_id, :user, :room, :room_id, :body, :rating)
  end

  def room_id
    review_params[:room_id];
  end
  def user_id
    review_params[:user_id];
  end

  def rating
    review_params[:rating];
  end
  
end
