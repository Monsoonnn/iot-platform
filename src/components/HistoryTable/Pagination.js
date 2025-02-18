import { Pagination } from "antd";

const HistoryPagination = (props) => {

    let { pageSize, total, setPageNumber } = props;

    return (
        <>
            <Pagination align='center' 
            
            pageSize={pageSize} 
            defaultCurrent={1} 
            total={total} 
            onChange={setPageNumber} 
            showTotal={(total) => {return `Tổng số:  ${total} dữ liệu`;}}
            showSizeChanger
            showQuickJumper 
            
        />
        </>
    )
}

export default HistoryPagination;