const db = require("../common/connect");

const NhaSX = () => {};

NhaSX.get = (id, callback) => {
  const sqlString = "SELECT * FROM nhaSX WHERE id = ? ";
  db.query(sqlString, id, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

NhaSX.getAll = (callback) => {
  const sqlString = "SELECT * FROM nhaSX ";
  db.query(sqlString, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

NhaSX.insert = (nhaSX, callBack) => {
  const sqlString = "INSERT INTO nhaSX SET ?";
  db.query(sqlString, nhaSX, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack({ id: res.insertId, ...nhaSX });
  });
};

NhaSX.update = (nhaSX, id, callBack) => {
  const sqlString = "UPDATE nhaSX SET ?  WHERE id = ?";
  db.query(sqlString, [nhaSX, id], (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack(nhaSX);
  });
};

NhaSX.delete = (id, callBack) => {
  db.query(`DELETE FROM nhaSX WHERE id = ?`, id, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack("xóa thành công!");
  });
};

module.exports = NhaSX;
