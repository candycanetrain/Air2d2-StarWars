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

Room.create(name: "Fortified Compound", city: "Mustafar", price: "4234.54", lat: 37.889486, lng: -122.610855, description: "Spectacular views of the lava flows on Mustafar, this fortress has a very isolated location and top of the line security for all of your Sith secrets. Shielded from the intense heat and magma so you can enjoy your stay without burning to a crisp.", bedrooms: 6, beds: 12, bathrooms: 4, homeType: "fortress", img_url: "http://res.cloudinary.com/candyentropy/image/upload/v1493100178/SidiousMustafarLab-CotF_oxhfn2_k6rgox.png", accommodates: 12);
Room.create(name: "Padme's Apartment", city: "Coruscant", price: "5343.67", lat: 37.357714, lng: -121.920776, description: "A luxury apartment in the heart of Coruscant, this apartment has a prime location, just minutes away from the Senate building and the Jedi Temple. Spacious and luxurious with many amenities and a breathtaking view of the city. Perfect for romantic nights with a secret lover.", bedrooms: 2, beds: 2, bathrooms: 2, homeType: "apartment", img_url: "http://res.cloudinary.com/candyentropy/image/upload/v1493100174/Padmebalcony_plx4sg_ohtpfo.png", accommodates: 4);
Room.create(name: "Rebel Base Hangar", city: "Hoth", price: "3523.34", lat: 37.780437, lng: -122.513693, description: "A very large open space designed to hold rebel starships, but perfect for your large parties or events! Just watch out for AT-ATs coming to destroy the base.", bedrooms: 1, beds: 20, bathrooms: 1, homeType: "hangar", img_url: "http://res.cloudinary.com/candyentropy/image/upload/v1493100169/hoth_h3af07_s0rupw.jpg", accommodates: 40);
Room.create(name: "Townhome", city: "Tatooine", price: "2652.89", lat: 37.780437, lng: -122.513693, description: "A 3 story townhome that's waiting for your weekend getaway. Come experience the scorching dry heat of the Tatooine desert to get away from your cold icy planets!", bedrooms: 2, beds: 2, bathrooms: 1, homeType: "townhome", img_url: "http://res.cloudinary.com/candyentropy/image/upload/v1493100173/tatooine_townhome_llcjbq_xouyzq.jpg", accommodates: 4);
Room.create(name: "Rebel Temple", city: "Yavin IV", price: "6665.49", lat: 37.780437, lng: -122.513693, description: "Are you looking to throw a wild tropical party? This is the place! Huge cavernous spaces that can hold squadrons of starships or a DJ and dancefloor, multiple guest rooms for your guests, and beautiful tropical scenery.", bedrooms: 30, beds: 60, bathrooms: 10, homeType: "hangar", img_url: "http://res.cloudinary.com/candyentropy/image/upload/v1493100182/Yavin_4_Temple_ds5iy9_hkpcmp.png", accommodates: 120);
Room.create(name: "Ewok Treehut", city: "Endor", price: "200.35", lat: 37.357714, lng: -121.920776, description: "A typical home of an Ewok family. Sparse, but great for meeting the locals and exploring the forests of Endor.", bedrooms: 1, beds: 1, bathrooms: 1, homeType: "treehouse", img_url: "http://res.cloudinary.com/candyentropy/image/upload/v1493100175/ST-ewokvillage_lzlubs_pioqyn.jpg", accommodates: 2);
Room.create(name: "Mos Eisley Home", city: "Tatooine", price: "4434.64", lat: 37.357714, lng: -121.920776, description: "A home in Mos Eisley. Beware of scum and villainy.", bedrooms: 2, beds: 2, bathrooms: 1, homeType: "house", img_url: "http://res.cloudinary.com/candyentropy/image/upload/v1493100170/Mos_Eisley_home_jqot51_ixrktx.jpg", accommodates: 4);
Room.create(name: "Carbon Freeze Chamber", city: "Bespin", price: "1512.47", lat: 37.357714, lng: -121.920776, description: "A perfect place to get away from the summer heat or pass the time.", bedrooms: 1, beds: 0, bathrooms: 0, homeType: "chamber", img_url: "http://res.cloudinary.com/candyentropy/image/upload/v1493100179/Carbon-freeze_chamber_SWB_f93zh0_fea423.png", accommodates: 1);
Room.create(name: "Lakeside Villa", city: "Naboo", price: "4999.99", lat: 37.357714, lng: -121.920776, description: "A luxury villa on Varykino, an island on Naboo. Fit for nobility, royalty, and future Sith.", bedrooms: 8, beds: 8, bathrooms: 8, homeType: "villa", img_url: "http://res.cloudinary.com/candyentropy/image/upload/v1493100169/LakeRetreat2_rp8u6l_wltust.jpg", accommodates: 16);
Room.create(name: "The Lars Homestead", city: "Tatooine", price: "4850.00", lat: 37.780437, lng: -122.513693, description: "A quaint moisture farm in the desert plains of Tatooine, this spacious home has no-frills, practical comfort with room for 4.", bedrooms: 4, beds: 4, bathrooms: 4, homeType: "farm house", img_url: "http://res.cloudinary.com/candyentropy/image/upload/v1493100176/Larshomestead_HD_jkmxnl_eefgia.png", accommodates: 4);
Room.create(name: "Yoda's Hut", city: "Dagobah", price: "5000.00", lat: 37.802480, lng: -122.472839, description: "The home of a legendary jedi master, staying here will give you a glimpse into his finals days. Also, great hiking trails nearby, perfect for training to be a jedi.", bedrooms: 1, beds: 1, bathrooms: 1, homeType: "hut", img_url: "http://res.cloudinary.com/candyentropy/image/upload/v1493100181/yodas-hut_HD_vpchyh_sfs1bs.jpg", accommodates: 2);

