
import {Card, Avatar, Typography, Space, Descriptions, theme } from 'antd';
import { GithubOutlined, FacebookOutlined, PhoneOutlined, MailOutlined, GoogleOutlined } from '@ant-design/icons';
import AvtProfile from "../assets/images/avt_fb.jpg"


const { Link } = Typography;

const userInfo = {
    name: 'Nguyễn Quang Anh',
    email: 'quanganh598912@gmail.com',
    github: 'Monsoon31',
    facebook: 'fb.com/monsoonn31',
    phone: '0328663270',
    pdf: "@Pdf"
};

const ProfileCard = () => {

    const { token } = theme.useToken();

    return (
        <>
            <Card>
                <Space align="start" size="large">
                    <Avatar
                        size={120}
                        src={AvtProfile}
                        style={{ backgroundColor: token.colorPrimary }}
                    />
                    <Descriptions column={{ xs: 1, sm: 2, md: 3 }}>
                        <Descriptions.Item label="Name">
                            {userInfo.name}
                        </Descriptions.Item>
                        <Descriptions.Item label={<Space><MailOutlined /> Email</Space>}>
                            {userInfo.email}
                        </Descriptions.Item>
                        <Descriptions.Item label={<Space><GithubOutlined /> Github</Space>}>
                            <Link href={`https://github.com/Monsoonnn`} target="_blank">
                                {userInfo.github}
                            </Link>
                        </Descriptions.Item>
                        <Descriptions.Item label={<Space><FacebookOutlined /> Faceboook</Space>}>
                            <Link href={`https://www.facebook.com/monsoonn31`} target="_blank">
                                {userInfo.facebook}
                            </Link>
                        </Descriptions.Item>
                        <Descriptions.Item label={<Space><PhoneOutlined /> Phone</Space>}>
                            {userInfo.phone}
                        </Descriptions.Item>
                        <Descriptions.Item label={<Space><GoogleOutlined /> Google Drive</Space>}>
                            <Link Link href={``} target="_blank">
                                {userInfo.facebook}
                            </Link>
                        </Descriptions.Item>
                    </Descriptions>
                </Space>
            </Card>
        </>
    )
}

export default ProfileCard;


