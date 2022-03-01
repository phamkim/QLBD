import { makeAutoObservable } from "mobx";
import { API } from "../common/request";

class BangDiaStore {
    data = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    setData = (data) => {
        console.log("bangDiaStore.setData()");
        if (data) {
            this.data = Array.from(data).reverse();
        }
    };

    clearData = () => {
        console.log("bangDiaStore.getData()");
        this.data = [];
    };

    getData = async () => {
        console.log("bangDiaStore.getData()");
        let config = {
            headers: {
                "Content-Type": "application/json",
                authorization: window.sessionStorage.getItem("token"),
            },
        };
        await API.get("/bangDia", config)
            .then((result) => {
                this.setData(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    insertData = (data) => {
        console.log("bangDiaStore.insertData()");
        let bangDia = JSON.stringify({
            idTheLoai: data.idTheLoai,
            tenBangDia: data.tenBangDia,
            idNhaSX: data.idNhaSX,
            tinhTrang: data.tinhTrang,
            ngayTao: data.ngayTao,
            ngaySua: data.ngaySua,
            ghiChu: data.ghiChu,
        });
        let result = null;
        API.post("/bangDia", bangDia)
            .then((data) => {
                result = data;
            })
            .catch((err) => {
                console.log(err);
            });
        return result;
    };

    deleteData = (id) => {
        console.log("bangDiaStore.deleteData()");
        let result = null;
        API.delete("/bangDia/" + id)
            .then((data) => {
                result = data;
            })
            .catch((err) => {
                console.log(err);
            });
        return result;
    };
    
    updateData = (data) => {
        console.log(data);
        console.log("bangDiaStore.updateData()");
        let bangDia = JSON.stringify({
            id: data.id,
            idTheLoai: parseInt(data.idTheLoai),
            tenBangDia: data.tenBangDia,
            idNhaSX: parseInt(data.idNhaSX),
            tinhTrang: data.tinhTrang,
            ngayTao: data.ngayTao,
            ngaySua: data.ngaySua,
            ghiChu: data.ghiChu,
        });
        
        let result = null;
        API.put("/bangDia", bangDia)
            .then((data) => {
                result = data;
            })
            .catch((err) => {
                console.log(err);
            });
        return result;
    };
}

export default BangDiaStore;