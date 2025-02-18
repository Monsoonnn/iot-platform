import { Layout, Menu } from "antd";
import { useState } from 'react';
import { Link } from "react-router-dom";
import {
    DashboardOutlined,
    HistoryOutlined,
    ProfileOutlined,
    DatabaseOutlined,
} from "@ant-design/icons";

import Logo from "../../assets/images/iot-logo.png";

const { Header, Content, Sider } = Layout;

const MainLayout = ({ children }) => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        
        <Layout style={{ minHeight: "100vh" }}>

            {/* Sider */}
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} collapsedWidth={80}>
                <div style={{ textAlign: 'center', padding: collapsed ? '8px' : '16px' }}>
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{
                            paddingLeft: '32px',
                            width: collapsed ? '0px' : '100%',
                            maxWidth: collapsed ? '0px' : '300px',
                            transition: 'width 0.2s ease',
                        }}
                    />
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} 
                items={[
                    {
                        key: '1',
                        icon: <DashboardOutlined />,
                        label: <Link to="/">Bảng điều khiển</Link>,
                      },
                      {
                        key: '2',
                        icon: <HistoryOutlined />,
                        label: <Link to="/history">Lịch sử bật/tắt</Link>,
                      },
                      {
                        key: '3',
                        icon: <DatabaseOutlined />,
                        label: <Link to="/sensors">Dữ liệu cảm biến</Link>,
                      },
                      {
                        key: '4',
                        icon: <ProfileOutlined />,
                        label: <Link to="/profile">Hồ sơ cá nhân</Link>,
                      },
                ]} 
                />
            </Sider>

            {/* Nội dung chính */}
            <Layout>
                <Content style={{ margin: "16px" }}>{children}</Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
