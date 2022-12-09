const express = require('express');
const app = express();
const port = 3000;

// Create basic CRUD routes (POST, GET, PUT, DELETE)
app.post('/', (req, res) => {
    res.send("Woohoo! POST request heard");
})

app.get('/', (req, res) => {
    res.send("GET out of here")
})

app.put('/', (req, res) => {
    res.send("I'm going to PUT you on a pedestal")
})

app.delete('/', (req, res) => {
    res.send("Got problems? DELETE them")
})

// CRUD endpoints with route parameters
// POST

// Dummy data to operate on
let cars = [{
    brand: "Tesla",
    color: "Red"
},
{
    brand: "Toyota",
    color: "Gray"
}, 
{
    brand: "Honda",
    color: "Blue"
}
]

// NEED MIDDLEWARE to understand the request body (payload)
app.use(express.json()); // lets me get JSON data from the request
app.use(express.urlencoded()); // lets me get urlencoded data from the request

app.post('/cars', (req, res) => {
    // get a new car to add...
    const newCar = req.body;
    cars.push(newCar);
    // send out the whole list of cars
    res.send(cars);
})



app.listen(port, () => {
    console.log(`We're live on http://localhost:${port}`)
})