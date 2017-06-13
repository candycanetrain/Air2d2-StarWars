# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  room_id    :integer          not null
#  body       :text             not null
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :user, :room, :user_id, :room_id, :body, :rating, presence: true
  belongs_to :user
  belongs_to :room

  before_validation :ensure_review_belongs_to_user 

  def ensure_review_belongs_to_user()
    errors.add(:user, "never booked this room. Please book this room and then leave a review after your stay.") if user.bookings.none? {|booking| booking.room_id == room_id}
  end
end
