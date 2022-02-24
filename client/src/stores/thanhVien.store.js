import { makeAutoObservable } from "mobx";
//import { API } from '../common/request';
import axios from "axios";

class ThanhVienStore {
  userName = "";
  passW = "";
  token = window.sessionStorage.getItem("token");

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  refreshToken = () => {
    this.token = window.sessionStorage.getItem("token");
    console.log(this.token);
  };

  logIn = async (userName, passW) => {
    let data = JSON.stringify({
      userName: userName,
      passW: passW,
    });
    let config = {
      method: "POST",
      url: process.env.REACT_APP_BASE_URL + "/logIn",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config)
      .then((response) => {
        if (response.data.token !== null) {
          window.sessionStorage.setItem("token", response.data.token);
        } else {
          alert("sai tai khoan hoac mat khau");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("dang nhap that bai");
      });
  };
}

export default ThanhVienStore;