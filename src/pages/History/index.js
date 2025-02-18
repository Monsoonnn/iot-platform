import { Layout } from "antd";
import HistoryTable from "../../components/HistoryTable";


const History = () => {
  return (
    <>
      <Layout>

        
        <HistoryTable />
      </Layout>


    </>
  )
};
export default History;

const headerStyle = {
  color: "#000",
  backgroundColor: "#fff",
  padding: "10px",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};