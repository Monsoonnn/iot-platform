import { Layout, Menu } from "antd";
import { useState } from 'react';
import { Link } from "react-router-dom";
import {
    DashboardOutlined,
    HistoryOutlined,
    ProfileOutlined,
    DatabaseOutlined,
} from "@ant-design/icons";

import Logo from "../assets/images/iot-logo.png";

const { Header, Content, Sider } = Layout;

const MainLayout = ({ children }) => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(isCollapsed) => setCollapsed(isCollapsed)} collapsedWidth={80}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <Link to="/">
                        <div style={{ textAlign: "center", padding: collapsed ? "8px" : "16px" }}>
                            <img
                                src={Logo}
                                alt="Logo"
                                style={{
                                    paddingLeft: "32px",
                                    width: collapsed ? "0px" : "100%",
                                    maxWidth: collapsed ? "0px" : "300px",
                                    transition: 'width 0.2s ease',
                                }}
                            />
                        </div>
                    </Link>

                    <Menu.Item key="1" icon={<DashboardOutlined />}>
                        <Link to="/">Điều khiển</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<HistoryOutlined />}>
                        <Link to="/history">Lịch sử</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<DatabaseOutlined />}>
                        <Link to="/sensors">Dữ liệu cảm biến</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<ProfileOutlined />}>
                        <Link to="/profile">Hồ sơ cá nhân</Link>
                    </Menu.Item>
                </Menu>
            </Sider>

            {/* Nội dung chính */}
            <Layout>
                <Content style={{ margin: "16px" }}>{children}</Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
