import { Layout, Card, Row, Col, Button } from "antd";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


const DashBoardChart = (props) => {

    let { data } = props

    return (
        <Card title="Biểu đồ cảm biến">
            <ResponsiveContainer width="100%" height={500}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="time"
                    />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="temp" stroke="#ff7300" name="Nhiệt độ (°C)" />
                    <Line type="monotone" dataKey="humidity" stroke="#387908" name="Độ ẩm (%)" />
                    <Line type="monotone" dataKey="light" stroke="#8884d8" name="Ánh sáng (Lux)" />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    );


}

export default DashBoardChart;