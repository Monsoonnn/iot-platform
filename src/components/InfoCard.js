import { Card, Image } from "antd";
import { Gauge } from "@ant-design/plots";

const InfoCard = ({ title, value, type, image }) => {
  const config = {
    width: 400,
    height: 300,
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
          range: getColor(type),
        },
      },
      style: {
        textContent: (target) => `${target}${getUnit(type)}`,
      },
  };

  return (
    <Card title={
      < >
         {title}
        <Image 
        src={image} preview={false} width={30} 
         />
      </>
    } bordered style={{maxHeight: "300px"}}>
        
<           Gauge {...config} />   
        
    </Card>
  );
};

export default InfoCard;


const getThresholds = (type) => {
  switch (type) {
    case "temperature":
      return [20, 40, 60]; // Nhiệt độ 0-60 
    case "humidity":
      return [30, 60, 100]; // Độ ẩm 0-100 
    case "light":
      return [200, 400, 600]; // Độ sáng 0-800 
    default:
      return [];
  }
};
const getColor = (type) => {
  switch (type) {
    case "temperature":
      return ["green", "#f8d50b", "#F4664A"]; 
    case "humidity":
      return ["#58dff7", "#18a3f3", "#214fe4"];   
    case "light":
      return ["#f0f87a", "#f1e100 ","#f1a500"]; 
    default:
      return [];
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