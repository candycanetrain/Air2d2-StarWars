# Component Hierarchy

## AuthFormContainer
    - Contains links to "Log In" and "Sign Up"
  - AuthForm

## HomeContainer
  - NavContainer
  - BookingContainer


## DestinationsContainer
  - DestinationItemContainer

## NavContainer
  - Contains Logo, Log In/Sign Up/Log Out buttons

## BookingContainer
  - contains input areas for "Where, When, and # of Guests" along with submit button

# DestinationItemContainer
  - selects price from ListingItemContainer

## SearchResultsContainer
  - MenuBarContainer
    - Contains form for check in/check out dates, # of guests, and price range
  - ListingsContainer
    - ListingItemContainer
  - MapContainer

## ListingItemContainer
  - ListingItemName
  - ReservationFormContainer
  - ListeningItemDetailsContainer
  - ListingItemReviewsContainer


# Routes
| Path       	| Component           	|
|------------	|---------------------	|
| "/sign-up" 	| "AuthFormContainer" 	|
| "/sign-in"  |  "AuthFormContainer" 	|
|  "/home"   	|  "HomeContainer"            	|
|  "/home/search-results"   	| "SearchResultsContainer"             	|
|  "/destinations/:id"   	| "ListingItemContainer"             	|
