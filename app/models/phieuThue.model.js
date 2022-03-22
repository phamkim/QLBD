const db = require("../common/connect");

const PhieuThue = () => {};

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
    "SELECT * FROM chiTietPhieuThueFull WHERE chiTietPhieuThueFull.idPhieuThue = ?";
  db.query(sqlString, id, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

PhieuThue.getAll = (callback) => {
  const sqlString = `SELECT phieuthue.id,phieuthue.idNguoiThue,phieuthue.ngayThue,phieuthue.ngayHenTra,phieuthue.ngayTra,SUM(chitietphieuthue.soLuong*bangdia.giaThue)as tongTien
                     FROM phieuthue,chitietphieuthue,bangdia
                     WHERE phieuthue.id = chitietphieuthue.idPhieuThue and chitietphieuthue.idBangDia = bangdia.id
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

PhieuThue.update = (phieuThue, id, callBack) => {
  const sqlString = "UPDATE phieuThue SET ? WHERE id = ?";
  db.query(sqlString, [phieuThue, id], (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack(phieuThue);
  });
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

PhieuThue.statistics = (callBack) => {
  db.query(`SELECT * FROM viewDoanhThuTheoThang`, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack(res);
  });
};

module.exports = PhieuThue;
