import { useState, useEffect } from 'react';
import { Table, Pagination, Select, DatePicker, Button, Space } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { Option } = Select;
const { RangePicker } = DatePicker;

const TableControl = (props) => {
    

    let { tableData, pageSize, total, setPageNumber, pageNumber, columns, setSortedInfo } = props;
    
    const handleChange = (pagination, filters, sorter) => {
        setSortedInfo(sorter);
    };
    return (
        <>
            <Table
                style={{ marginTop: 16 }}
                columns={columns}
                dataSource={tableData}
                pagination={false}
                onChange={handleChange}
            />

            <Pagination
                align='center'
                pageSize={pageSize}
                current={pageNumber}
                total={total}
                showTotal={(total) => `Tổng số: ${total} dữ liệu`}
                showQuickJumper
                onChange={setPageNumber}
            />
        </>
    )

}


export default TableControl;