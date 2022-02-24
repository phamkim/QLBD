const jwt = require("./jwt");
const isAuth = async (req, res, next) => {
  var _token = req.headers.authorization;
  if (_token) {
    try {
      var authData = await jwt.check(_token);
      req.auth = authData;
      next();
    } catch (err) {
      return res.send({ data: "mã token không hợp lệ" });
    }
  } else {
    return res.send({ data: "bạn chưa gửi kèm token" });
  }
};

module.exports = {
  isAuth: isAuth,
};
