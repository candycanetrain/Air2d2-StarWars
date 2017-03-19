class AddImgUrlToRooms < ActiveRecord::Migration[5.0]
  def change
    add_column :rooms, :img_url, :string, null: false
  end
end
