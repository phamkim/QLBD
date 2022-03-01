import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useStores } from "../stores";
import { Button, Table, Modal, Input, Select } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./style.css";
import { toJS } from "mobx";
const { Option } = Select;

export const ThanhVienPage = observer(() => {
  const { thanhVienStore } = useStores();
  const [isEditing, setIsEditing] = useState(false);
  const [editingThanhVien, setEditingThanhVien] = useState(null);
  const [dataSource, setDataSource] = useState();
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    console.log("thanhVienPage: useEffect()");
    thanhVienStore.getData().then(() => {
      setDataSource(toJS(thanhVienStore.data));
    });
    return () => {
      thanhVienStore.clearData();
    };
  }, [refresh]);

  const columns = [
    {
      key: "1",
      title: "Họ Tên",
      dataIndex: "hoTen",
    },
    {
      key: "2",
      title: "Địa chỉ",
      dataIndex: "diaChi",
    },
    {
      key: "3",
      title: "Số CMT",
      dataIndex: "soCMT",
    },
    {
      key: "4",
      title: "Phân Quyền",
      render: (record) => {
        console.log(record.id);
        if (record.phanQuyen == 2) {
          return "Admin";
        } else if (record.phanQuyen == 1) {
          return "Nhân viên";
        } else {
          return "Thành viên";
        }
      },
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditThanhVien(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteThanhVien(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddThanhVien = () => {
    const newThanhVien = {
      hoTen: "Name 2",
      diaChi: "DiaChi",
      soCMT: "0123456789",
    };
    thanhVienStore.insertData(newThanhVien);
    setRefresh(!refresh);
  };
  const onDeleteThanhVien = (record) => {
    Modal.confirm({
      title: "Bạn có chắc chắn xóa thành viên này?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        thanhVienStore.deleteData(record.id);
        setRefresh(!refresh);
      },
    });
  };
  const onEditThanhVien = (record) => {
    setIsEditing(true);
    setEditingThanhVien({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingThanhVien(null);
  };
  return (
    <div className="container-fluid">
      <Button
        type="primary"
        style={{
          marginBottom: 16,
        }}
        onClick={onAddThanhVien}
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
        title="Edit ThanhVien"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          thanhVienStore.updateData(editingThanhVien);
          setRefresh(!refresh);
          resetEditing();
        }}
      >
        <Input
          className="input_style"
          placeholder="Họ tên"
          value={editingThanhVien?.hoTen}
          onChange={(e) => {
            setEditingThanhVien((pre) => {
              return { ...pre, hoTen: e.target.value };
            });
          }}
        />
        <Input
          className="input_style"
          placeholder="Địa chỉ"
          value={editingThanhVien?.diaChi}
          onChange={(e) => {
            setEditingThanhVien((pre) => {
              return { ...pre, diaChi: e.target.value };
            });
          }}
        />
        <Input
          className="input_style"
          placeholder="Số cmt hoặc số căn cước"
          value={editingThanhVien?.soCMT}
          onChange={(e) => {
            setEditingThanhVien((pre) => {
              return { ...pre, soCMT: e.target.value };
            });
          }}
        />
        <Select
          className="input_style"
          defaultValue={editingThanhVien?.phanQuyen}
          onChange={(e) => {
            setEditingThanhVien((pre) => {
              return { ...pre, phanQuyen: e };
            });
          }}
        >
          <Option value={0}>Thành viên</Option>
          <Option value={1}>Nhân Viên</Option>
          <Option value={2}>Admin</Option>
        </Select>
      </Modal>
    </div>
  );
});
