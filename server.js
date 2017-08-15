var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express(); 
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname + "/public")));


require(".routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT,function(){
	console.log("Listening on PORT: " + PORT);
});