import { makeAutoObservable } from "mobx";
import { API } from "../common/request";
import { getDateToday } from "../common/index";
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
            hinhAnh: data.hinhAnh,
            tenBangDia: data.tenBangDia,
            idTheLoai: parseInt(data.idTheLoai),
            idNhaSX: parseInt(data.idNhaSX),
            tinhTrang: data.tinhTrang,
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
            .then((res) => {
                if (res.data.code === "ER_ROW_IS_REFERENCED_2") {
                    alert("không thể xóa băng đĩa này");
                  }
                result = res.data;
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
            hinhAnh: data.hinhAnh,
            tenBangDia: data.tenBangDia,
            idTheLoai: parseInt(data.idTheLoai),
            idNhaSX: parseInt(data.idNhaSX),
            tinhTrang: data.tinhTrang,
            ngaySua: getDateToday(),
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