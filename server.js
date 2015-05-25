var express = require('express')
var app = express()

var server = app.listen(1337)
var io = require('socket.io').listen(server)

var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(express.static(__dirname + '/client'))

// Mongoose
require('./server/config/mongoose.js');

// Templating Engine
app.set("view engine", "ejs")
app.set("views", (__dirname + "/client/views"))

// HTTP Routes`	
require('./server/config/routes.js')(app);
// Socket Routes
require('./server/config/socket.routes.js');



