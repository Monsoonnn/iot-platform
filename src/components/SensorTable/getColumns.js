import { CopyOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const getColumns = (sortedInfo, selectedMetric) => {
    const baseColumns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
            sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
        },
        {
            title: 'Thời gian',
            dataIndex: 'time',
            key: 'time',
            sorter: (a, b) => new Date(a.time) - new Date(b.time),
            sortOrder: sortedInfo.columnKey === "time" ? sortedInfo.order : null,
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>{text}</span>
                    <Button
                        type="text"
                        icon={<CopyOutlined />}
                        onClick={() => navigator.clipboard.writeText(text)}
                        style={{ marginLeft: 8 }}
                    />
                </div>
            ),
        },
    ];

    const metricColumns = {
        temperature: {
            title: 'Nhiệt độ (°C)',
            dataIndex: 'temperature',
            key: 'temperature',
        },
        humidity: {
            title: 'Độ ẩm (%)',
            dataIndex: 'humidity',
            key: 'humidity',
        },
        light: {
            title: 'Ánh sáng (Lux)',
            dataIndex: 'light',
            key: 'light',
        },
    };

    if (selectedMetric === 'all') {

        const finalCol = [baseColumns[0], ...Object.values(metricColumns), baseColumns[1]]

        console.log(finalCol)   
        
        return finalCol;
    }

    return [baseColumns[0], metricColumns[selectedMetric], baseColumns[1]];
};