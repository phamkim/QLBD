import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import NhaSanXuatStore from '../stores/nhaSanXuats.store';
import { Button, Table, Modal, Input} from "antd";
import "./style.css";
import { toJS } from "mobx";
import { useStores } from "../stores";

export const NhaSanXuatPage = observer(() => {
    const { nhaSanXuatStore } = useStores();
    const [isEditing, setIsEditing] = useState(false);
    const [editingNhaSanXuat, setEditingNhaSanXuat] = useState(null);
    const [dataSource, setDataSource] = useState();
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        console.log("nhaSanXuatPage: useEffect()");
        nhaSanXuatStore.getData().then(() => {
            setDataSource(toJS(nhaSanXuatStore.data));
        });
        return () => {
            nhaSanXuatStore.clearData();
        };
    }, [refresh]);

    const columns = [
        {
            key: "1",
            title: "Tên Nhà sản xuất",
            dataIndex: "tenNhaSX",
        },
        {
            key: "2",
            title: "Địa chỉ",
            dataIndex: "diaChi",
        },
        {
            key: "3",
            title: "Action",
            render: (record) => {
                return (
                    <>
                        <EditOutlined
                            onClick={() => {
                                onEditNhaSanXuat(record);
                            }}
                        />
                        <DeleteOutlined
                            onClick={() => {
                                onDeleteNhaSanXuat(record);
                            }}
                            style={{ color: "red", marginLeft: 12 }}
                        />
                    </>
                );
            },
        },
    ];

    const onAddNhaSanXuat = () => {
        const newNhaSanXuat = {
            tenNhaSX: "Name Producer",
            diaChi: "Address",
        };
        nhaSanXuatStore.insertData(newNhaSanXuat);
        setRefresh(!refresh);
    };
    const onDeleteNhaSanXuat = (record) => {
        Modal.confirm({
            title: "Bạn có chắc xóa nhà sản xuất này?",
            okText: "Yes",
            onType: "danger",
            onOk: () => {
                nhaSanXuatStore.deleteData(record.id);
                setRefresh(!refresh);
            },
        });
    };
    const onEditNhaSanXuat = (record) => {
        setIsEditing(true);
        setEditingNhaSanXuat({ ...record });
    };
    const resetEditing = () => {
        setIsEditing(false);
        setEditingNhaSanXuat(null);
    };
    return (
        <div className='container-fluid'>
            <Button
                type="primary"
                style={{ marginBottom: 16, }}
                onClick={onAddNhaSanXuat}
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
                title="Edit Nhà sản xuất"
                visible={isEditing}
                okText="Save"
                onCancel={() => {
                    resetEditing();
                }}
                onOk={() => {
                    nhaSanXuatStore.updateData(editingNhaSanXuat);
                    setRefresh(!refresh);
                    resetEditing();
                }}
            >
                <Input
                    className="input_style"
                    placeholder="Tên Nhà Sản Xuất"
                    value={editingNhaSanXuat?.tenNhaSX}
                    onChange={(e) => {
                        setEditingNhaSanXuat((pre) => {
                            return { ...pre, tenNhaSX: e.target.value };
                        });
                    }}
                />
                <Input
                    className="input_style"
                    placeholder="Địa chỉ"
                    value={editingNhaSanXuat?.diaChi}
                    onChange={(e) => {
                        setEditingNhaSanXuat((pre) => {
                            return { ...pre, diaChi: e.target.value };
                        });
                    }}
                />
            </Modal>
        </div>
    )
});