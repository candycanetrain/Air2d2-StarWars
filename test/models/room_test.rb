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

require 'test_helper'

class RoomTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
