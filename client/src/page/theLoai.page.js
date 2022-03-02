import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Table, Modal, Input } from "antd";
import "./style.css";
import { toJS } from "mobx";
import { useStores } from "../stores";
const { TextArea } = Input;
export const TheLoaiPage = observer(() => {
  const { theLoaiStore } = useStores();
  const [isEditing, setIsEditing] = useState(false);
  const [editingTheLoai, setEditingTheLoai] = useState(null);
  const [dataSource, setDataSource] = useState();
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    console.log("theLoaiPage: useEffect()");
    theLoaiStore.getData().then(() => {
      setDataSource(toJS(theLoaiStore.data));
    });
    return () => {
      theLoaiStore.clearData();
    };
  }, [refresh]);

  const columns = [
    {
      key: "1",
      title: "Tên Thể loại",
      dataIndex: "tenTheLoai",
    },
    {
      key: "2",
      title: "Ghi Chú",
      dataIndex: "ghiChu",
    },
    {
      key: "3",
      title: "Action",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditTheLoai(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteTheLoai(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddTheLoai = () => {
    const newTheLoai = {
      tenTheLoai: "...",
      GhiChu: "blabla",
    };
    theLoaiStore.insertData(newTheLoai);
    setRefresh(!refresh);
  };
  const onDeleteTheLoai = (record) => {
    Modal.confirm({
      title: "Bạn có chắc xóa thể loại này?",
      okText: "Yes",
      onType: "danger",
      onOk: () => {
        theLoaiStore.deleteData(record.id);
        setRefresh(!refresh);
      },
    });
  };
  const onEditTheLoai = (record) => {
    setIsEditing(true);
    setEditingTheLoai({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingTheLoai(null);
  };
  return (
    <div className="container-fluid">
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={onAddTheLoai}
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
        title="Edit Thể loại"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          theLoaiStore.updateData(editingTheLoai);
          setRefresh(!refresh);
          resetEditing();
        }}
      >
        <Input
          className="input_style"
          placeholder="Tên Thể loại"
          value={editingTheLoai?.tenTheLoai}
          onChange={(e) => {
            setEditingTheLoai((pre) => {
              return { ...pre, tenTheLoai: e.target.value };
            });
          }}
        />
        <TextArea
          rows={4}
          className="input_style"
          placeholder="Ghi chú"
          value={editingTheLoai?.ghiChu}
          onChange={(e) => {
            setEditingTheLoai((pre) => {
              return { ...pre, ghiChu: e.target.value };
            });
          }}
        />
      </Modal>
    </div>
  );
});
