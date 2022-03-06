import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Table, Modal, Input, Select, Form } from "antd";
import "./style.css";
import { toJS } from "mobx";
import { useStores } from "../stores";
const { TextArea } = Input;
const { Option } = Select;
export const BangDiaPage = observer(() => {
  const layout = {
    labelCol: {
      span: 9,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const [form] = Form.useForm();
  const { bangDiaStore, theLoaiStore, nhaSanXuatStore } = useStores();
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [dataSource, setDataSource] = useState();
  const [refresh, setRefresh] = useState(false);
  const [theLoais, setTheLoais] = useState();
  const [nhaSanXuats, setNhaSanXuats] = useState();
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  useEffect(() => {
    console.log("bangDiaPage: useEffect()");
    bangDiaStore.getData().then(() => {
      setDataSource(toJS(bangDiaStore.data));
    });
    theLoaiStore.getData().then(() => {
      setTheLoais(toJS(theLoaiStore.data));
    });
    nhaSanXuatStore.getData().then(() => {
      setNhaSanXuats(toJS(nhaSanXuatStore.data));
    });
    return () => {
      bangDiaStore.clearData();
      theLoaiStore.clearData();
      nhaSanXuatStore.clearData();
    };
  }, [refresh]);

  const columns = [
    {
      key: "1",
      title: "Tên Băng Đĩa",
      dataIndex: "tenBangDia",
    },
    {
      key: "2",
      title: "Thể loại",
      dataIndex: "idTheLoai",
      render: (idTheLoai) => {
        let tenTheLoai = "";
        theLoaiStore.data.map((data) => {
          if (data.id === idTheLoai) {
            tenTheLoai = data.tenTheLoai;
          }
        });
        return tenTheLoai;
      },
    },
    {
      key: "3",
      title: "Nhà sản xuất",
      dataIndex: "idNhaSX",
      render: (idNhaSX) => {
        let tenNhaSX = "";
        nhaSanXuatStore.data.map((data) => {
          if (data.id === idNhaSX) {
            tenNhaSX = data.tenNhaSX;
          }
        });
        return tenNhaSX;
      },
    },
    {
      key: "4",
      title: "Tình trạng",
      dataIndex: "tinhTrang",
    },
    {
      key: "5",
      title: "Ghi chú",
      dataIndex: "ghiChu",
    },
    {
      key: "6",
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
    form.setFieldsValue();
    setIsOpenAdd(true);
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
    setIsOpenEdit(true);
    form.setFieldsValue({
      id: record.id,
      tenBangDia: record.tenBangDia,
      idTheLoai: record.idTheLoai,
      idNhaSX: record.idNhaSX,
      tinhTrang: record.tinhTrang,
      ghiChu: record.ghiChu,
    })
  };
  const resetEditing = () => {
    setIsOpenEdit(false);
    setIsOpenAdd(false);
    form.setFieldsValue({
      id: null,
      tenBangDia: null,
      idTheLoai: null,
      idNhaSX: null,
      tinhTrang: null,
      ghiChu: null,
    })
  };
  const onAddFinish = (values) => {
    bangDiaStore
      .insertData(values)
      .then(() => {
        setRefresh(!refresh);
        resetEditing();
      })
  };
  const onEditFinish = (values) => {
    bangDiaStore
      .updateData(values)
      .then(() => {
        setRefresh(!refresh);
        resetEditing();
      })
  };
  return (
    <div className="container-fluid">
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={onAddBangDia}
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
        title="Thêm băng đĩa"
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
          name="form_them_bang_dia"
          onFinish={onAddFinish}
        >
          <Form.Item
            name="tenBangDia"
            label="Tên băng đĩa"
            rules={[{ required: true }]}
          >
            <Input placeholder="Tên băng đĩa" />
          </Form.Item>
          <Form.Item
            name="idTheLoai"
            label="Tên thể loại"
            rules={[{ required: true }]}
          >
            <Select style={{ width: 210 }}>
              {(theLoaiStore.data || []).map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.tenTheLoai}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="idNhaSX"
            label="Tên nhà sản xuất"
            rules={[{ required: true }]}
          >
            <Select style={{ width: 210 }}>
              {(nhaSanXuatStore.data || []).map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.tenNhaSX}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="tinhTrang"
            label="Tình Trạng"
            rules={[{ required: true }]}
          >
            <Select style={{ width: 210 }}>
              <Option value="Mới">Mới</Option>
              <Option value="Mới 99%">Mới 99%</Option>
              <Option value="Mới 89%">Mới 89%</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="ghiChu"
            label="Ghi chú"
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 9, span: 14 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

      </Modal>

      <Modal
        title="Sửa băng đĩa"
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
          name="form_sua_bang_dia"
          onFinish={onEditFinish}
        >
          <Form.Item name="id" hidden={true} />
          <Form.Item
            name="tenBangDia"
            label="Tên băng đĩa"
            rules={[{ required: true }]}
          >
            <Input placeholder="Tên băng đĩa" />
          </Form.Item>
          <Form.Item
            name="idTheLoai"
            label="Tên thể loại"
            rules={[{ required: true }]}
          >
            <Select style={{ width: 210 }}>
              {(theLoaiStore.data || []).map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.tenTheLoai}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="idNhaSX"
            label="Tên nhà sản xuất"
            rules={[{ required: true }]}
          >
            <Select style={{ width: 210 }}>
              {(nhaSanXuatStore.data || []).map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.tenNhaSX}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="tinhTrang"
            label="Tình Trạng"
            rules={[{ required: true }]}
          >
            <Select style={{ width: 210 }}>
              <Option value="Mới">Mới</Option>
              <Option value="Mới 99%">Mới 99%</Option>
              <Option value="Mới 89%">Mới 89%</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="ghiChu"
            label="Ghi chú"
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 9, span: 14 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {/* <Modal
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
          placeholder="Tên băng đĩa"
          value={editingBangDia?.tenBangDia}
          onChange={(e) => {
            setEditingBangDia((pre) => {
              return { ...pre, tenBangDia: e.target.value };
            });
          }}
        />
        <Select
          className="input_style"
          placeholder="ID Thể loại"
          value={editingBangDia?.idTheLoai}
          onChange={(e) => {
            setEditingBangDia((pre) => {
              return { ...pre, idTheLoai: e };
            });
          }}
        >
          {theLoaiStore.data.map((theLoai, index) => {
            return (
              <Option value={theLoai.id} key={index}>
                {theLoai.tenTheLoai}
              </Option>
            );
          })}
        </Select>
        <Select
          className="input_style"
          placeholder="Id Nhà sản xuất"
          value={editingBangDia?.idNhaSX}
          onChange={(e) => {
            setEditingBangDia((pre) => {
              return { ...pre, idNhaSX: e };
            });
          }}
        >
          {nhaSanXuatStore.data.map((nhaSanXuat, index) => {
            return (
              <Option value={nhaSanXuat.id} key={index}>
                {nhaSanXuat.tenNhaSX}
              </Option>
            );
          })}
        </Select>
        <Select
          className="input_style"
          placeholder="Tình trạng"
          value={editingBangDia?.tinhTrang}
          onChange={(e) => {
            setEditingBangDia((pre) => {
              return { ...pre, tinhTrang: e };
            });
          }}
        >
          <Option value="Mới">Mới</Option>
          <Option value="Mới 99%">Mới 99%</Option>
          <Option value="Mới 89%">Mới 89%</Option>
        </Select>
        <TextArea
          rows={4}
          className="input_style"
          placeholder="Ghi chú"
          value={editingBangDia?.ghiChu}
          onChange={(e) => {
            setEditingBangDia((pre) => {
              return { ...pre, ghiChu: e.target.value };
            });
          }}
        />
      </Modal> */}
    </div>
  );
});
