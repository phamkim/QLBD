module.exports = function (router) {
    const phieuThueController = require("../controllers/phieuThue.controller");
    router.get("/phieuThue", phieuThueController.getAll);
    router.get("/phieuThue/:id", phieuThueController.get);
    router.post("/phieuThue/insert", phieuThueController.insert);
    router.delete("/phieuThue/delete/:id", phieuThueController.delete);
    router.put("/phieuThue/update", phieuThueController.update);
  };