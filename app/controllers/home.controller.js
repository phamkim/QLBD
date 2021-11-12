const dirname = __dirname.replace("app\\controllers", "");
exports.home = function (req, res) {
  res.sendFile(dirname + "/index.html");
};

exports.about = function (req, res) {
  res.sendFile(dirname + "/index.html");
};
