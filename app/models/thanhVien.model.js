const db = require("../common/connect");

const ThanhVien = (thanhVien) => {
  this.id = thanhVien.id;
  this.hoTen = thanhVien.hoTen;
  this.ngayTao = thanhVien.ngayTao;
  this.ngaySua = thanhVien.ngaySua;
  this.diaChi = thanhVien.diaChi;
  this.soCMT = thanhVien.soCMT;
  this.phanQuyen = thanhVien.phanQuyen;
  this.userName = thanhVien.userName;
  this.passW = thanhVien.passW;
};

ThanhVien.get = (id, callback) => {
  const sqlString = "SELECT * FROM thanhVien Where id = ? ";
  db.query(sqlString, id, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

ThanhVien.getAll = (callback) => {
  const sqlString = "SELECT * FROM thanhVien ";
  db.query(sqlString, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

ThanhVien.insert = (thanhVien, callBack) => {
  const sqlString = "INSERT INTO thanhVien SET ?";
  db.query(sqlString, thanhVien, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack({ id: res.insertId, ...thanhVien });
  });
};

ThanhVien.update = (thanhVien, callBack) => {
  const sqlString =
    "UPDATE thanhVien SET hoTen = ?, diaChi = ?, soCMT = ?,ngayTao = ?, ngaySua = ?, phanQuyen = ?, userName = ?, passW = ?  WHERE id = ?";
  db.query(
    sqlString,
    [
      thanhVien.hoTen,
      thanhVien.diaChi,
      thanhVien.soCMT,
      thanhVien.ngayTao,
      thanhVien.ngaySua,
      thanhVien.phanQuyen,
      thanhVien.userName,
      thanhVien.passW,
      thanhVien.id,
    ],
    (err, res) => {
      if (err) {
        callBack(err);
        return;
      }
      callBack(thanhVien);
    }
  );
};

ThanhVien.delete = (id, callBack) => {
  db.query(`DELETE FROM thanhVien WHERE id = ?`, id, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack("xóa thành công!");
  });
};

ThanhVien.checkLogin = (data, callBack) => {
  db.query(
    `SELECT * FROM thanhVien WHERE userName = ? AND passW = ?`,
    [data.userName, data.passW],
    (err, result) => {
      if (err || result.length === 0) {
        callBack(null);
      }
      callBack(result[0]);
    }
  );
};

module.exports = ThanhVien;
