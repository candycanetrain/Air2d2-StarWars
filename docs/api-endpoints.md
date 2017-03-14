# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Cities

- `GET /api/cities`
  - cities/search
  - accepts `destination_name` query param to list cities by name
- `POST /api/cities`
- `GET /api/cities/:id`
- `PATCH /api/cities/:id`
- `DELETE /api/cities/:id`

### Search
- `GET api/cities/search` (??)

### Bookings
- `POST api/cities/:id/book` (or POST 'api/bookings)
- `DELETE api/bookings/:id`
- `PATCH api/bookings/:id`