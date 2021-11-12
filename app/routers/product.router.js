module.exports = function (router) {
  const productController = require("../controllers/product.controller");
  router.get("/product/list", productController.get_list);
  router.get("/product/detail:id", productController.detail);
  router.post("/product/add", productController.add_product);
  router.delete("/product/delete/:id", productController.delete_product);
  router.put("/product/update",productController.update_product);
};
