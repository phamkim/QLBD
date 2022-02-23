module.exports = function (router) {
    const chiTietPhieuThueController = require("../controllers/chiTietPhieuThue.controller");
    router.get("/chiTietPhieuThue", chiTietPhieuThueController.getAll);
    router.get("/chiTietPhieuThue/:id", chiTietPhieuThueController.get);
    router.post("/chiTietPhieuThue/insert", chiTietPhieuThueController.insert);
    router.delete("/chiTietPhieuThue/delete/:id", chiTietPhieuThueController.delete);
    router.put("/chiTietPhieuThue/update", chiTietPhieuThueController.update);
  };