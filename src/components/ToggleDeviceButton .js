
import { Card, Image, Switch } from 'antd';

const ToggleDeviceButton = ({ image, deviceName, deviceState, toggleDevice }) => {
    const isOn = deviceState[deviceName];
    const buttonText = isOn ? `Tắt ${deviceName}` : `Bật ${deviceName}`;

    return (
        <>
            <Card style={{ marginBottom: "20px" }}>
                <div>
                    {buttonText}
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Image width={75} src={image} />
                    <Switch
                        
                        type={isOn ? "primary" : "default"}
                        onClick={() => toggleDevice(deviceName)}
                        block
                    >
                    </Switch>
                </div>

            </Card>

        </>
    );

};

export default ToggleDeviceButton;