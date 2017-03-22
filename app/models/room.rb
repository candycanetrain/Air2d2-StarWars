# == Schema Information
#
# Table name: rooms
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  city         :string           not null
#  price        :decimal(7, 2)    not null
#  description  :text             not null
#  bedrooms     :integer          not null
#  beds         :integer          not null
#  bathrooms    :integer          not null
#  homeType     :string           not null
#  amenities    :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  lat          :float            not null
#  lng          :float            not null
#  accommodates :integer          not null
#  img_url      :string           not null
#

class Room < ApplicationRecord
  validates :name, :city, :price, :lat, :lng, :description, :bedrooms, :beds, :bathrooms, :homeType, :accommodates, :img_url, presence: true

  has_many :bookings
  has_many :reviews
  has_many :users, through: :bookings, source: :user
  
  #logic to check for overlapping booking goes here
  #def overlapping/available(takes in start date and end date)
    #any bookings overlapping with this time frame?
  #end

end
