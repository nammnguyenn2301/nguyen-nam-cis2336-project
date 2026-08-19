const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(
    path.join(__dirname, "../frontend")
));

let artworks = [
    {
        id:1,
        title:"Handmade Wooden Dolls",
        artist:"Emma Carter",
        email:"emma@example.com",
        category:"Wooden Crafts",
        price:28,
        description:"A collection of handmade wooden dolls."
    },
    {
        id:2,
        title:"Handmade Jewelry Collection",
        artist:"Sophia Nguyen",
        email:"sophia@example.com",
        category:"Jewelry",
        price:35,
        description:"Colorful handmade jewelry created by a local artist."
    },
    {
        id:3,
        title:"DIY Scrapbook Kit",
        artist:"Olivia Brown",
        email:"olivia@example.com",
        category:"Paper Crafts",
        price:18,
        description:"A handmade scrapbook kit for creative projects."
    }
];

app.get("/api/artworks", function(request, response){

    response.json(artworks);

});

app.post("/api/artworks", function(request, response){

    const artist = request.body.artist;
    const email = request.body.email;
    const title = request.body.title;
    const category = request.body.category;
    const price = request.body.price;
    const description = request.body.description;

    if(!artist || !email || !title || !category || !description)
    {
        return response.status(400).json({
            message:"Artist, email, title, category, and description are required."
        });
    }

    if(price === undefined || price === "")
    {
        return response.status(400).json({
            message:"Price is required."
        });
    }

    if(isNaN(price) || price < 0)
    {
        return response.status(400).json({
            message:"Price must be a nonnegative number."
        });
    }

    const newArtwork = {
        id:artworks.length + 1,
        title:title,
        artist:artist,
        email:email,
        category:category,
        price:Number(price),
        description:description
    };

    artworks.push(newArtwork);

    response.status(201).json({
        message:"Artwork submitted successfully!",
        artwork:newArtwork
    });

});

app.listen(port, function(){

    console.log("ArtConnect server is running at port: " + port);

});