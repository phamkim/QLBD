import { makeAutoObservable } from "mobx";
import { API } from "../common/request";
import { getDateToday, convertYMD } from "../common/index";
class PhieuThueStore {
  data = [];
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setData = (data) => {
    console.log("phieuThueStore.setData()");
    if (data) {
      this.data = Array.from(data).reverse();
    }
  };

  clearData = () => {
    console.log("phieuThueStore.clearData()");
    this.data = [];
  };

  getData = async () => {
    console.log("phieuThueStore.getData");
    let config = {
      headers: {
        "Content-Type": "application/json",
        authorization: window.sessionStorage.getItem("token"),
      },
    };
    await API.get("/phieuThue", config)
      .then((result) => {
        this.setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  insertData = (data) => {
    console.log("phieuThueStore.insertData()");
    let phieuThue = JSON.stringify({
      ngayThue: convertYMD(data.ngayThue),
      ngayHenTra: convertYMD(data.ngayHenTra),
      idNguoiThue: parseInt(data.idNguoiThue),
      soNgayThue: data.soNgayThue,
    });
    let result = null;
    API.post("/phieuThue", phieuThue)
      .then((data) => {
        result = data;
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };

  deleteData = (id) => {
    console.log("phieuThueStore.deleteData()");
    let result = null;
    API.delete("/phieuThue/" + id)
      .then((res) => {
        if (res.data.code === "ER_ROW_IS_REFERENCED_2") {
          alert("không thể xóa phiếu thuê này");
        }
        result = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };

  updateData = (data) => {
    console.log("phieuThueStore.updateData()");
    let phieuThue = JSON.stringify({
      id: data.id,
      ngayThue: convertYMD(data.ngayThue),
      ngayHenTra: convertYMD(data.ngayHenTra),
      ngayTra: convertYMD(data.ngayTra),
      ngaySua: getDateToday(),
      idNguoiThue: parseInt(data.idNguoiThue),
      soNgayThue: data.soNgayThue,
    });
    console.log(phieuThue);
    let result = null;
    API.put("/phieuThue", phieuThue)
      .then((data) => {
        result = data;
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };

  detailData = async (id) => {
    console.log("phieuThueStore.detailData");
    let chiTietPhieuThue = [];
    await API.get("/phieuThue/detail/" + id)
      .then((result) => {
        chiTietPhieuThue = result.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return chiTietPhieuThue;
  };
}

export default PhieuThueStore;
