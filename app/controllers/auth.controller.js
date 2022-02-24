const ThanhVien = require("../models/thanhVien.model");
const jwt = require("../common/jwt");

exports.login = (req, res) => {
  const data = req.body;
  console.log(data);
  ThanhVien.checkLogin(data, async (result) => {
    if (result) {
      const _token = await jwt.make(result);
      res.send({ token: _token });
    } else {
      res.send({ token: null });
    }
  });
};
