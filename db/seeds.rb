# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "Han Solo", email: "hansolo@air2d2.com", password: "chewbacca");
User.create(name: "Chewbacca", email: "chewbacca@air2d2.com", password: "hansolo");
User.create(name: "Luke Skywalker", email: "lukeskywalker@air2d2.com", password: "lukeskywalker");
User.create(name: "Darth Vader", email: "darthvader@air2d2.com", password: "darthvader");
User.create(name: "Yoda", email: "yoda@air2d2.com", password: "yoda1234");
User.create(name: "Leia Organa", email: "leiaorgana@air2d2.com", password: "leiaorgana");


Room.create(name: "The Lars Homestead", city: "Tatooine", price: "4242.89", lat: 37.780437, lng: -122.513693, description: "A quaint moisture farm in the desert plains of Tatooine, this spacious home has no-frills, practical comfort with room for 4.", bedrooms: 4, beds: 4, bathrooms: 4, homeType: "farm house", img_url: "http://res.cloudinary.com/candycanetrain/image/upload/c_scale,w_400/v1489949473/Larshomestead2_g5bjb2.png", accommodates: 4);

Room.create(name: "Yoda's Hut", city: "Dagobah", price: "4242.89", lat: 37.802480, lng: -122.472839, description: "The home of a legendary jedi master, staying here will give you a glimpse into his finals days. Also, great hiking trails nearby, perfect for training to be a jedi.", bedrooms: 1, beds: 1, bathrooms: 1, homeType: "hut", img_url: "http://res.cloudinary.com/candycanetrain/image/upload/c_scale,w_400/v1489946010/yodas-hut_a3d1133d_z1gkf3.jpg", accommodates: 2);

Room.create(name: "Fortified Compound", city: "Mustafar", price: "4242.89", lat: 37.889486, lng: -122.610855, description: "Spectacular views of the lava flows on Mustafar, this fortress has a very isolated location and top of the line security for all of your Sith secrets. Shielded from the intense heat and magma so you can enjoy your stay without burning to a crisp.", bedrooms: 6, beds: 12, bathrooms: 4, homeType: "fortress", img_url: "http://res.cloudinary.com/candycanetrain/image/upload/c_scale,h_400/v1489946009/SidiousMustafarLab-CotF_oxhfn2.png", accommodates: 12);

Room.create(name: "Padme's Apartment", city: "Coruscant", price: "4242.89", lat: 37.357714, lng: -121.920776, description: "A luxury apartment in the heart of Coruscant, this apartment has a prime location, just minutes away from the Senate building and the Jedi Temple. Spacious and luxurious with many amenities and a breathtaking view of the city. Perfect for romantic nights with a secret lover.", bedrooms: 2, beds: 2, bathrooms: 2, homeType: "apartment", img_url: "http://res.cloudinary.com/candycanetrain/image/upload/c_scale,h_400/v1489946010/Padmebalcony_plx4sg.png", accommodates: 4);


Room.create(name: "Lakeside Villa", city: "Naboo", price: "4242.89", lat: 37.357714, lng: -121.920776, description: "A luxury villa on Varykino, an island on Naboo. Fit for nobility, royalty, and future Sith.", bedrooms: 8, beds: 8, bathrooms: 8, homeType: "villa", img_url: "http://res.cloudinary.com/candycanetrain/image/upload/v1490091970/LakeRetreat2_rp8u6l.jpg", accommodates: 16);
Room.create(name: "Ewok Treehut", city: "Endor", price: "4242.89", lat: 37.357714, lng: -121.920776, description: "A typical home of an Ewok family. Sparse, but great for meeting the locals and exploring the forests of Endor.", bedrooms: 1, beds: 1, bathrooms: 1, homeType: "treehouse", img_url: "http://res.cloudinary.com/candycanetrain/image/upload/v1490091980/ST-ewokvillage_lzlubs.jpg", accommodates: 2);
Room.create(name: "Mos Eisley Home", city: "Tatooine", price: "4242.89", lat: 37.357714, lng: -121.920776, description: "A home in Mos Eisley. Beware of scum and villainy.", bedrooms: 2, beds: 2, bathrooms: 1, homeType: "house", img_url: "http://res.cloudinary.com/candycanetrain/image/upload/v1490091974/Mos_Eisley_home_jqot51.jpg", accommodates: 4);
Room.create(name: "Carbon Freeze Chamber", city: "Bespin", price: "4242.89", lat: 37.357714, lng: -121.920776, description: "A perfect place to get away from the summer heat or pass the time.", bedrooms: 1, beds: 0, bathrooms: 0, homeType: "chamber", img_url: "http://res.cloudinary.com/candycanetrain/image/upload/v1490091969/Carbon-freeze_chamber_SWB_f93zh0.png", accommodates: 1);


Booking.create(user_id: 1, room_id: 1, start_date: DateTime.new(2016, 3,20), end_date: DateTime.new(2016, 3, 25), party_size: 2);
Booking.create(user_id: 1, room_id: 2, start_date: DateTime.new(2016, 3,26), end_date: DateTime.new(2016, 3, 28), party_size: 2);
Booking.create(user_id: 1, room_id: 3, start_date: DateTime.new(2016, 3,30), end_date: DateTime.new(2016, 4, 5), party_size: 2);
Booking.create(user_id: 1, room_id: 4, start_date: DateTime.new(2016, 4,8), end_date: DateTime.new(2016, 4, 20), party_size: 2);

Booking.create(user_id: 3, room_id: 1, start_date: DateTime.new(2016, 3,26), end_date: DateTime.new(2016, 3, 27), party_size: 3);
Booking.create(user_id: 3, room_id: 4, start_date: DateTime.new(2016, 3,28), end_date: DateTime.new(2016, 3, 29), party_size: 3);
Booking.create(user_id: 3, room_id: 2, start_date: DateTime.new(2016, 3,30), end_date: DateTime.new(2016, 4, 1), party_size: 3);
Booking.create(user_id: 3, room_id: 1, start_date: DateTime.new(2016, 4,2), end_date: DateTime.new(2016, 4, 3), party_size: 3);

Review.create(user_id: 1, room_id: 1, body: "What a wonderful place to stay", rating: 5)
Review.create(user_id: 1, room_id: 2, body: "What an awful place to stay", rating: 5)
Review.create(user_id: 1, room_id: 1, body: "What a wonderful place to stay", rating: 3)
Review.create(user_id: 1, room_id: 1, body: "What an awful place to stay", rating: 2)
Review.create(user_id: 1, room_id: 1, body: "What a wonderful place to stay", rating: 1)
Review.create(user_id: 1, room_id: 2, body: "What an awful place to stay", rating: 3)
Review.create(user_id: 1, room_id: 1, body: "What a wonderful place to stay", rating: 4)
Review.create(user_id: 1, room_id: 1, body: "What an awful place to stay", rating: 5)