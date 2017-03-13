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

### Destinations

- `GET /api/destinations`
  - destinations/search
  - accepts `destination_name` query param to list destinations by name
- `POST /api/destinations`
- `GET /api/destinations/:id`
- `PATCH /api/destinations/:id`
- `DELETE /api/destinations/:id`
