import { Layout, Row, Col } from "antd";
import { Gauge } from "@ant-design/plots";
import { useState, useEffect } from "react";
import DashBoardChart from "../../components/DashBoardChart";
import DeviceControlPanel from "../../components/DeviceControlPanel";
import InfoCard from "../../components/InfoCard";
import humidityImg from "../../assets/images/humidity.png";
import lightImg from "../../assets/images/light.png";
import temperatureImg from "../../assets/images/temperate_high.png";
import DashboardHeader from "../../components/Header";
import { max } from "@antv/util";
const { Header, Content } = Layout;


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
      <Content style={{ padding: "20px" }}>
         {/* Thông tin Nhiệt độ, Độ ẩm, Ánh sáng */}
        <Row gutter={16}>
         
          <Col span={8}>
            <InfoCard 
              title="Nhiệt độ" 
              image={temperatureImg}
              value={`${temperature.toFixed(1)}`}
              type="temperature" 

            />
          </Col>
          <Col span={8}>
            <InfoCard 
              title="Độ ẩm" 
              image={humidityImg}
              value={`${humidity.toFixed(1)}`} 
              type="humidity"  
            />
          </Col>
          <Col span={8}>
            <InfoCard 
              title="Ánh sáng" 
              image={lightImg}
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
