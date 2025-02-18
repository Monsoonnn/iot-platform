import { Header } from "antd/es/layout/layout";

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


const DashboardHeader = (props) => {

    let { title } = props;  


    return (
        <>
        <Header style={headerStyle}>
          {title}
        </Header>
        </>
    );
}

export default DashboardHeader;