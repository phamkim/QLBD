const db = require("../common/connect");

const PhieuThue = (phieuThue) => {
  this.id = phieuThue.id;
  this.ngayThue = phieuThue.id;
  this.ngayTra = phieuThue.ngayTra;
  this.ngaySua = phieuThue.ngaySua;
  this.idNguoiThue = phieuThue.idNguoiThue;
  this.soNgayThue = phieuThue.soNgayThue;
};

PhieuThue.get = (id, callback) => {
  const sqlString = "SELECT * FROM phieuThue Where id = ? ";
  db.query(sqlString, id, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

PhieuThue.getAll = (callback) => {
  const sqlString = "SELECT * FROM phieuThue ";
  db.query(sqlString, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

PhieuThue.insert = (phieuThue, callBack) => {
  const sqlString = "INSERT INTO phieuThue SET ?";
  db.query(sqlString, phieuThue, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack({ id: res.insertId, ...phieuThue });
  });
};

PhieuThue.update = (phieuThue, callBack) => {
  const sqlString =
    "UPDATE phieuThue SET ngayThue = ?, ngayTra = ?, ngaySua = ?, idNguoiTao = ?, idNguoiThue = ?, soNgayThue = ?  WHERE id = ?";
  db.query(
    sqlString,
    [
      phieuThue.ngayThue,
      phieuThue.ngayTra,
      phieuThue.ngaySua,
      phieuThue.idNguoiThue,
      phieuThue.soNgayThue,
      phieuThue.id,
    ],
    (err, res) => {
      if (err) {
        callBack(err);
        return;
      }
      callBack(phieuThue);
    }
  );
};

PhieuThue.delete = (id, callBack) => {
  db.query(`DELETE FROM phieuThue WHERE id = ?`, id, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack("xóa thành công!");
  });
};

module.exports = PhieuThue;
