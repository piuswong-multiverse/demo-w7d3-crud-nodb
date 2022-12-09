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


app.listen(port, () => {
    console.log(`We're live on http://localhost:${port}`)
})