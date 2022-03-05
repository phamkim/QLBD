import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useStores } from "../stores";
import { Button, Table, Modal, Input, Select, Form } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./style.css";
import { toJS } from "mobx";
const { Option } = Select;

export const ThanhVienPage = observer(() => {
  const layout = {
    labelCol: {
      span: 9,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const [form] = Form.useForm();
  const { thanhVienStore } = useStores();
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
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
      title: "Mã thẻ thành viên",
      dataIndex: "maTTV",
    },
    {
      key: "2",
      title: "Họ Tên",
      dataIndex: "hoTen",
    },
    {
      key: "3",
      title: "Số CMT",
      dataIndex: "soCMT",
    },
    {
      key: "4",
      title: "Địa chỉ",
      dataIndex: "diaChi",
    },

    {
      key: "5",
      title: "Phân Quyền",
      render: (record) => {

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
      key: "6",
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

  const onAddFinish = (values) => {
    thanhVienStore
      .insertData(values)
      .then(() => {
        setRefresh(!refresh);
        resetEditing();
      })
  };

  const onAddThanhVien = () => {
    form.setFieldsValue();
    setIsOpenAdd(true);
  }
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
      setIsOpenEdit(true);
      form.setFieldsValue({
        id: record.id,
        maTTV: record.maTTV,
        hoTen: record.hoTen,
        soCMT: record.soCMT,
        diaChi: record.diaChi, 
        phanQuyen: record.phanQuyen,
      })
  };
  const onEditFinish = (values) => {
    thanhVienStore
      .updateData(values)
      .then(() =>{
        setRefresh(!refresh);
        resetEditing();
      })
  };
  const resetEditing = () => {
    setIsOpenAdd(false);
    setIsOpenEdit(false);
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
        title="Thêm thành viên"
        visible={isOpenAdd}
        width={740}
        footer={null}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
      >
        <Form
          form={form}
          {...layout}
          name="form_them_thanh_vien"
          onFinish={onAddFinish}
        >
          <Form.Item
            name="maTTV"
            label="Mã thẻ thành viên"
            rules={[{ required: true }]}
          >
            <Input placeholder="Mã thẻ thành viên" />
          </Form.Item>
          <Form.Item
            name="hoTen"
            label="Họ tên"
            rules={[{ required: true }]}
          >
            <Input placeholder="Họ tên" />
          </Form.Item>
          <Form.Item
            name="soCMT"
            label="Số CMT/CC"
            rules={[{ required: true }]}
          >
            <Input placeholder="Số CMT/CC" />
          </Form.Item>
          <Form.Item
            name="diaChi"
            label="Địa chỉ"
            rules={[{ required: true }]}
          >
            <Input placeholder="Địa chỉ" />
          </Form.Item>
          <Form.Item
            name="phanQuyen"
            label="Phân quyền"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value={0}>Thành viên</Option>
              <Option value={1}>Nhân Viên</Option>
              <Option value={2}>Admin</Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 9, span: 14 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Sửa thành viên"
        visible={isOpenEdit}
        width={740}
        footer={null}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
      >
        <Form
          form={form}
          {...layout}
          name="form_them_thanh_vien"
          onFinish={onEditFinish}
        >
          <Form.Item name="id" hidden={true} />
          <Form.Item
            name="maTTV"
            label="Mã thẻ thành viên"
            rules={[{ required: true }]}
          >
            <Input placeholder="Mã thẻ thành viên" />
          </Form.Item>
          <Form.Item
            name="hoTen"
            label="Họ tên"
            rules={[{ required: true }]}
          >
            <Input placeholder="Họ tên" />
          </Form.Item>
          <Form.Item
            name="soCMT"
            label="Số CMT/CC"
            rules={[{ required: true }]}
          >
            <Input placeholder="Số CMT/CC" />
          </Form.Item>
          <Form.Item
            name="diaChi"
            label="Địa chỉ"
            rules={[{ required: true }]}
          >
            <Input placeholder="Địa chỉ" />
          </Form.Item>
          <Form.Item
            name="phanQuyen"
            label="Phân quyền"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value={0}>Thành viên</Option>
              <Option value={1}>Nhân Viên</Option>
              <Option value={2}>Admin</Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 9, span: 14 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {/* <Modal
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
          placeholder="Mã thẻ thành viên"
          value={editingThanhVien?.maTTV}
          onChange={(e) => {
            setEditingThanhVien((pre) => {
              return { ...pre, maTTV: e.target.value };
            });
          }}
        />
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
          placeholder="Số cmt hoặc số căn cước"
          value={editingThanhVien?.soCMT}
          onChange={(e) => {
            setEditingThanhVien((pre) => {
              return { ...pre, soCMT: e.target.value };
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
      </Modal> */}
    </div>
  );
});
