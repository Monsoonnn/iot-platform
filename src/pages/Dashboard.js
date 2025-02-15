import { Layout, Row, Col } from "antd";
import { Gauge } from "@ant-design/plots";
import { useState, useEffect } from "react";
import DashBoardChart from "../components/DashBoardChart";
import DeviceControlPanel from "../components/DeviceControlPanel";
import InfoCard from "../components/InfoCard";


const { Header, Content } = Layout;

const headerStyle = {
  color: "#000",
  backgroundColor: "#fff",
  padding: "10px",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Dashboard = () => {

  const [temperature, setTemperature] = useState(30);
  const [humidity, setHumidity] = useState(65);
  const [light, setLight] = useState(350);

  //Fake data cập nhật theo thời gian
  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature((prev) => Math.max(20, Math.min(40, prev + (Math.random() * 4 - 2))));
      setHumidity((prev) => Math.max(30, Math.min(90, prev + (Math.random() * 4 - 2))));
      setLight((prev) => Math.max(100, Math.min(500, prev + (Math.random() * 50 - 25))));
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <Header style={headerStyle}>Bảng Điều Khiển</Header>

      <Content style={{ padding: "20px" }}>
         {/* Thông tin Nhiệt độ, Độ ẩm, Ánh sáng */}
        <Row gutter={16}>
         
          <Col span={8}>
            <InfoCard 
              title="Nhiệt độ" 
              value={`${temperature.toFixed(1)}`}
              type="temperature" 

            />
          </Col>
          <Col span={8}>
            <InfoCard 
              title="Độ ẩm" 
              value={`${humidity.toFixed(1)}`} 
              type="humidity"  
            />
          </Col>
          <Col span={8}>
            <InfoCard 
              title="Ánh sáng" 
              value={`${light.toFixed(1)}`} 
              type="light" 
            />
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: "20px" }}>
          {/* Biểu đồ*/}
          <Col span={18}>
            <DashBoardChart />
          </Col>

          {/* Nút bật/tắt */}
          <Col span={6}>
            <DeviceControlPanel />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Dashboard;
