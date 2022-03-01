import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Table, Modal, Input} from "antd";
import "./style.css";
import { toJS } from "mobx";
import { useStores } from "../stores";

export const BangDiaPage = observer(() => {
    const { bangDiaStore } = useStores();
    const [isEditing, setIsEditing] = useState(false);
    const [editingBangDia, setEditingBangDia] = useState(null);
    const [dataSource, setDataSource] = useState();
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        console.log("bangDiaPage: useEffect()");
        bangDiaStore.getData().then(() => {
            setDataSource(toJS(bangDiaStore.data));
        });
        return () => {
            bangDiaStore.clearData();
        };
    }, [refresh]);

    const columns = [
        {
            key: "1",
            title: "ID Thể loại",
            dataIndex: "idTheLoai",
        },
        {
            key: "2",
            title: "Tên Băng Đĩa",
            dataIndex: "tenBangDia",
        },
        {
            key: "3",
            title: "Id Nhà sản xuất",
            dataIndex: "idNhaSX",
        },
        {
            key: "4",
            title: "Tình trạng",
            dataIndex: "tinhTrang",
        },
        {
            key: "5",
            title: "Ngày tạo",
            dataIndex: "ngayTao",
        },
        {
            key: "6",
            title: "Ngày sửa",
            dataIndex: "ngaySua",
        },
        {
            key: "7",
            title: "Ghi chú",
            dataIndex: "ghiChu",
        },
        {
            key: "8",
            title: "Action",
            render: (record) => {
                return (
                    <>
                        <EditOutlined
                            onClick={() => {
                                onEditBangDia(record);
                            }}
                        />
                        <DeleteOutlined
                            onClick={() => {
                                onDeleteBangDia(record);
                            }}
                            style={{ color: "red", marginLeft: 12 }}
                        />
                    </>
                );
            },
        },
    ];

    const onAddBangDia = () => {
        const newBangDia = {
            idTheLoai: "1",
            tenBangDia: "Băng đĩa",
            idNhaSX: "1",
            tinhTrang: "new",
            ngayTao: "...",
            ngaySua: "...",
            ghiChu: "...",
        };
        bangDiaStore.insertData(newBangDia);
        setRefresh(!refresh);
    };
    const onDeleteBangDia = (record) => {
        Modal.confirm({
            title: "Bạn có chắc xóa băng đĩa này?",
            okText: "Yes",
            onType: "danger",
            onOk: () => {
                bangDiaStore.deleteData(record.id);
                setRefresh(!refresh);
            },
        });
    };
    const onEditBangDia = (record) => {
        setIsEditing(true);
        setEditingBangDia({ ...record });
    };
    const resetEditing = () => {
        setIsEditing(false);
        setEditingBangDia(null);
    };
    return (
        <div className='container-fluid'>
            <Button
                type="primary"
                style={{ marginBottom: 16, }}
                onClick={onAddBangDia}
            >
                Add
            </Button>
            <Table
                columns={columns}
                dataSource={dataSource}
                scroll={{ x: 800, y: 400 }}
                bordered
            >
            </Table>
            <Modal
                title="Edit Băng đĩa"
                visible={isEditing}
                okText="Save"
                onCancel={() => {
                    resetEditing();
                }}
                onOk={() => {
                    bangDiaStore.updateData(editingBangDia);
                    setRefresh(!refresh);
                    resetEditing();
                }}
            >
                <Input
                    className="input_style"
                    placeholder="ID Thể loại"
                    value={editingBangDia?.idTheLoai}
                    onChange={(e) => {
                        setEditingBangDia((pre) => {
                            return { ...pre, idTheLoai: e.target.value };
                        });
                    }}
                />
                <Input
                    className="input_style"
                    placeholder="Tên băng đĩa"
                    value={editingBangDia?.tenBangDia}
                    onChange={(e) => {
                        setEditingBangDia((pre) => {
                            return { ...pre, tenBangDia: e.target.value };
                        });
                    }}
                />
                <Input
                    className="input_style"
                    placeholder="Id Nhà sản xuất"
                    value={editingBangDia?.idNhaSX}
                    onChange={(e) => {
                        setEditingBangDia((pre) => {
                            return { ...pre, idNhaSX: e.target.value };
                        });
                    }}
                />
                <Input
                    className="input_style"
                    placeholder="Tình trạng"
                    value={editingBangDia?.tinhTrang}
                    onChange={(e) => {
                        setEditingBangDia((pre) => {
                            return { ...pre, tinhTrang: e.target.value };
                        });
                    }}
                />
                <Input
                    className="input_style"
                    placeholder="Ngày tạo"
                    value={editingBangDia?.ngayTao}
                    onChange={(e) => {
                        setEditingBangDia((pre) => {
                            return { ...pre, ngayTao: e.target.value };
                        });
                    }}
                />
                <Input
                    className="input_style"
                    placeholder="Ngày sửa"
                    value={editingBangDia?.ngaySua}
                    onChange={(e) => {
                        setEditingBangDia((pre) => {
                            return { ...pre, ngaySua: e.target.value };
                        });
                    }}
                />
                <Input
                    className="input_style"
                    placeholder="Ghi chú"
                    value={editingBangDia?.ghiChu}
                    onChange={(e) => {
                        setEditingBangDia((pre) => {
                            return { ...pre, ghiChu: e.target.value };
                        });
                    }}
                />
            </Modal>
        </div>
    )
});