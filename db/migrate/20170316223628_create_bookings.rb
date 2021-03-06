class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false
      t.integer :room_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :party_size, null: false

      t.timestamps
    end

    add_index :bookings, :user_id
    add_index :bookings, :room_id
    add_index :bookings, :start_date
    add_index :bookings, :end_date
  end
end
