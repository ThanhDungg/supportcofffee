import { useNavigate } from 'react-router-dom';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import Profile from '../../Layout/components/Profile';
import { useEffect, useState } from 'react';
import ChangePassword from '../../Layout/components/ChangePassword';
import { getData, postData } from '../../configs/fetchData';
import { changeInfo, changePassword, getStaff } from '../../configs/config';

function ProfilePage() {
   const navigate = useNavigate();

   const [show, setShow] = useState(false);
   const [showChangePassword, setShowChangePassword] = useState(false);

   const [error, setError] = useState(false);

   const handleCloseChangePassword = () => {
      setShowChangePassword(false);
   };

   const handleShowChangePassword = () => {
      setShowChangePassword(true);
   };

   const handleAcpChangePassword = async () => {
      if (document.querySelector(' [name="old-password"]').value == '') {
         setError('Bạn chưa nhập mật khẩu cũ');
         return;
      } else if (document.querySelector(' [name="new-password"]').value == '') {
         setError('Bạn chưa nhập mật khẩu mới');
         return;
      } else if (document.querySelector(' [name="re-new-password"]').value == '') {
         setError('Bạn chưa nhập lại mật khẩu mới');
         return;
      } else if (
         document.querySelector('[name="re-new-password"]').value !=
         document.querySelector('[name="new-password"]').value
      ) {
         setError('Nhập lại mật khẩu mới không đúng');
         return;
      } else if (
         document.querySelector('[name="new-password"]').value == document.querySelector(' [name="old-password"]').value
      ) {
         setError('Mật khẩu mới bị trùng mật khẩu cũ');
      } else {
         if (!window.confirm('Bạn muốn thay đổi mật khẩu?')) {
            return;
         }
         try {
            const res = await postData(
               changePassword,
               {
                  new_password: document.querySelector('[name= "new-password"]').value,
                  password: document.querySelector('[name = "old-password"]').value,
               },
               localStorage.getItem('accessToken'),
            );
            console.log(res);
            if (res.data.message == 'Update successfull') {
               alert('Đổi mật khẩu thành công');
               setShowChangePassword(false);
            } else {
               alert('Đổi mật khẩu thất bại');
            }
         } catch (e) {}
      }
   };

   const handleSaveInfo = async () => {
      if (document.querySelector('[name="fullname"]').value == '') {
         alert('Bạn chưa nhập họ tên');
         document.querySelector('[name="fullname"]').focus();
      } else if (document.querySelector('[name="address"]').value == '') {
         alert('Bạn chưa nhập địa chỉ');
         document.querySelector('[name="address"]').focus();
      } else if (document.querySelector('[name="phone-number"]').value == '') {
         alert('Bạn chưa nhập số điện thoại');
         document.querySelector('[name="phone-number"]').focus();
      } else if (document.querySelector('[name="phone-number"]').value.length != 10) {
         alert('Số điện thoại phải có 10 số!');
         document.querySelector('[name="phone-number"]').focus();
      } else {
         if (!window.confirm('Bạn muốn lưu lại thông tin?')) {
            return;
         }
         try {
            const res = await postData(
               changeInfo,
               {
                  fullname: document.querySelector('[name="fullname"]').value,
                  adress: document.querySelector('[name="address"]').value,
                  sdt: document.querySelector('[name="phone-number"]').value,
               },
               localStorage.getItem('accessToken'),
            );
            console.log(res);
            if (res.data.message == 'Update successfull') {
               alert('Lưu thông tin thành công');
            } else {
               alert('Lưu thông tin thất bại');
            }
         } catch (e) {}
      }
   };

   const onChange = () => {
      setError('');
   };

   const temUser = {
      id_staff: 4,
      fullname: '',
      adress: '',
      email: '',
      sdt: '',
      id_status: 1,
      id_role: 2,
      password: '',
      createdAt: '',
      updatedAt: '',
   };

   const [user, setUser] = useState(temUser);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await getData(getStaff, localStorage.getItem('accessToken'));
            console.log(res);
            setUser(res.data.result);
         } catch (e) {
            console.log(e);
         }
      };

      fetchData();
   }, []);
   return (
      <div>
         <Header show={show} setShow={setShow} />
         <Profile handleShowChangePassword={handleShowChangePassword} handleSaveInfo={handleSaveInfo} user={user} />
         {showChangePassword && (
            <ChangePassword
               handleCloseChangePassword={handleCloseChangePassword}
               handleAcpChangePassword={handleAcpChangePassword}
               error={error}
               onChange={onChange}
            />
         )}
         <Footer />
      </div>
   );
}

export default ProfilePage;
