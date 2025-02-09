import { Card } from "antd";
import { Gauge } from "@ant-design/plots";

const getThresholds = (type) => {
  switch (type) {
    case "temperature":
      return [20, 40, 60]; // Nhiệt độ 0-60 chia 3 mức
    case "humidity":
      return [30, 60, 100]; // Độ ẩm 0-100 chia 3 mức
    case "light":
      return [200, 400, 600]; // Độ sáng 0-800 chia 3 mức
    default:
      return [100, 200, 400];
  }
};
const getUnit = (type) => {
  switch (type) {
    case "temperature":
      return " °C";
    case "humidity":
      return " %";
    case "light":
      return " Lux";
    default:
      return "";
  }
};

const InfoCard = ({ title, value, type }) => {
  const config = {
    width: 400,
    height: 400,
    autoFit: true,
    data: {
      target: value,
      total: getThresholds(type).slice(-1)[0],
      name: "score",
      thresholds: getThresholds(type),
    },
    legend: false,
    scale: {
        color: {
          range: ['#F4664A', '#FAAD14', 'green'],
        },
      },
      style: {
        textContent: (target) => `${target}${getUnit(type)}`,
      },
  };

  return (
    <Card title={title} bordered style={{maxHeight: "400px"}}>
       
<           Gauge {...config} />   
        
    </Card>
  );
};

export default InfoCard;
