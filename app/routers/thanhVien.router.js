module.exports = function (router) {
  const thanhVienController = require("../controllers/thanhVien.controller");
  router.get("/thanhVien", thanhVienController.getAll);
  router.get("/thanhVien/:id", thanhVienController.get);
  router.post("/thanhVien/insert", thanhVienController.insert);
  router.delete("/thanhVien/delete/:id", thanhVienController.delete);
  router.put("/thanhVien/update", thanhVienController.update);
};
