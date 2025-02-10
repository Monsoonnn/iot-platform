
import { Space } from 'antd';
import ProfileCard from '../components/ProfileCard';
import ProfileForm from '../components/ProfileForm';


const UserProfile = () => {
  

  return (
    <>
      <h1>Thông tin cá nhân</h1>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {/* Thong tin ca nhan */}
        <ProfileCard/>

        {/* Form sửa thông tin - chưa sửa được */}
        <ProfileForm/>
      </Space>
    </>
    

  );
};

export default UserProfile;