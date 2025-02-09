import { useState } from "react";
import { Col, Card } from 'antd';
import ToggleDeviceButton from './ToggleDeviceButton ';
import fanImg from "../assets/images/fan.png";
import fogImg from "../assets/images/fog.png";
import lightImg from "../assets/images/light.png";

const DeviceControlPanel = () => {

    const [deviceState, setDeviceState] = useState({
        fan: false,
        humidifier: false,
        light: false,
    });

    const toggleDevice = (deviceName) => {
        setDeviceState((prevState) => ({
            ...prevState,
            [deviceName]: !prevState[deviceName],
        }));
    };

    return (
        <Card title="Điều khiển thiết bị">
            <ToggleDeviceButton
                deviceName="Quạt"
                image={fanImg}
                deviceState={deviceState}
                toggleDevice={toggleDevice}
            />
            <ToggleDeviceButton
                deviceName="Máy tạo ẩm"
                image={fogImg}
                deviceState={deviceState}
                toggleDevice={toggleDevice}
            />
            <ToggleDeviceButton
                deviceName="Đèn"
                image={lightImg}
                deviceState={deviceState}
                toggleDevice={toggleDevice}
            />
        </Card>

    );
};

export default DeviceControlPanel;