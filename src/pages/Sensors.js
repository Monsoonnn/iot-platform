import { useState, useEffect } from 'react';
import { Table, Select, Pagination, Card } from 'antd';
import { Line } from "@ant-design/plots";
import moment from 'moment';
import SensorTable from '../components/SensorTable';

const { Option } = Select;

const generateData = () => {
  const data = [];
  const startTime = new Date("2023-01-01T00:00:00.000Z"); // Thời điểm bắt đầu

  for (let i = 1; i <= 100; i++) {
    const temperature = (Math.random() * 40).toFixed(2); // Nhiệt độ từ 0 đến 40 °C
    const humidity = (Math.random() * 100).toFixed(2); // Độ ẩm từ 0 đến 100 %
    const light = (Math.random() * 1000).toFixed(2); // Ánh sáng từ 0 đến 1000 Lux

    // Tăng thời gian theo từng bản ghi (ví dụ: mỗi bản ghi cách nhau 1 giờ)
    const time = new Date(startTime.getTime() + i * 60 * 60 * 1000).toISOString();

    data.push({
      id: i,
      temperature: parseFloat(temperature),
      humidity: parseFloat(humidity),
      light: parseFloat(light),
      time: time,
    });
  }
  return data;
};


const SensorDashboard = () => {
  const data = generateData();
  const transformedData = data.flatMap(item => [
    { time: item.time, value: item.temperature, type: "Nhiệt độ (°C)"},
    { time: item.time, value: item.humidity, type: "Độ ẩm (%)"},
    { time: item.time, value: item.light, type: "Ánh sáng (Lux)"},
  ]);

  const config = {
    data: transformedData,
    xField: (d) => new Date(d.time),
    yField: "value",
    seriesField: "type",
    smooth: true,
    height: 600,
    colorField: "type",
    legend: {
        position: "bottom", 
    },
};



  return (
    <>
      <h1>Bảng dữ liệu cảm biến</h1>

      <SensorTable data={data}/>
      <br/>
      <Card title="Biểu đồ cảm biến">
            <Line {...config} />
      </Card>
    </>
  );
};

export default SensorDashboard;
