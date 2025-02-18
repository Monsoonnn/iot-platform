import { useState, useEffect } from 'react';
import { Table, Pagination, Select, DatePicker, Button, Space } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import TableControl from './Table';
import { getColumns } from './getColumns';

const { Option } = Select;
const { RangePicker } = DatePicker;
const metrics = [
    { label: 'Tất cả', value: 'all' },
    { label: 'Nhiệt độ', value: 'temperature' },
    { label: 'Độ ẩm', value: 'humidity' },
    { label: 'Ánh sáng', value: 'light' }
];

const SensorTable = (props) => {
    const pageSize = 10;
    let { data } = props;

    const [pageNumber, setPageNumber] = useState(1);
    
    const [selectedMetric, setSelectedMetric] = useState('all');

    const [sortedInfo, setSortedInfo] = useState({});

    const [dateRange, setDateRange] = useState(null);

    const [searchDate, setSearchDate] = useState(null);

    const [searchType, setsearchType] = useState("date");

    const handleSearch = () => setPageNumber(1);

    const clearAll = () => {
        setSortedInfo({});
    };

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

    const handleMetricChange = (value) => {
        setSelectedMetric(value);
        setPageNumber(1);
    };

    

    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
            }}>
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
                <Space style={{ marginTop: 16 }}>
                    <div style={{ fontSize: 15 }}>Chọn loại dữ liệu: </div>
                    <Select
                        defaultValue="all"
                        style={{ width: 200 }}
                        onChange={handleMetricChange}
                        options={metrics}
                    />
                </Space>
            </div>
            <Space style={{ marginTop: 16 }}>
                <Button onClick={clearAll}>Xóa bộ lọc sắp xếp</Button>
            </Space>
            <TableControl  
                tableData={tableData}
                pageSize={pageSize}
                total={total}
                pageNumber={pageNumber}
                columns={getColumns(sortedInfo, selectedMetric)}
                setPageNumber={setPageNumber}
                setSortedInfo={setSortedInfo}
            />
        </>



    );
};

export default SensorTable;