Booking.create(user_id: 1, room_id: 1, start_date: DateTime.new(2016, 3,20), end_date: DateTime.new(2016, 3, 25), party_size: 2);
Booking.create(user_id: 5, room_id: 1, start_date: DateTime.new(2015, 3,20), end_date: DateTime.new(2015, 3, 25), party_size: 2);
Booking.create(user_id: 4, room_id: 1, start_date: DateTime.new(2014, 3,20), end_date: DateTime.new(2014, 3, 25), party_size: 2);
Booking.create(user_id: 1, room_id: 2, start_date: DateTime.new(2016, 3,26), end_date: DateTime.new(2016, 3, 28), party_size: 2);
Booking.create(user_id: 2, room_id: 2, start_date: DateTime.new(2016, 3,29), end_date: DateTime.new(2016, 3, 30), party_size: 2);
Booking.create(user_id: 4, room_id: 2, start_date: DateTime.new(2016, 4,29), end_date: DateTime.new(2016, 4, 30), party_size: 2);
Booking.create(user_id: 2, room_id: 1, start_date: DateTime.new(2016, 2,28), end_date: DateTime.new(2016, 2, 29), party_size: 2);
Booking.create(user_id: 1, room_id: 3, start_date: DateTime.new(2016, 3,30), end_date: DateTime.new(2016, 4, 5), party_size: 2);
Booking.create(user_id: 1, room_id: 4, start_date: DateTime.new(2016, 4,8), end_date: DateTime.new(2016, 4, 20), party_size: 2);
Booking.create(user_id: 1, room_id: 5, start_date: DateTime.new(2016, 3,20), end_date: DateTime.new(2016, 3, 25), party_size: 2);
Booking.create(user_id: 1, room_id: 6, start_date: DateTime.new(2016, 3,26), end_date: DateTime.new(2016, 3, 28), party_size: 2);
Booking.create(user_id: 1, room_id: 7, start_date: DateTime.new(2016, 3,30), end_date: DateTime.new(2016, 4, 5), party_size: 2);
Booking.create(user_id: 1, room_id: 8, start_date: DateTime.new(2016, 4,8), end_date: DateTime.new(2016, 4, 20), party_size: 2);

Booking.create(user_id: 3, room_id: 1, start_date: DateTime.new(2016, 3,26), end_date: DateTime.new(2016, 3, 27), party_size: 3);
Booking.create(user_id: 3, room_id: 4, start_date: DateTime.new(2016, 3,28), end_date: DateTime.new(2016, 3, 29), party_size: 3);
Booking.create(user_id: 3, room_id: 2, start_date: DateTime.new(2016, 3,30), end_date: DateTime.new(2016, 4, 1), party_size: 3);
Booking.create(user_id: 3, room_id: 1, start_date: DateTime.new(2016, 4,2), end_date: DateTime.new(2016, 4, 3), party_size: 3);

Review.create(user_id: 1, room_id: 1, body: "What a wonderful place to stay", rating: 5);
Review.create(user_id: 2, room_id: 2, body: "What an awful place to stay", rating: 5);
Review.create(user_id: 3, room_id: 1, body: "It was okay", rating: 3);
Review.create(user_id: 3, room_id: 1, body: "I ALWAYS stay here", rating: 5);
Review.create(user_id: 2, room_id: 1, body: "AWFUL PLACE!", rating: 1);
Review.create(user_id: 4, room_id: 2, body: "It was decent for the price", rating: 3);
Review.create(user_id: 5, room_id: 1, body: "Liked it enough", rating: 4);
Review.create(user_id: 4, room_id: 1, body: "I ALWAYS stay here", rating: 5);
