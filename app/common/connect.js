const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect((err, res) => {
  if (err) {
    console.error(err);
  }
  console.log("kết nối mysql thành công");
});

module.exports = connection;
