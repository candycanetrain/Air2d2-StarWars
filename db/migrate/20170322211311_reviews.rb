class Reviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :room_id, null: false
      t.text  :body, null: false
      t.integer :rating, null: false

      t.timestamps
    end

    add_index :reviews, :user_id
    add_index :reviews, :room_id
  end
end
