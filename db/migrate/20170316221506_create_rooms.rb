class CreateRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :rooms do |t|
      t.string :name, null: false
      t.integer :city_id, null: false
      t.array :location, null: false
      t.text :description, null: false
      t.decimal{'7,2'} :price, null: false
      t.integer :bedrooms, null: false
      t.integer :beds, null: false
      t.integer :bathrooms, null: false
      t.string :homeType, null: false
      t.integer :accomdates, null: false
      t.text :amenities

      t.timestamps
    end

    add_index :city_id 
  end
end
