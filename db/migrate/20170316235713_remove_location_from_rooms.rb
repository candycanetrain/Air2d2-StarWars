class RemoveLocationFromRooms < ActiveRecord::Migration[5.0]
  def change
    remove_column :rooms, :location, :string
  end
end
