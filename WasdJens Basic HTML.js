const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    console.log('Got a GET request on `/`');
    res.send('Hello World!');
});

app.get('/Lukas', (req, res) => {
    console.log('Got a GET request on "/Lukas" ' );
    res.send('Lukas Bade sitzt neben mir!');
});

app.listen(port, () => {
    console.log('Running...');
});