import { useState } from 'react';
import { Button, Space, Table, Pagination, Tag, DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const data = [
    { id: 1, device: "Đèn", status: "Bật", time: "2025-02-01 08:00" },
    { id: 2, device: "Quạt", status: "Tắt", time: "2025-02-01 09:00" },
    { id: 3, device: "Đèn", status: "Tắt", time: "2025-02-01 10:00" },
    { id: 4, device: "Quạt", status: "Bật", time: "2025-02-02 08:30" },
    { id: 5, device: "Đèn", status: "Bật", time: "2025-02-02 11:00" },
    { id: 6, device: "Máy tạo ẩm", status: "Bật", time: "2025-02-03 08:00" },
    { id: 7, device: "Máy tạo ẩm", status: "Tắt", time: "2025-02-03 09:30" },
    { id: 8, device: "Đèn", status: "Bật", time: "2025-02-04 07:45" },
    { id: 9, device: "Loa", status: "Tắt", time: "2025-02-04 10:15" },
    { id: 10, device: "Quạt", status: "Bật", time: "2025-02-04 12:00" },
    { id: 11, device: "Máy tạo ẩm", status: "Bật", time: "2025-02-05 08:00" },
    { id: 12, device: "Đèn", status: "Tắt", time: "2025-02-06 09:00" },
    { id: 13, device: "Loa", status: "Bật", time: "2025-02-06 11:00" },
];

const HistoryTable = ({ pageSize = 10 }) => {
    const [pageNumber, setPageNumber] = useState(1);
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const [dateRange, setDateRange] = useState([]);
    const [searchDateRange, setSearchDateRange] = useState([]);

    const handleChange = (pagination, filters, sorter) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const clearFilters = () => {
        setFilteredInfo({}); 
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };

    const handleSearch = () => {
        setPageNumber(1); 
    };

    const getMockData = (page) => {
        // Demo tính năng chưa có API
        let filteredData = data;

        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return {
            data: filteredData.slice(startIndex, endIndex),
            total: filteredData.length, // Trả về tổng số mục
        };
    };

    const { data: tableData, total } = getMockData(pageNumber);

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
        },
    ];

    return (
        <>
            <div style={{ marginTop: 16 }}>
                <RangePicker
                    // onchange ( Search bằng cách gọi API)?
                    value={dateRange}
                    style={{ marginRight: "20px" }}
                />
                <Button type="primary" onClick={handleSearch}>Tìm kiếm</Button>
            </div>
            <Space style={{ marginTop: 16 }}>
                <Button onClick={clearFilters}>Xóa bộ lọc</Button>
                <Button onClick={clearAll}>Xóa bộ lọc & sắp xếp</Button>
            </Space>
            <Table
                columns={columns}
                dataSource={tableData}
                pagination={{ position: ["none", "none"] }}
                onChange={handleChange}
                rowKey="id"
            />
            <br />
            <Pagination
                align='center'
                showQuickJumper
                pageSize={pageSize}
                defaultCurrent={1}
                total={total}
                onChange={setPageNumber}
            />
        </>
    );
};

export default HistoryTable;