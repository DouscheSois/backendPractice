# backendPractice
Practice backend. Routes, models, config (global variables). Also working with MongoDB. 
Some of the models include users, posts, profile, auth. Strictly backend work, no client side.

--- July 10, 2020

For now it can only register users to the mongoDB, returns token, using postman try:

Header: Content-type || applicantion/json

Raw: 
{
  "name": "john",
  "email": "john@gmail.com",
  "password": "123456"
}

dependencies so far:

{bcrypt ,config, express, express-validator, jsonwebtoken, mongoose, request}

--- July 10, 2020
I have added the login capability. It can now login and returns the token from the database.

Header: Content-type || applicantion/json

Raw: 
{
  "email": "john@gmail.com",
  "password": "123456"
}

