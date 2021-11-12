const Product = function (product) {
  this.id = product.id;
  this.name = product.name;
};

Product.get_all = function (callback) {
  var data = [
    {
      id: 1,
      name: "product2",
    },
    {
      id: 1,
      name: "product2",
    },
    {
      id: 1,
      name: "product2",
    },
  ];
  callback(data);
};
Product.getById = function (id) {
  let data = [
    {
      id: id,
      name: "product2",
    },
  ];
  return data;
};

Product.add = function (data, callBack) {
  callBack(data);
};
Product.update = function (data, callBack) {
  callBack(data);
};
Product.delete = function (id, callBack) {
  callBack(id);
};
module.exports = Product;
