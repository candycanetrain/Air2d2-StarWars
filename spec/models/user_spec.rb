require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:session_token) }

  describe "associations" do
    # "it" refers to an instance of the User class here because we have not explicitly specified a subject
    it { should have_many(:bookings)}
    it { should have_many(:reviews)}
  end
end
