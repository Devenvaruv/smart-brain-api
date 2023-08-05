# Smart Brain Server

This is the server-side code for the Smart Brain app. The server is built using Node.js and Express, and it connects to a PostgreSQL database to handle user authentication and profile data. The server uses the bcrypt library for password encryption and cors for enabling API calls between the server and the front-end application.

# Endpoints
GET /: Retrieves user information (for testing purposes).

POST /signin: Handles user sign-in by validating credentials and returning user data.

POST /register: Handles user registration by adding new users to the database.

GET /profile/:id: Retrieves user profile data for a specific user ID.

PUT /image: Increments the user's entry count.

POST /imageurl: Handles API calls to an image recognition service.

# Dependencies
The server relies on the following dependencies:

express: A fast, unopinionated, minimalist web framework for Node.js.

bcrypt-nodejs: A library used for password encryption.

cors: A middleware for enabling Cross-Origin Resource Sharing (API calls between server and front-end).

knex: A SQL query builder for Node.js, used to connect the database with the server.

pg: PostgreSQL client for Node.js, used as a database driver.
