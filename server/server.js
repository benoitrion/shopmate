const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// add the path module
const path = require('path');

// This will be our application entry. We'll setup our server here.
const http = require('http');

// Set up the express app
const app = express();

// get reference to the client build directory
const staticFiles = express.static(path.join(__dirname, '../../client/build'))

// pass the static files (react app) to the express app. 
app.use(staticFiles)

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
    console.log(err);
    console.log('Something went wrong with db update');
})

// Require routes
require('./routes')(app);

app.use('/*', staticFiles)

const port = parseInt(process.env.PORT, 10) || 8000;

app.set('port', port);

const server = http.createServer(app);
server.listen(port);

module.exports = app;