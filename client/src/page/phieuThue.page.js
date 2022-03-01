import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useStores } from "../stores";
import { Button, Table, Modal, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./style.css";
import { toJS } from "mobx";


export const PhieuThuePage = observer(() => {
    const { phieuThueStore } = useStores();
    const [isEditing, setIsEditing] = useState(false);
    const [editingPhieuThue, setEditingPhieuThue] = useState(null);
    const [dataSource, setDataSource] = useState();
    const [refresh, setRefresh] = useState(false);
    
    useEffect(() => {
        console.log("phieuThuePage: useEffect()");
        phieuThueStore.getData().then(() => {
            setDataSource(toJS(phieuThueStore.data));
        });
        return () => {
            phieuThueStore.clearData();
        };
    }, [refresh]);

    const columns = [
        {
            key: "1",
            title: "Ngày thuê",
            dataIndex: "ngayThue",
        },
        {
            key: "2",
            title: "Ngày Trả",
            dataIndex: "ngayTra",
        },
        {
            key: "3",
            title: "Ngày sửa",
            dataIndex: "ngaySua",
        },
        {
            key: "4",
            title: "Người Thuê",
            dataIndex: "idNguoiThue",
        },
        {
            key: "5",
            title: "Số ngày thuê",
            dataIndex: "soNgayThue",
        },
        {
            key: "6",
            title: "Actions",
            render: (record) => {
                return (
                    <>
                        <EditOutlined
                            onClick={() => {
                                onEditPhieuThue(record);
                            }}
                        />
                        <DeleteOutlined
                            onClick={() => {
                                onDeletePhieuThue(record);
                            }}
                            style={{ color: "red", marginLeft: 12 }}
                        />
                    </>
                );
            },
        },
    ];

    const onAddPhieuThue = () => {
        const newPhieuThue = {
            ngayThue: "...",
            ngayTra: "...",
            ngaySua: "...",
            idNguoiThue: "1",
            soNgayThue: "0"
        };
        phieuThueStore.insertData(newPhieuThue);
        setRefresh(!refresh);
    };
    const onDeletePhieuThue = (record) => {
        Modal.confirm({
            title: "Bạn có chắc chắn xóa phiếu này?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                phieuThueStore.deleteData(record.id);
                setRefresh(!refresh);
            },
        });
    };
    const onEditPhieuThue = (record) => {
        setIsEditing(true);
        setEditingPhieuThue({ ...record });
    };
    const resetEditing = () => {
        setIsEditing(false);
        setEditingPhieuThue(null);
    };
    return (
        <div className="container-fluid">
            <Button
                type="primary"
                style={{
                    marginBottom: 16,
                }}
                onClick={onAddPhieuThue}
            >
                Add
            </Button>
            <Table
                columns={columns}
                dataSource={dataSource}
                scroll={{ x: 800, y: 400 }}
                bordered
            ></Table>
            <Modal
                title="Edit Phiếu thuê"
                visible={isEditing}
                okText="Save"
                onCancel={() => { resetEditing(); }}
                onOk={() => {
                    phieuThueStore.updateData(editingPhieuThue);
                    setRefresh(!refresh);
                    resetEditing();
                }}
            >
                <Input
                    className="input_style"
                    placeholder="Ngày Thuê"
                    value={editingPhieuThue?.ngayThue}
                    onChange={(e) => {
                        setEditingPhieuThue((pre) => {
                            return { ...pre, ngayThue: e.target.value };
                        });
                    }}
                />
                <Input
                    className="input_style"
                    placeholder="Ngày Trả"
                    value={editingPhieuThue?.ngayTra}
                    onChange={(e) => {
                        setEditingPhieuThue((pre) => {
                            return { ...pre, ngayTra: e.target.value };
                        });
                    }}
                />
                <Input
                    className="input_style"
                    placeholder="Ngày Sửa"
                    value={editingPhieuThue?.ngaySua}
                    onChange={(e) => {
                        setEditingPhieuThue((pre) => {
                            return { ...pre, ngaySua: e.target.value };
                        });
                    }}
                />
                <Input
                    className="input_style"
                    placeholder="Id Người Thuê"
                    value={editingPhieuThue?.idNguoiThue}
                    onChange={(e) => {
                        setEditingPhieuThue((pre) => {
                            return { ...pre, idNguoiThue: e.target.value };
                        });
                    }}
                />
                <Input
                    className="input_style"
                    placeholder="Số Ngày Thuê"
                    value={editingPhieuThue?.soNgayThue}
                    onChange={(e) => {
                        setEditingPhieuThue((pre) => {
                            return { ...pre, soNgayThue: e.target.value };
                        });
                    }}
                />
            </Modal>
        </div>
    )
})