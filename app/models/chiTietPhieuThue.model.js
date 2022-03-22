const db = require("../common/connect");

const ChiTietPhieuThue = () => {};

ChiTietPhieuThue.get = (id, callback) => {
  const sqlString = "SELECT * FROM chiTietphieuThue WHERE id = ? ";
  db.query(sqlString, id, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

ChiTietPhieuThue.getAll = (callback) => {
  const sqlString = "SELECT * FROM chiTietphieuThue LIMIT 2 OFFSET 0 ";
  db.query(sqlString, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

ChiTietPhieuThue.insert = (chiTietphieuThue, callBack) => {
  const sqlString = "INSERT INTO chiTietphieuThue SET ?";
  db.query(sqlString, chiTietphieuThue, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack({ id: res.insertId, ...chiTietphieuThue });
  });
};

ChiTietPhieuThue.update = (chiTietphieuThue, id, callBack) => {
  const sqlString = "UPDATE chiTietphieuThue SET ? WHERE id = ?";
  db.query(sqlString, [chiTietphieuThue, id], (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack(chiTietphieuThue);
  });
};

ChiTietPhieuThue.delete = (id, callBack) => {
  db.query(`DELETE FROM chiTietphieuThue WHERE id = ?`, id, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack("xóa thành công!");
  });
};

module.exports = ChiTietPhieuThue;
