const express = require("express");
const app = express();
app.use(express.json());


homeRouter = require("./app/routers/home.router")(app);
productRouter = require("./app/routers/product.router")(app);

app.listen(3000, function () {
  console.log("server listening on port 3000");
});
