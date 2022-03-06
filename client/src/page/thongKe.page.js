import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useStores } from "../stores";
import { TopTheLoai } from "../component/chart/topTheLoai";
import { DoanhThuTheoThang } from "../component/chart/doanhThu";
import { TopBangDia } from "../component/chart/topBangDia";
import { TopThanhVien } from "../component/chart/TopThanhVien";
import { Row, Col, Statistic } from "antd";
export const ThongKePage = observer(() => {
  const { theLoaiStore, phieuThueStore, bangDiaStore, thanhVienStore } =
    useStores();
  const [topTheLoai, setTopTheLoai] = useState(null);
  const [doanhThu, setDoanhThu] = useState(null);
  const [topBangDia, setTopBangDia] = useState(null);
  const [topThanhVien, setTopThanhVien] = useState(null);

  const tongDoanhThu = (doanhThu) => {
    var result = 0;
    doanhThu.forEach((element) => {
      result += element.tongTien;
    });
    return result;
  };

  useEffect(() => {
    bangDiaStore.getData();
    phieuThueStore.getData();
    thanhVienStore.getData();

    theLoaiStore.getStatistic().then((data) => {
      setTopTheLoai(data);
      console.log(data);
    });

    phieuThueStore.getStatistic().then((data) => {
      setDoanhThu(data);
      console.log(data);
    });

    bangDiaStore.getStatistic().then((data) => {
      setTopBangDia(data);
      console.log(data);
    });

    thanhVienStore.getStatistic().then((data) => {
      setTopThanhVien(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="powerbi-page site-layout-background">
      <Row justify="space-around">
        <Col span={4}>
          <Statistic
            title="Số lượng băng đĩa"
            valueStyle={{ color: "#3f8600" }}
            value={bangDiaStore.data.length}
          />
        </Col>
        <Col span={4}>
          <Statistic
            title="Số lượng thành viên"
            valueStyle={{ color: "#3f8600" }}
            value={thanhVienStore.data.length}
          />
        </Col>
        <Col span={4}>
          <Statistic
            title="Số lượt thuê băng đĩa"
            valueStyle={{ color: "#3f8600" }}
            value={phieuThueStore.data.length}
          />
        </Col>
        <Col span={4}>
          <Statistic
            title="Tổng doanhThu"
            valueStyle={{ color: "#3f8600" }}
            value={doanhThu ? tongDoanhThu(doanhThu) : 0}
          />
        </Col>
      </Row>
      <Row justify="space-around" align="middle" style={{ height: "75vh" }}>
        <Col span={10}>
          {topBangDia ? <TopBangDia data={topBangDia} /> : null}
        </Col>
        <Col span={10}>
          {doanhThu ? <DoanhThuTheoThang data={doanhThu} /> : null}
        </Col>
      </Row>
      <Row justify="space-around" align="middle" style={{ height: "75vh" }}>
        <Col span={10}>
          {topTheLoai ? <TopTheLoai data={topTheLoai} /> : null}
        </Col>
        <Col span={10}>
          {topThanhVien ? <TopThanhVien data={topThanhVien} /> : null}
        </Col>
      </Row>
    </div>
  );
});
