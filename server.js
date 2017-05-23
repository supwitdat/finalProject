var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var pool = require("./pg-connection-pool");
var app = express();
// Serve files from public folder. That's where all of our HTML, CSS and Angular JS are.
app.use(express.static('public'));
app.use(bodyParser.json());


// GET /api/posts/::userid - retrieves an array of all post objects in the database by id.
app.get('/api/posts/', function(req, res) {
 
    pool.query("SELECT * FROM posts").then(function(result) {
    res.send(result.rows);
}).catch(function(err){
        console.log(err);
    });
});
// POST /api/posts/ - adds posts to the database. 
app.post('/api/posts/', function(req, res) {
    var newpost = req.body;
    console.log(newpost);
    var sql = 'INSERT INTO posts(rating, mood, comments, userid)' + 'values ($1::int, $2::text, $3::text, $4::int)';
    var values = [post.rating, post.mood, post.comment, post.userid];
    pool.query(sql, values).then(function(result) {
        res.status(201);
        res.send(result.rows);
    });
});


// add user to database//

app.post('/api/users/', function(req, res) {
    var newUser = req.body;
    console.log(newUser);
    var sql = 'INSERT INTO users(username, email, password)' + 'values ($1::text, $2::text, $3::text)';
    var values = [ newUser.name, newUser.email, newUser.password];
    pool.query(sql, values).then(function(result) {
        res.status(201);
        res.send(result.rows);
    });
});

app.get('/api/users/', function(req, res) {
 
    pool.query("SELECT * FROM users").then(function(result) {
    res.send(result.rows);
}).catch(function(err){
        console.log(err);
    });
});
//
//// DELETE /api/items/{ID} - delete an item from the database. The item is
//// selected via the {ID} part of the URL.
//// TODO Handle this URL with appropriate Database interaction.
//app.delete('/api/items/:id', function(req, res) {
//    var id = req.params.id; // <-- This gets the :id part of the URL
//    pool.query("DELETE FROM ShoppingCart WHERE id = $1::int", [id]).then(function() {
//        res.send("DELETED");
//    });
//});
//
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('JSON Server is running on ' + port);
});
