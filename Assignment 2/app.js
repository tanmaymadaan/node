const express = require('express');
 
const app = express();

app.use('/users', (req, res, next) => {
    res.send('<h1>This is the users page<h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Welcome to this website</h1>');
});

app.listen(3001);