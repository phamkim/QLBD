const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

require("./app/routers/home.router")(app);
require("./app/routers/thanhVien.router")(app);

app.listen(3000, function () {
  console.log("server listening on port 3000");
});
