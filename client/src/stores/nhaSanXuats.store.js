import { makeAutoObservable } from "mobx";
import { API } from "../common/request";

class NhaSanXuatStore {
    data = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    setData = (data) => {
        console.log("nhaSanXuatStore.setData()");
        if (data) {
            this.data = Array.from(data).reverse();
        }
    };

    clearData = () =>{
        console.log("nhaSanXuatStore.getData()");
        this.data = [];
    };

    getData = async () =>{
        console.log("nhaSanXuatStore.getData()");
        let config = {
            headers: {
                "Content-Type": "application/json",
                authorization: window.sessionStorage.getItem("token"),
            },
        };
        await API.get("/nhaSX", config)
            .then((result)=>{
                console.log(result.data);
                this.setData(result.data);
            })
            .catch((err) => {
               console.log(err); 
            });
    };
    insertData =  async (data) => {
        console.log("nhaSanXuatStore.insertData()");
        let nhaSanXuat = JSON.stringify({
            tenNhaSX: data.tenNhaSX,
            diaChi: data.diaChi
        });
        let result = null;
        await API.post("/nhaSX", nhaSanXuat)
            .then((data) => {
                result = data;
            })
            .catch((err) => {
                console.log(err);
            });
        return result;
    };
    
    deleteData = (id) => {
        console.log("nhaSanXuatStore.deleteData()");
        let result = null;
        API.delete("/nhaSX/" +id)
            .then((res) => {
                if (res.data.code === "ER_ROW_IS_REFERENCED_2") {
                    alert("không thể xóa nhà sản xuất này");
                  }
                result = res.data;
            })
            .catch((err) => {
                console.log(err);
            });
        return result;
    };
    updateData = async (data) => {
        console.log("nhaSanXuatStore.updateData()");
        let nhaSanXuat = JSON.stringify({
            id: data.id,
            tenNhaSX: data.tenNhaSX,
            diaChi: data.diaChi
        });
        let result = null;
        await API.put("/nhaSX", nhaSanXuat)
            .then((data) => {
                result = data;
            })
            .catch((err) =>{
                console.log(err);
            });
        return result;
    };
}

export default NhaSanXuatStore;