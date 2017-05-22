var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');

var app = express();
// Serve files from public folder. That's where all of our HTML, CSS and Angular JS are.
app.use(express.static('public'));
app.use(bodyParser.json());

//creates pool to access users database//
var pool = new pg.Pool({
 user: "postgres",
 password: "GrandCircus",
 host: "localhost",
 port: 4554,
 database: "users",
 ssl: false
});
// GET /api/posts/::userid - retrieves an array of all post objects in the database by id.
app.get('/api/posts/:userid', function(req, res) {
    var userid = req.params.userid;
    console.log(userid);
    pool.query("SELECT * FROM posts WHERE userid = $1::int", [userid]).then(function(result) {
    res.send(result.rows);
}).catch(function(err){
        console.log(err);
    });
});
// POST /api/posts/ - adds posts to the database. 
app.post('/api/posts/new', function(req, res) {
    var newpost = req.body;
    console.log(newpost);
    var sql = 'INSERT INTO posts(rating, mood, comments, userid)' + 'values ($1::int, $2::text, $3::text, $4::int)';
    var values = [3,'full','this is weird',1];
    pool.query(sql, values).then(function(result) {
        res.status(201);
        res.send(result.rows);
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
