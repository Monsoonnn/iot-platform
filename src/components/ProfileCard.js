
import {Card, Avatar, Typography, Space, Descriptions, theme } from 'antd';
import { GithubOutlined, FacebookOutlined, PhoneOutlined, MailOutlined, GoogleOutlined } from '@ant-design/icons';
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
                        src={"https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/411852429_1749961218761904_5698363889923851772_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFWN4Fx9dWPsVRDKw2P2_lX5_J4YLqkFizn8nhguqQWLIqM-21Tjndhpd5Bb85PnzIwRYUq-A8lioeiAy9dG3cG&_nc_ohc=DGk8kDvAJd0Q7kNvgELyrt_&_nc_oc=AdixHo5X_RgA0Rvk9kW9oV__fs7QZnJP6VJCfdxOx62ocE8WjDK35lJT6QAefThHw74&_nc_zt=23&_nc_ht=scontent.fhan9-1.fna&_nc_gid=A-opzrm7rFB_Eh0mUVVoqeB&oh=00_AYAIaOzRRjTHiizf8GtKUNY0l3hK1EkZXm0UHxJ_ch6AkQ&oe=67B03D8A"}
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