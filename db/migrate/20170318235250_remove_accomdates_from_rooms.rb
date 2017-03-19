class RemoveAccomdatesFromRooms < ActiveRecord::Migration[5.0]
  def change
    remove_column :rooms, :accomdates, :integer
  end
end
