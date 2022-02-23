const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "qlbd",
});

connection.connect((err, res) => {
  if (err) {
    console.error(err);
  }
  console.log('kết nối mysql thành công');
});

// connection.end(function(err) {
//   if (err) throw err;
//   console.log("ngắt kết nối mysql thành công");
// });

module.exports = connection;
