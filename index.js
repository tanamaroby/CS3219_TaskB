let express = require('express'); // import express
let serverless = require('serverless-http'); //import serverless
let bodyParser = require('body-parser'); // import body parser
let mongoose = require('mongoose'); // import mongoose
let cors = require("cors");
const app = express(); // initialize the app

let apiRoutes = require("./api-routes"); // import routes

// configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to mongoose and set connection variable
let dburl = 'mongodb+srv://cs3219-taskb:cs3219-taskb@cs3219-taskb.ohyrp.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(dburl, { useNewUrlParser: true});
var db = mongoose.connection;

// Check db connecttion
if (!db) {
    console.log("Error connecting to database");
} else {
    console.log("Successfully connected to database");
}

// Set up server port
var port = process.env.PORT || 8080;

// Message
var message = "Hello everyone, welcome to CS3219 OTOT Assignment Task B. This app contains a bunch of characters from Persona 5 as contacts";

// Send message for default URL
app.get('/', (req, res) => res.send(message));

// Use api routes in the app
app.use(cors());
app.use('/api', apiRoutes);

// Launch app to listen to specific port
app.listen(port, function () {
     console.log("Running CS3219_taskb on port " + port);
});

module.exports = app;
module.exports.handler = serverless(app);