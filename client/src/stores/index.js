import React from "react";
import ThanhVienStore from './thanhVien.store';
class RootStore {
    constructor(){
        this.thanhVienStore = new ThanhVienStore();
    }
}

const StoresContext = React.createContext(new RootStore());
export const useStores = () => React.useContext(StoresContext);