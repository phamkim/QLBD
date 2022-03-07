import React from "react";
import { Column } from "@ant-design/plots";
import { Divider } from "antd";
export const DoanhThuTheoThang = ({ data: data }) => {
  const filterData = (data) => {
    var newData = [];
    var count = 6;
    for (let index = data.length - 1; index >= 0; index--) {
      if (count > 0) {
        const element = data[index];
        newData.push(element);
      }
      count--;
    }
    return newData.reverse();
  };

  const config = {
    xField: "monthYear",
    yField: "tongTien",

    label: {
      // 可手动配置 label 数据标签位置
      position: "top",
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: "red",
        opacity: 0.9,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      monthYear: {
        alias: "Tháng",
      },
      tongTien: {
        alias: "Tổng doanh Thu",
      },
    },
  };
  return (
    <div>
      <Divider orientation="left">Doanh thu hàng tháng</Divider>
      <Column {...config} data={filterData(data)} />
    </div>
  );
};
