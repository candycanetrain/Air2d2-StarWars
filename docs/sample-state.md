```js
{
  session(currentUser): {
    id: 1,
    username: "HanSolo"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createUser: {errors: ["email can't be blank"]}
  },
  rooms: {
    1: {
        name: "Wookiee Treehouse",
        id: 1,
        city_id: 1,
        description: "Home of the a famous Wookiee",
        price: 200 dollars        
      }
      .....
      20 {
        ....
      }
    },
  currentRoom: {
    name: "Wookiee Treehouse",
    id: 1,
    city_id: 1,
    description: "Home of the a famous Wookiee",
    price: 200 dollars,
    bedrooms: 1,
    beds: 1,
    bathrooms: 0,
    homeType: Treehouse,
    accomodates: 2
    amenities: "Essentials - Towels, bedsheets, and organic toilet paper made out of leaves"
  },
  cities: {
    1: {
      id: 1,
      city: "Kashyyyk",
      description: "City of the Wookiees"
    }
  }
  reviews: "Great host!"
}
```
