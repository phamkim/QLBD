import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useStores } from "../stores";
import { Button, Table, Modal, DatePicker, Select } from "antd";
import { EditOutlined, DeleteOutlined, MoreOutlined } from "@ant-design/icons";
import "./style.css";
import { toJS } from "mobx";
import { convertDMY, convertYMD, getDateToday } from "../common/index";
import moment from "moment";
const { Option } = Select;

export const PhieuThuePage = observer(() => {
  const { phieuThueStore, thanhVienStore } = useStores();
  const [isEditing, setIsEditing] = useState(false);
  const [editingPhieuThue, setEditingPhieuThue] = useState(null);
  const [dataSource, setDataSource] = useState();
  const [thanhViens, setThanhViens] = useState();
  const [refresh, setRefresh] = useState(false);
  const [chiTietPhieuThue,SetChiTietPhieuThue] = useState();

  useEffect(() => {
    console.log("phieuThuePage: useEffect()");
    phieuThueStore.getData().then(() => {
      setDataSource(toJS(phieuThueStore.data));
    });
    thanhVienStore.getData().then(() => {
      setThanhViens(toJS(thanhVienStore.data));
    });
    return () => {
      phieuThueStore.clearData();
      thanhVienStore.clearData();
    };
  }, [refresh]);

  const columns = [
    {
      key: "1",
      title: "Người Thuê",
      dataIndex: "idNguoiThue",
      render: (idNguoiThue) => {
        let hoTen = "";
        thanhVienStore.data.map((data) => {
          if (data.id === idNguoiThue) {
            hoTen = data.hoTen;
          }
        });
        return hoTen;
      },
    },
    {
      key: "2",
      title: "Ngày thuê",
      dataIndex: "ngayThue",
      render: (ngayThue) => {
        return convertDMY(ngayThue);
      },
    },
    {
      key: "3",
      title: "Ngày hẹn trả",
      dataIndex: "ngayHenTra",
      render: (ngayHenTra) => {
        return convertDMY(ngayHenTra);
      },
    },
    {
      key: "4",
      title: "Ngày Trả",
      dataIndex: "ngayTra",
      render: (ngayTra) => {
        return ngayTra ? convertDMY(ngayTra) : null;
      },
    },
    // {
    //   key: "5",
    //   title: "Số ngày thuê",
    //   dataIndex: "soNgayThue",
    // },
    {
      key: "6",
      title: "Tổng Tiền(VNĐ)",
      dataIndex: "tongTien",
      render: (tongTien) => {
        return tongTien.toFixed(2);
      },
    },
    {
      key: "7",
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
            <MoreOutlined style={{ color: "blue", marginLeft: 12 }} />
          </>
        );
      },
    },
  ];

  const onAddPhieuThue = () => {
    const newPhieuThue = {
      ngayThue: getDateToday(),
      ngayHenTra: getDateToday(),
      ngayTra: null,
      idNguoiThue: 1,
      soNgayThue: 12,
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
    phieuThueStore.detailData(record.id).then((data) => {
      console.log(data);
      setIsEditing(true);
      SetChiTietPhieuThue(data);
    })
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
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          phieuThueStore.updateData(editingPhieuThue);
          setRefresh(!refresh);
          resetEditing();
        }}
      >
        <Select
          className="input_style"
          placeholder="Người Thuê"
          value={editingPhieuThue?.idNguoiThue}
          onChange={(e) => {
            setEditingPhieuThue((pre) => {
              return { ...pre, idNguoiThue: e };
            });
          }}
        >
          {thanhVienStore.data.map((thanhVien, index) => {
            return (
              <Option value={thanhVien.id} key={index}>
                {thanhVien.hoTen}
              </Option>
            );
          })}
        </Select>
        <DatePicker
          className="input_style"
          placeholder="Ngày Thuê"
          defaultValue={moment(convertYMD(editingPhieuThue?.ngayThue))}
          onChange={(e) => {
            setEditingPhieuThue((pre) => {
              return { ...pre, ngayThue: e };
            });
          }}
        />
        <DatePicker
          className="input_style"
          placeholder="Ngày Hẹn Trả"
          defaultValue={moment(convertYMD(editingPhieuThue?.ngayHenTra))}
          onChange={(e) => {
            setEditingPhieuThue((pre) => {
              return { ...pre, ngayHenTra: e };
            });
          }}
        />
        <DatePicker
          className="input_style"
          placeholder="Ngày Trả"
          defaultValue={moment(convertYMD(editingPhieuThue?.ngayTra))}
          onChange={(e) => {
            setEditingPhieuThue((pre) => {
              return { ...pre, ngayTra: e };
            });
          }}
        />
        {/* <InputNumber
          className="input_style"
          placeholder="Số Ngày Thuê"
          value={editingPhieuThue?.soNgayThue}
          onChange={(e) => {
            setEditingPhieuThue((pre) => {
              return { ...pre, soNgayThue: e };
            });
          }}
        /> */}
      </Modal>
    </div>
  );
});
