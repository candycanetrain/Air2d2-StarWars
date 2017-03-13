# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## destination
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
city       | string    | not null
description        | text      | not null

## destinationDetails
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
destination_id   | integer   | not null, foreign key (references destination), indexed
name       | string    | not null
description       | text    | not null
details       | string    | not null
price       | string    | not null
bedrooms       | string    | not null
beds       | string    | not null
bathrooms       | string    | not null
homeType      | string    | not null
accomdates:        | string    | not null
ammenities | string    |


## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
reviews_id       | integer    | not null
