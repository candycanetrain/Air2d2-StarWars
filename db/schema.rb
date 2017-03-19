# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170318235457) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "room_id",    null: false
    t.date     "start_time", null: false
    t.date     "end_time",   null: false
    t.integer  "party_size", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["room_id"], name: "index_bookings_on_room_id", using: :btree
    t.index ["user_id"], name: "index_bookings_on_user_id", using: :btree
  end

  create_table "rooms", force: :cascade do |t|
    t.string   "name",                                 null: false
    t.string   "city",                                 null: false
    t.decimal  "price",        precision: 7, scale: 2, null: false
    t.text     "description",                          null: false
    t.integer  "bedrooms",                             null: false
    t.integer  "beds",                                 null: false
    t.integer  "bathrooms",                            null: false
    t.string   "homeType",                             null: false
    t.text     "amenities"
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.float    "lat",                                  null: false
    t.float    "lng",                                  null: false
    t.integer  "accommodates",                         null: false
    t.index ["city"], name: "index_rooms_on_city", using: :btree
    t.index ["name"], name: "index_rooms_on_name", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "name",            null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

end
