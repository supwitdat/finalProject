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
    var sql = 'INSERT INTO users(username, email, password)' + 'values ($1::text, $2::text, $3::text)';
    var values = [ newUser.name, newUser.email, newUser.password];
    pool.query(sql, values).then(function(result) {
        res.status(201);
        res.send(result.rows);
    });
});
//get all users//
app.get('/api/users/', function(req, res) {
  pool.query("SELECT * FROM users").then(function(result) {
    res.send(result.rows);
}).catch(function(err){
        console.log(err);
    });
});

//get id from user where the username is what was just typed in//
app.get('/api/users/:username', function(req, res) {
    var  name = req.params.username;
    pool.query("SELECT id FROM users WHERE username = $1::text", [name]).then(function(result) {
        if (result.rowCount === 0) {
            res.status(404); 
            res.send("NOT FOUND");
        } else {
            res.send(result.rows[0]);
        }
    }).catch(errorCallback(res));
});



function errorCallback(res) {
	return function(err) {
		console.log(err);
		res.status(500);
		res.send('ERROR');
	}
}
//
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('JSON Server is running on ' + port);
});
