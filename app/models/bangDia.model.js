const db = require("../common/connect");

const BangDia = (bangDia) => {
  this.id = bangDia.id;
  this.idTheLoai = bangDia.idTheLoai;
  this.tenBangDia = bangDia.tenBangDia;
  this.nhaSX = bangDia.nhaSX;
  this.tinhTrang = bangDia.tinhTrang;
  this.ngayTao = bangDia.ngayTao;
  this.ngaySua = bangDia.ngaySua;
  this.ghiChu = bangDia.ghiChu;
};

BangDia.get = (id, callback) => {
  const sqlString = "SELECT * FROM bangDia Where id = ? ";
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

BangDia.update = (bangDia, callBack) => {
  const sqlString =
    "UPDATE bangDia SET idTheLoai = ?, tenBangDia = ?, nhaSX = ?, tinhTrang = ?, ngayTao = ?, ngaySua = ?, ghiChu = ?  WHERE id = ?";
  db.query(
    sqlString,
    [
      bangDia.idtheLoai,
      bangDia.tenBangDia,
      bangDia.nhaSX,
      bangDia.tinhTrang,
      bangDia.ngayTao,
      bangDia.ngaySua,
      bangDia.ghiChu,
      bangDia.id,
    ],
    (err, res) => {
      if (err) {
        callBack(err);
        return;
      }
      callBack(bangDia);
    }
  );
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

module.exports = BangDia;
