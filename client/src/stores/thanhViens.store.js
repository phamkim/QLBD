import { makeAutoObservable } from "mobx";
import { API } from "../common/request";

class ThanhVienStore {
  data = [];
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  set = (data) => {
    if (data) {
      this.data = data.reverse();
    }
  };

  get = async () => {
    await API.get("/thanhVien")
      .then((result) => {
        this.set(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  insert = async (data) => {
    let thanhVien = JSON.stringify({
      hoTen: data.hoTen,
      diaChi: data.diaChi,
      soCMT: data.soCMT,
    });
    let result = null;
    await API.post("/thanhVien", thanhVien)
      .then((data) => {
        result = data;
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };

  delete = async (id) => {
    let result = null;
    await API.delete("/thanhVien/" + id)
      .then((data) => {
        result = data;
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };

  update = async (data) => {
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
    await API.put("/thanhVien", thanhVien)
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
