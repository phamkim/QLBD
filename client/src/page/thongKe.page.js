import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useStores } from "../stores";
import { TopTheLoai } from "../component/chart/topTheLoai";
import { DoanhThuTheoThang } from "../component/chart/doanhThu";
import { TopBangDia } from "../component/chart/topBangDia";
import { TopThanhVien } from "../component/chart/TopThanhVien";
import { Row, Col, Statistic } from "antd";
import "./style.css"
export const ThongKePage = observer(() => {
  const { theLoaiStore, phieuThueStore, bangDiaStore, thanhVienStore } =
    useStores();
  const [topTheLoai, setTopTheLoai] = useState(null);
  const [doanhThu, setDoanhThu] = useState(null);
  const [topBangDia, setTopBangDia] = useState(null);
  const [topThanhVien, setTopThanhVien] = useState(null);

  const tongDoanhThu = (doanhThu) => {
    var result = 0;
    doanhThu.forEach(({ tongTien }) => {
      result += tongTien;
    });
    return result;
  };

  useEffect(() => {
    bangDiaStore.getData();
    phieuThueStore.getData();
    thanhVienStore.getData();

    theLoaiStore.getStatistic().then((data) => {
      setTopTheLoai(data);
    });
    phieuThueStore.getStatistic().then((data) => {
      setDoanhThu(data);
    });
    bangDiaStore.getStatistic().then((data) => {
      setTopBangDia(data);
    });
    thanhVienStore.getStatistic().then((data) => {
      setTopThanhVien(data);
    });
  }, []);

  return (
    <div className="powerbi-page site-layout-background">
      <Row className="row-quantity" justify="space-around">
        <Col span={5}>
          <Statistic
            className="sta tag1"
            title="SỐ LƯỢNG BĂNG ĐĨA"
            valueStyle={{ color: "#feffff" }}
            value={bangDiaStore.data.length}
          />
        </Col>
        <Col span={5}>
          <Statistic
            className="sta tag2"
            title="SỐ LƯỢNG THÀNH VIÊN"
            valueStyle={{ color: "#feffff" }}
            value={thanhVienStore.data.length}
          />
        </Col>
        <Col span={5}>
          <Statistic
            className="sta tag3"
            title="SỐ LƯỢT THUÊ BĂNG ĐĨA"
            valueStyle={{ color: "#feffff" }}
            value={phieuThueStore.data.length}
          />
        </Col>
        <Col span={5}>
          <Statistic
            className="sta tag4"
            title="TỔNG DOANH THU"
            valueStyle={{ color: "#feffff" }}
            value={doanhThu ? tongDoanhThu(doanhThu) : 0}
            suffix="VND"
          />
        </Col>
      </Row>
  
      <Row className="row-chart" justify="space-around" align="middle" style={{ height: 500 }}>
        <Col span={11} className="col-chart">
          {topBangDia ? <TopBangDia data={topBangDia} /> : null}
        </Col>
        <Col span={11} className="col-chart">
          {doanhThu ? <DoanhThuTheoThang data={doanhThu} /> : null}
        </Col>
      </Row>
      <Row className="row-chart" justify="space-around" align="middle" style={{ height: 500 }}>
        <Col span={11} className="col-chart">
          {topTheLoai ? <TopTheLoai data={topTheLoai} /> : null}
        </Col>
        <Col span={11} className="col-chart">
          {topThanhVien ? <TopThanhVien data={topThanhVien} /> : null}
        </Col>
      </Row>
    </div>
  );
});
