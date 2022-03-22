const db = require("../common/connect");

const BangDia = () => {};

BangDia.get = (id, callback) => {
  const sqlString = "SELECT * FROM bangDia WHERE id = ? ";
  db.query(sqlString, id, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

BangDia.getAll = (callback) => {
  const sqlString = "SELECT * FROM bangDia ";
  db.query(sqlString, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

BangDia.insert = (bangDia, callBack) => {
  const sqlString = "INSERT INTO bangDia SET ?";
  db.query(sqlString, bangDia, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack({ id: res.insertId, ...bangDia });
  });
};

BangDia.update = (bangDia, id, callBack) => {
  const sqlString = "UPDATE bangDia SET ?  WHERE id = ?";
  db.query(sqlString, [bangDia, id], (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack(bangDia);
  });
};

BangDia.delete = (id, callBack) => {
  db.query(`DELETE FROM bangDia WHERE id = ?`, id, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack("xóa thành công!");
  });
};

BangDia.statistics = (callBack) => {
  db.query(`SELECT * FROM luotthuebangdiafull`, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack(res);
  });
};

module.exports = BangDia;
