
import { useState } from 'react';
import { Table, Tag, Button, Space } from "antd";
import { CopyOutlined } from '@ant-design/icons';
import HistoryPagination from './Pagination';

const TableControl = (props) => {

    let { tableData, pageSize, total, setPageNumber } = props;
    
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});

    const clearFilters = () => setFilteredInfo({});
    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };

    const handleChange = (pagination, filters, sorter) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const columns = [
        {
            title: "STT",
            dataIndex: "id",
            key: "id",
            sorter: (a, b) => a.id - b.id,
            sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
        },
        {
            title: "Thiết bị",
            dataIndex: "device",
            key: "device",
            filters: [
                { text: "Đèn", value: "Đèn" },
                { text: "Quạt", value: "Quạt" },
                { text: "Máy tạo ẩm", value: "Máy tạo ẩm" },
                { text: "Loa", value: "Loa" },
            ],
            filteredValue: filteredInfo.device || null,
            onFilter: (value, record) => record.device === value,
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            filters: [
                { text: "Bật", value: "Bật" },
                { text: "Tắt", value: "Tắt" },
            ],
            filteredValue: filteredInfo.status || null,
            onFilter: (value, record) => record.status === value,
            render: (_, { status }) => {
                let color = status === 'Bật' ? 'green' : 'red';
                return (
                    <Tag color={color} key={status}>
                        {status.toUpperCase()}
                    </Tag>
                );
            }
        },
        {
            title: "Thời gian",
            dataIndex: "time",
            key: "time",
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
    return(
        <>
        <Space style={{ marginTop: 16 }}>
                <Button onClick={clearFilters}>Xóa bộ lọc</Button>
                <Button onClick={clearAll}>Xóa bộ lọc & sắp xếp</Button>
            </Space>
         <Table columns={columns} dataSource={tableData} pagination={false} onChange={handleChange} rowKey="id" 
           
            style={{
                marginTop: "20px",
            }}/>
            <HistoryPagination pageSize={pageSize} total={total} setPageNumber={setPageNumber} />
        </>
    )
}

export default TableControl;

