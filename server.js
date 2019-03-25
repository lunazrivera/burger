// Requiring dependencies 
var express = require("express");
var bodyParser = require("body-Parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

// Creating express application instance
var app = express();
app.use(express.static(__dirname + "public/assets"));

app.use(bodyParser.urlencoded({
     extended: false
}))
// Parse request body as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets handlebars as the main templating language
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets the port number to listen to
var PORT = process.env.PORT || 8000;

// Require
var routes = require("./controllers/burger_controller.js");
app.use("/", routes);

// Makes the file listen in the assigned PORT
app.listen(PORT, function() {
     console.log("Application listening on: ", "http://localhost:" + PORT);
});