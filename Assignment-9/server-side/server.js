// modules =================================================

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");
var router = require("./routes/Routes")
const cors = require("cors");
app.use(cors());

// configuration ===============================================================
// set port

var port = process.env.PORT || 3000;

// connect to our mongoDB database
mongoose.connect("mongodb://localhost:/mydatabase");
//mongoose.connect('your-mongodb-uri');

// get app data/ stuff of the body(POST request) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride("X-HTTP-Method-Override"));

// routes ======================================================================
app.use("/user", router);
// require("./routes/Routes")(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);
//shoutout to the user
console.log("App is started at port " + port);
