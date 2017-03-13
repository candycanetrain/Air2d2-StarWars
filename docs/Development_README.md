# StarWarsBnb

Here is a link to [StarWarsBnb live][heroku]

[heroku]: http://www.herokuapp.com

# Motivation
I was inspired by the UX design of Airbnb's website, so I decided to make a clone of it while incorporating a Star Wars theme. StarWarsBnb is a full-stack web application that uses Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation

### UI

I plan to consult the UI design of  [Airbnb]('www.airbnb.com') for a professional and polished look.

### User Sign Up/Log In

Users can sign up for a personal profile, book rooms, and leave reviews.

### Home Screen Rendering

The layout for a user after signing in:
![image of home](wireframes/home-logged-in-LAYOUT.png)

Here is the wireframe:
![image of home1](wireframes/home-logged-in-components.png)

The BookingContainer contains a form for users to pick a city they would like to visit, specify a time-frame for their vacation, and filter rooms based on the number of guests. The BookingContainer then pulls the information entered by the user into `params`. This information is then used to send an AJAX request to the database to query for the selected destinations. The results are then rendered in our `SearchResultsContainer`:

![image of home1](wireframes/SearchResultsLayoutWithMenuBar.png)

Here is the wireframe:

![image of home1](wireframes/SearchResultsContainer.png)

The `ListingItemContainer`s here only render limited information. When the user selects a specific listing, the `ListingItemDetails` component is expanded to get more details.


## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project by implementing bonus features, such as messages and user profiles.
