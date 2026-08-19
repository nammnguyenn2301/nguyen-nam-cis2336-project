# ArtConnect

ArtConnect is my individual project for CIS 2336 - Web Application Development.

I created ArtConnect as a website where local artists can share their handmade artwork with the community. Visitors can look through different artwork, search the gallery, view upcoming events, and submit their own artwork.

## Features

- Artwork gallery
- Search for artwork
- Click artwork images to view them larger
- Upcoming art events
- View and hide event details
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
- Visual Studio Code

## Project Structure

nguyen-nam-cis2336-project/

├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   └── pages/
│       ├── gallery.html
│       ├── events.html
│       ├── submit.html
│       ├── faq.html
│       └── references.html
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md

## How to Use the Website

The Home page introduces ArtConnect and shows some featured artwork and upcoming events.

The Gallery page displays the artwork. Visitors can use the search box to search by artwork title, artist name, or category. The artwork images can also be clicked to see a larger version.

The Events page shows upcoming art events. Visitors can click the View Details button to see more information about an event and click Hide Details to close it.

The Submit Artwork page has a form for artists to enter their information and information about their artwork. The form checks the required information before it is submitted.

The FAQ page has common questions about ArtConnect. Visitors can click each question to show or hide the answer.

The References page lists the resources I used while working on the project.

## Backend

The backend uses Node.js and Express.

Artwork data is temporarily stored in a JavaScript array. This means the data is not permanently saved after the server is restarted.

The project uses two main artwork routes.

### GET /api/artworks

This route returns all artwork currently stored on the server.

### POST /api/artworks

This route receives new artwork information from the submission form.

The server checks the submitted information before adding the artwork to the array. If required information is missing or invalid, the server sends an error response.

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

The artwork data can be viewed at:

http://localhost:8080/api/artworks

## Testing

I tested the website to make sure the main pages and features work correctly.

I tested:

- Navigation between pages
- Gallery search
- Artwork image enlargement
- Event View Details and Hide Details buttons
- FAQ questions and answers
- Form validation
- Valid and invalid form information
- GET request
- POST request
- Backend server

## What I Learned

While working on ArtConnect, I learned more about how the front-end and backend of a web application work together.

I practiced using HTML and CSS to create and style the pages and JavaScript to make the website interactive. I also learned how to use Node.js and Express to create a server and how GET and POST routes can be used to send and receive data.

I also got more practice using Git and GitHub to save my changes and keep track of different versions of my project.

## Future Improvements

If I continue working on ArtConnect, I would like to add a database so artwork can be saved permanently. I would also like to let artists upload their own images and add more ways to search or filter the gallery.

## Author

Nam Nguyen

CIS 2336 - Web Application Development