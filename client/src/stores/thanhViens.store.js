import { makeAutoObservable } from "mobx";
import { API } from "../common/request";

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
      .then((data) => {
        result = data;
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
      diaChi: data.diaChi,
      soCMT: data.soCMT,
      ngayTao: data.ngayTao || null,
      ngaySua: data.ngaySua || null,
      phanQuyen: data.phanQuyen,
      userName: data.userName || null,
      password: data.password || null,
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
