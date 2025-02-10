import {Card, Typography, Form, Input, Button, Row, Col, Space } from 'antd';
import { GithubOutlined, FacebookOutlined, PhoneOutlined, MailOutlined, CopyOutlined, UserOutlined, GoogleOutlined } from '@ant-design/icons';

const { Text } = Typography;
const ProfileForm = () => {
    return (
        <>
            <Card>
                <Form layout="vertical">
                    {/* User ID Field */}
                    <Form.Item
                        label={
                            <Space>
                                <Text>User ID</Text>
                                <Button
                                    type="text"
                                    icon={<CopyOutlined />}
                                    size="small"
                                />
                            </Space>
                        }
                    >
                        <Input
                            value="474e2cd2-fc79-49b8-98fe-dab443facede"
                            readOnly
                        />
                    </Form.Item>

                    {/* Name Fields */}
                    <Form.Item
                        label="Họ và tên"
                        name="fullname"
                        initialValue="Nguyễn Quang Anh"
                    >
                        <Input />
                    </Form.Item>

                    {/* Contact Fields */}
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Email"
                                name="email"
                                initialValue="quanganh598912@gmail.com"
                                rules={[
                                    { type: 'email', message: 'Please enter a valid email!' }
                                ]}
                            >
                                <Input prefix={<MailOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Username"
                                name="username"
                                initialValue="Monsoon31"
                            >
                                <Input prefix={<UserOutlined />} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Facebook"
                                name="facebook"
                                initialValue="fb.com/monsoonn31"
                            >
                                <Input prefix={<FacebookOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Github"
                                name="github"
                                initialValue="https://github.com/Monsoonnn"
                            >
                                <Input prefix={<GithubOutlined />} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Báo cáo PDF"
                                name="drive"
                                initialValue=""
                            >
                                <Input prefix={<GoogleOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Phone"
                                name="phone"
                                initialValue="0328663270"
                            >
                                <Input prefix={<PhoneOutlined />} />
                            </Form.Item>
                        </Col>
                    </Row>
                    {/* Submit Button */}
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Save changes
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    )
}

export default ProfileForm;