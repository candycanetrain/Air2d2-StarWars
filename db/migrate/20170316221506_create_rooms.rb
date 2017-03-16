class CreateRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :rooms do |t|
      t.string :name, null: false
      t.string :city, null: false
      t.column :price, :decimal, precision: 7, scale: 2, null: false
      t.string :location, array: true, null: false
      t.text :description, null: false
      t.integer :bedrooms, null: false
      t.integer :beds, null: false
      t.integer :bathrooms, null: false
      t.string :homeType, null: false
      t.integer :accomdates, null: false
      t.text :amenities

      t.timestamps
    end

    add_index :rooms, :name
    add_index :rooms, :city
  end
end
