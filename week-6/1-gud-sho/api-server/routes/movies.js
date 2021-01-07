var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root1234',
  database: 'my_db'
});

router.post('/', function (req, res, next) {

  connection.connect();
  // TODO : insert new moview into database

  connection.end();

  res.send('respond with a resource');

});

module.exports = router;
