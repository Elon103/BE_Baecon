var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'G3m1n120ft',
    database: 'eilmicroservice'
});

connection.connect(function(err) {
    if (err) console.log(err);

});

module.exports = connection;