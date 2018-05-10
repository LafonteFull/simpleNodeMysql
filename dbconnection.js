var mysql = require('mysql');
    port = process.env.PORT || 7005;

if (port === 7005) {

    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'changeme',
        database: 'skilltest',
        insecureAuth: true
    });
} else {

   //same as above, with live server details
}

connection.connect();

module.exports = connection;