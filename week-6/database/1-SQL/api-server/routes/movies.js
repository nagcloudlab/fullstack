var express = require('express');
var router = express.Router();

var mysql = require('mysql'); // mysql driver

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'gud_sho_db'
});

router.post('/', function (req, res, next) {

  const movie = req.body;

  connection.connect();
  const sql = `insert into movies (title,duration) values ('${movie.title}','${movie.duration}')`
  connection.query(sql, (err, result) => {
    if (err)
      throw err;
    res.json({ result: result })
  })


});

module.exports = router;
