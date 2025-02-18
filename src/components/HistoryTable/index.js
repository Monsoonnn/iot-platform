import { useState } from 'react';
import { Button, Space, Table, Pagination, Tag, DatePicker, Select } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import TableControl from './Table';

const { RangePicker } = DatePicker;
const { Option } = Select;

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
    const [dateRange, setDateRange] = useState(null);
    const [searchDate, setSearchDate] = useState(null);
    const [searchType, setsearchType] = useState("date");

    const handleSearch = () => setPageNumber(1);

    const getMockData = (page) => {
        let filteredData = data;
        
        if (searchType === "range" && dateRange && dateRange.length === 2) {
            filteredData = filteredData.filter(item => {
                const itemDate = dayjs(item.time);
                return itemDate.isAfter(dateRange[0]) && itemDate.isBefore(dateRange[1]);
            });
        }
        
        if (searchType === "date" && searchDate) {
            filteredData = filteredData.filter(item =>
                dayjs(item.time).format('YYYY-MM-DD:HH:mm') === searchDate.format('YYYY-MM-DD:HH:mm')
            );
        }
        
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return { data: filteredData.slice(startIndex, endIndex), total: filteredData.length };
    };

    const { data: tableData, total } = getMockData(pageNumber);


    return (
        <>
            <div style={{ marginTop: 16 }}>
                <Select value={searchType} onChange={setsearchType} style={{ 
                    marginRight: 20,
                    minWidth: "200px",
                }}>
                    <Option value="date">Ngày cụ thể</Option>
                    <Option value="range">Khoảng thời gian</Option>
                </Select>
                {searchType === "range" && <RangePicker value={dateRange} onChange={setDateRange} style={{ 
                    marginRight: 20,
                    minWidth: "500px",
                }} />}
                {searchType === "date" && (
                    <DatePicker
                        value={searchDate}
                        onChange={(value) => setSearchDate(value ? dayjs(value.format('YYYY-MM-DD HH:mm')) : null)}
                        format="YYYY-MM-DD HH:mm"
                        style={{ 
                            marginRight: 20,
                            minWidth: "300px",
                        }}
                        showTime={{ defaultValue: dayjs('00:00', 'HH:mm') }}
                        allowClear
                    />
                )}
                <Button type="primary" onClick={handleSearch}>Tìm kiếm</Button>
            </div>
            <TableControl
                tableData={tableData}
                total={total}
                pageSize={pageSize}
                setPageNumber={setPageNumber}
               
            />
        </>
    );
};

export default HistoryTable;
