const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// This will be our application entry. We'll setup our server here.
const http = require('http');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Models
const models = require('./models');

//Sync database
models.sequelize.sync().then(function() {
    console.log('Database setup');
}).catch(function(err) {    
    console.log('Something went wrong with db update');
})

// Require routes
require('./routes')(app);

const port = parseInt(process.env.PORT, 10) || 8000;

app.set('port', port);

const server = http.createServer(app);
server.listen(port);

module.exports = app;