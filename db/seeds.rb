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


Room.create(name: "name1", city: Faker::StarWars.planet, price: "4242.89", lat: 37.780437, lng: -122.513693, description: "This place was owned by #{Faker::StarWars.character}", bedrooms: 2, beds: 3, bathrooms: 1, homeType: "hometype", accomdates: 2);
Room.create(name: "name2", city: Faker::StarWars.planet, price: "4242.89", lat: 37.802480, lng: -122.472839, description: "This place was owned by #{Faker::StarWars.character}", bedrooms: 2, beds: 3, bathrooms: 1, homeType: "hometype", accomdates: 2);
Room.create(name: "name2", city: Faker::StarWars.planet, price: "4242.89", lat: 37.889486, lng: -122.610855, description: "This place was owned by #{Faker::StarWars.character}", bedrooms: 2, beds: 3, bathrooms: 1, homeType: "hometype", accomdates: 2);
Room.create(name: "name2", city: Faker::StarWars.planet, price: "4242.89", lat: 37.357714, lng: -121.920776, description: "This place was owned by #{Faker::StarWars.character}", bedrooms: 2, beds: 3, bathrooms: 1, homeType: "hometype", accomdates: 2);
Room.create(name: "name2", city: Faker::StarWars.planet, price: "4242.89", lat: 32.404081, lng: -83.188477, description: "This place was owned by #{Faker::StarWars.character}", bedrooms: 2, beds: 3, bathrooms: 1, homeType: "hometype", accomdates: 2);
Room.create(name: "name2", city: Faker::StarWars.planet, price: "4242.89", lat: 37.305518, lng: -84.550781, description: "This place was owned by #{Faker::StarWars.character}", bedrooms: 2, beds: 3, bathrooms: 1, homeType: "hometype", accomdates: 2);