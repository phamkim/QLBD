const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "qlbd",
});

connection.connect((err, res) => {
  if (err) {
    console.error(err);
  }
});
module.exports = connection;
