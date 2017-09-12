var express = require("express");
var path = require("path");
var books = require("./server/routes/books")

var app = new express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/books', books);

app.listen(3000, function(){
    console.log("listening on port 3000");
})