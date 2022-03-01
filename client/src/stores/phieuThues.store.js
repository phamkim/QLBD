import { makeAutoObservable } from "mobx";
import { API } from "../common/request";

class PhieuThueStore{
    data = [];
    constructor(rootStore){
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    setData = (data) => {
        console.log("phieuThueStore.setData()");
        if(data){
            this.data = Array.from(data).reverse();
        }
    };

    clearData = (data) => {
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
            ngayThue: data.ngayThue,
            ngayTra: data.ngayTra,
            ngaySua: data.ngaySua,
            idNguoiThue: data.idNguoiThue,
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
            .then((data) => {
                result = data;
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
            ngayThue: data.ngayThue,
            ngayTra: data.ngayTra,
            ngaySua: data.ngaySua,
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
}

export default PhieuThueStore;