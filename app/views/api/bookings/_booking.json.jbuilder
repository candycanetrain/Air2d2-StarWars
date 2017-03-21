json.extract! booking, :id, :start_date, :end_date, :party_size

json.set! :room_name, booking.room.name
json.set! :img_url, booking.room.img_url


