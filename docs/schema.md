# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## cities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
city        | string    | not null
description | text      | not null

## rooms
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
city_id   | integer   | not null, foreign key (references destination), indexed
location (longitude/latitude)   | array   | not null
name       | string    | not null
description       | text    | not null
details       | string    | not null
price       | string    | not null
bedrooms       | string    | not null
beds       | string    | not null
bathrooms       | string    | not null
homeType      | string    | not null
accommodates:        | string    | not null
ammenities | string    |


## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id       | integer    | not null,  foreign key, indexed
room_id       | integer    | not null,  foreign key, indexed

## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id       | integer    | not null,  foreign key, indexed
room_id       | integer    | not null,  foreign key, indexed
start_time       | date    | not null
end_time         | date    | not null
party_size      | integer    | not null
