
var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root1234",
    database: "mydb"
});


// CRUD / db  operations


// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE mydb", function (err, result) {
//         if (err) throw err;
//         console.log("Database created");
//     });
// });


// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//     });
// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table altered");
//     });
// });



// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//     });
// });



// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO customers (name, address) VALUES ?";
//     var values = [
//         ['John', 'Highway 71'],
//         ['Peter', 'Lowstreet 4'],
//         ['Amy', 'Apple st 652'],
//         ['Hannah', 'Mountain 21'],
//         ['Michael', 'Valley 345'],
//         ['Sandy', 'Ocean blvd 2'],
//         ['Betty', 'Green Grass 1'],
//         ['Richard', 'Sky st 331'],
//         ['Susan', 'One way 98'],
//         ['Vicky', 'Yellow Garden 2'],
//         ['Ben', 'Park Lane 38'],
//         ['William', 'Central st 954'],
//         ['Chuck', 'Main Road 989'],
//         ['Viola', 'Sideway 1633']
//     ];
//     // Non blocking / Asynchronous IO
//     con.query(sql, [values], function (err, result) {
//         if (err) throw err;
//         console.log("Number of records inserted: " + result.affectedRows);
//     });

// });



// con.connect(function (err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });



// con.connect(function (err) {
//     if (err) throw err;
//     con.query("SELECT name,address FROM customers", function (err, result, fields) {
//         if (err) throw err;
//         // console.log(result);
//         console.log(fields);

//     });
// });



// con.connect(function (err) {
//     if (err) throw err;
//     var name = 'Amy';
//     var adr = 'Mountain 21';
//     var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
//     con.query(sql, [name, adr], function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// });



// con.connect(function (err) {
//     if (err) throw err;
//     var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Number of records deleted: " + result.affectedRows);
//     });
// });

con.connect(function (err) {
    if (err) throw err;
    var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
});