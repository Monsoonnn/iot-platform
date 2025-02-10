import { useState, useEffect } from 'react';
import { Table, Select, Pagination, Card } from 'antd';
import { Line } from "@ant-design/plots";
import moment from 'moment';

const SensorTable = (props, ) => {

    const pageSize = 10

    let { data } = props;

    const [pageNumber, setPageNumber] = useState(1);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id, // Sắp xếp tăng dần theo id
        },
        {
            title: 'Nhiệt độ (°C)',
            dataIndex: 'temperature',
            key: 'temperature',
        },
        {
            title: 'Độ ẩm (%)',
            dataIndex: 'humidity',
            key: 'humidity',
        },
        {
            title: 'Ánh sáng (Lux)',
            dataIndex: 'light',
            key: 'light',
        },
        {
            title: 'Thời gian',
            dataIndex: 'time',
            key: 'time',
            sorter: (a, b) => new Date(a.time) - new Date(b.time), 
            render: (time) => moment(time).format("YYYY-MM-DD HH:mm"),
        },
    ];
    const getMockData = (page) => {
        // Demo tính năng chưa có gọi API
        let filteredData = data;
    
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return {
          data: filteredData.slice(startIndex, endIndex),
          total: filteredData.length,
        };
    
      };

      const { data: tableData, total } = getMockData(pageNumber);
    return(
        <>
        <Table
        columns={columns}
        dataSource={tableData}
        pagination={false}
      />
      <br/>
      <Pagination
        align='center'
        showQuickJumper
        pageSize={pageSize}
        defaultCurrent={1}
        total={total}
        onChange={setPageNumber}
      />
        </>
    )

}

export default SensorTable;