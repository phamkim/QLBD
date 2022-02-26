import React from "react";
import ThanhVien from './thanhVien.store';
import ThanhVienStore from "./thanhViens.store";
class RootStore {
    constructor(){
        this.thanhVien = new ThanhVien(this);
        this.thanhVienStore = new ThanhVienStore(this);
    }
}

const StoresContext = React.createContext(new RootStore());
export const useStores = () => React.useContext(StoresContext);