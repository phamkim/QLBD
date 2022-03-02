const db = require("../common/connect");

const PhieuThue = (phieuThue) => {
  this.id = phieuThue.id;
  this.ngayThue = phieuThue.id;
  this.ngayHenTra = phieuThue.ngayHenTra;
  this.ngayTra = phieuThue.ngayTra;
  this.ngaySua = phieuThue.ngaySua;
  this.idNguoiThue = phieuThue.idNguoiThue;
  this.soNgayThue = phieuThue.soNgayThue;
};

PhieuThue.get = (id, callback) => {
  const sqlString = "SELECT * FROM phieuThue WHERE id = ? ";
  db.query(sqlString, id, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

PhieuThue.getDetail = (id, callback) => {
  const sqlString =
    "SELECT * FROM chiTietPhieuThue WHERE chiTietPhieuThue.idPhieuThue";
  db.query(sqlString, id, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

PhieuThue.getAll = (callback) => {
  const sqlString = `SELECT phieuthue.id,phieuthue.idNguoiThue,phieuthue.ngayThue,phieuthue.ngayHenTra,phieuthue.ngayTra,phieuthue.soNgayThue,SUM(chitietphieuthue.soLuong*chitietphieuthue.donGia)as tongTien
  FROM phieuthue,chitietphieuthue
  WHERE phieuthue.id = chitietphieuthue.idPhieuThue
  GROUP BY phieuthue.id`;
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
    "UPDATE phieuThue SET ngayThue = ?,ngayHenTra = ?, ngayTra = ?, ngaySua = ?, idNguoiThue = ?, soNgayThue = ?  WHERE id = ?";
  console.log(phieuThue);
  db.query(
    sqlString,
    [
      phieuThue.ngayThue,
      phieuThue.ngayHenTra,
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
