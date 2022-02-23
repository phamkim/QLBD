module.exports = function (router) {
  const theLoaiController = require("../controllers/theLoai.controller");
  router.get("/theLoai", theLoaiController.getAll);
  router.get("/theLoai/:id", theLoaiController.get);
  router.post("/theLoai/insert", theLoaiController.insert);
  router.delete("/theLoai/delete/:id", theLoaiController.delete);
  router.put("/theLoai/update", theLoaiController.update);
};
