class AddLatToRooms < ActiveRecord::Migration[5.0]
  def change
    add_column :rooms, :lat, :float, null: false
    add_column :rooms, :lng, :float, null: false
  end
end
