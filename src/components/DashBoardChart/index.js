import { Card } from "antd";
import { Line } from "@ant-design/plots";

const Dumpdata = [
  { time: "10:05", temp: 25, humidity: 60, light: 300 },
  { time: "10:10", temp: 26, humidity: 62, light: 310 },
  { time: "10:15", temp: 27, humidity: 64, light: 320 },
  { time: "11:00", temp: 30, humidity: 70, light: 320 },
  { time: "12:00", temp: 25, humidity: 80, light: 340 },
  { time: "13:00", temp: 38, humidity: 50, light: 360 },
  { time: "14:00", temp: 28, humidity: 60, light: 380 },
];

const DashBoardChart = () => {
    
    const transformedData = Dumpdata.flatMap(item => [
        { time: item.time, value: item.temp, type: "Nhiệt độ (°C)"},
        { time: item.time, value: item.humidity, type: "Độ ẩm (%)"},
        { time: item.time, value: item.light, type: "Ánh sáng (Lux)"},
    ]);

    const config = {
        data: transformedData,
        xField: "time",
        yField: "value",
        seriesField: "type",
        smooth: true,
        height: 410,
        colorField: 'type',
      };

    return (
        <Card title="Biểu đồ cảm biến">
            <Line {...config} />
        </Card>
    );
};

export default DashBoardChart;