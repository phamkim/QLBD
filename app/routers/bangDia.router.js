module.exports = function (router) {
    const bangDiaController = require("../controllers/bangDia.controller");
    router.get("/bangDia", bangDiaController.getAll);
    router.get("/bangDia/:id", bangDiaController.get);
    router.post("/bangDia/insert", bangDiaController.insert);
    router.delete("/bangDia/delete/:id", bangDiaController.delete);
    router.put("/bangDia/update", bangDiaController.update);
  };
  