import { useNavigate } from 'react-router-dom';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import Profile from '../../Layout/components/Profile';
import { useState } from 'react';

function ProfilePage() {
   const navigate = useNavigate();
   const handleLogout = async () => {
      await localStorage.removeItem('isLogin');
      await localStorage.removeItem('idUser');
      await navigate('/');
      await window.location.reload();
   };

   const [show, setShow] = useState(false);
   return (
      <div>
         <Header clickLogout={handleLogout} show={show} setShow={setShow} />
         <Profile />
         <Footer />
      </div>
   );
}

export default ProfilePage;
