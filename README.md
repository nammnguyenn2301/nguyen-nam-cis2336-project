# ArtConnect

ArtConnect is my individual project for CIS 2336 - Web Application Development.

ArtConnect is a web application that allows local artists to share handmade artwork with the community. Visitors can browse artwork, view upcoming events, and submit their own artwork.

## Features

- Artwork gallery
- Artwork search and image enlargement
- Upcoming art events
- Dynamic event details
- Artwork submission form
- Form validation
- FAQ section
- Responsive design
- Node.js and Express backend
- GET and POST routes

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Git
- GitHub

## Project Structure

frontend/
- index.html
- css/
- js/
- images/
- pages/

backend/
- server.js
- package.json
- package-lock.json

## Backend

The backend uses Node.js and Express.

Artwork data is temporarily stored in a JavaScript array.

GET /api/artworks returns all artwork stored on the server.

POST /api/artworks accepts new artwork information, validates the data, and adds the artwork to the array.

## How to Run the Project

Open the project in Visual Studio Code.

Open the terminal and go to the backend folder:

cd backend

Install the dependencies:

npm install

Start the server:

node server.js

The server runs at:

http://localhost:8080

Artwork data can be viewed at:

http://localhost:8080/api/artworks

## Author

Nam Nguyen

CIS 2336 - Web Application Development