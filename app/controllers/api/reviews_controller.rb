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
    @reviews = current_user.reviews
  end

  def show
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
  
end
