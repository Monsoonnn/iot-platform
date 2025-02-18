import { useState, useEffect } from 'react';
import { Table, Select, Pagination, Card, Layout } from 'antd';
import { Line } from "@ant-design/plots";
import SensorTable from '../../components/SensorTable';
import { generateData } from './ultis';


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
    <Layout>
      
      <SensorTable data={data}/>
      <br/>
      <Card title="Biểu đồ cảm biến">
            <Line {...config} />
      </Card>
    </Layout>
  
    </>
  );
};

export default SensorDashboard;
