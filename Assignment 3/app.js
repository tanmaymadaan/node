const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const homeRoutes = require('./routes/home');
const usersRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({extended: false}));
app.use(homeRoutes);
app.use(usersRoutes);

app.listen(3000);
