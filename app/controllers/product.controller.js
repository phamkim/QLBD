var Product = require("../models/product.model");

exports.get_list = function (req, res) {
  Product.get_all(function (data) {
    res.send({
      result: data,
    });
  });
};

exports.detail = function (req, res) {
  var data = Product.getById(req.params.id);
  res.send({ result: data });
};

exports.add_product = function (req, res) {
  var data = req.body;
  Product.add(data, function (response) {
    res.send({ result: response });
  });
};
exports.update_product = function (req, res) {
  var data = req.body;
  Product.update(data, function (response) {
    res.send({ result: response });
  });
};
exports.delete_product = function (req, res) {
  var id = req.params.id;
  Product.delete(id, function (response) {
    res.send({ result: response });
  });
};

