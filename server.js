var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var routes = require('./server/routes/index');
var books = require("./server/routes/books");

var app = new express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/api/books', books);

app.listen(3000, function(){
    console.log("listening on port 3000");
})