import { makeAutoObservable } from "mobx";
import { API } from "../common/request";
import { getDateToday } from "../common/index";
class ThanhVienStore {
  data = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setData = (data) => {
    console.log("thanhVienStore.setData()");
    if (data) {
      this.data = Array.from(data).reverse();
    }
  };

  clearData = () => {
    console.log("thanhVienStore.clearData()");
    this.data = [];
  };

  getData = async () => {
    console.log("thanhVienStore.getData()");
    let config = {
      headers: {
        "Content-Type": "application/json",
        authorization: window.sessionStorage.getItem("token"),
      },
    };
    await API.get("/thanhVien", config)
      .then((result) => {
        this.setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  insertData = (data) => {
    console.log("thanhVienStore.insertData()");
    let thanhVien = JSON.stringify({
      hoTen: data.hoTen,
      diaChi: data.diaChi,
      soCMT: data.soCMT,
      phanQuyen: data.phanQuyen,
      userName: data.userName,
      password: data.password,
    });
    let result = null;
    API.post("/thanhVien", thanhVien)
      .then((data) => {
        result = data;
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };

  deleteData = (id) => {
    console.log("thanhVienStore.deleteData()");
    let result = null;
    API.delete("/thanhVien/" + id)
      .then((res) => {
        if (res.data.code === "ER_ROW_IS_REFERENCED_2") {
          alert("không thể xóa thành viên này");
        }
        result = res;
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };

  updateData = (data) => {
    console.log("thanhVienStore.updateData()");
    let thanhVien = JSON.stringify({
      id: data.id,
      hoTen: data.hoTen,
      maTTV: data.maTTV,
      diaChi: data.diaChi,
      soCMT: data.soCMT,
      ngaySua: getDateToday(),
      phanQuyen: data.phanQuyen,
      userName: data.userName,
      password: data.password,
    });
    let result = null;
    API.put("/thanhVien", thanhVien)
      .then((data) => {
        result = data;
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };
}

export default ThanhVienStore;
