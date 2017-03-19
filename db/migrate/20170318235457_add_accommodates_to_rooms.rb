class AddAccommodatesToRooms < ActiveRecord::Migration[5.0]
  def change
    add_column :rooms, :accommodates, :integer, null: false
  end
end
