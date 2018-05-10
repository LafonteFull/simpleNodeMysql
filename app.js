var mysql = require('mysql');

var con = mysql.createConnection({
  host: "http://206.189.40.50",
  user: "root",
  password: "changeme"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});