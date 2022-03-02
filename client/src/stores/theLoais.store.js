import { makeAutoObservable } from "mobx";
import { API } from "../common/request";

class TheLoaiStore {
  data = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setData = (data) => {
    console.log("theLoaiStore.setData()");
    if (data) {
      this.data = Array.from(data).reverse();
    }
  };

  clearData = () => {
    console.log("theLoaiStore.clearData()");
    this.data = [];
  };

  getData = async () => {
    console.log("theLoaiStore.getData()");
    let config = {
      headers: {
        "Content-Type": "application/json",
        authorization: window.sessionStorage.getItem("token"),
      },
    };
    await API.get("/theLoai", config)
      .then((result) => {
        console.log(result.data);
        this.setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  insertData = (data) => {
    console.log("theLoaiStore.insertData()");
    let theLoai = JSON.stringify({
      tenTheLoai: data.tenTheLoai,
      ghiChu: data.ghiChu,
    });
    let result = null;
    API.post("/theLoai", theLoai)
      .then((data) => {
        result = data;
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };

  deleteData = (id) => {
    console.log("theLoaiStore.deleteData()");
    let result = null;
    API.delete("/theLoai/" + id)
      .then((res) => {
        if (res.data.code === "ER_ROW_IS_REFERENCED_2") {
          alert("không thể xóa thể loại này");
        }
        result = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };

  updateData = (data) => {
    console.log("theLoaiStore.updateData()");
    let theLoai = JSON.stringify({
      id: data.id,
      tenTheLoai: data.tenTheLoai,
      ghiChu: data.ghiChu,
    });
    let result = null;
    API.put("/theLoai", theLoai)
      .then((data) => {
        result = data;
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };
}

export default TheLoaiStore;
