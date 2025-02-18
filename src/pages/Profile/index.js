
import { Space } from 'antd';
import ProfileCard from '../../components/ProfileCard';
import ProfileForm from '../../components/ProfileForm';
import Layout from 'antd/es/layout/layout';
import DashboardHeader from '../../components/Header';


const UserProfile = () => {


  return (
    <>
      <Layout>
        
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* Thông tin cá nhân */}
          <ProfileCard />

          {/* Form sửa thông tin - chưa sửa được */}
          <ProfileForm />
        </Space>
      </Layout>

    </>


  );
};

export default UserProfile;


