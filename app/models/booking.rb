# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  room_id    :integer          not null
#  start_time :date             not null
#  end_time   :date             not null
#  party_size :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
  validates :user, :room, :user_id, :room_id, :start_date, :end_date, :party_size, presence: true
  validates :start_date, :end_date, overlap: { scope: 'room_id', message_content: 'or check out date already has a booking during that time. Please make another selection.' }
  validate :end_date_is_after_start_date, on: :create

  belongs_to :user
  belongs_to :room

  

  def end_date_is_after_start_date()
    return if start_date.blank? || end_date.blank?
    if end_date < start_date
      errors.add(:check_out_date, "cannot be before the check in date")
    end
  end


end
