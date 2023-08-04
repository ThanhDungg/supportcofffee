import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import InputChangeProfileAfter from '../../../components/InputChangeProfileAfter';
import InputChangeProfile from '../../../components/InputChangeProfile';

const cx = classNames.bind(styles);

function Profile() {
   const { id } = useParams();

   const [fullName, setFullname] = useState('');
   const [role, setRole] = useState();

   const [editFullname, setEditFullname] = useState(false);

   const [Alt, setAlt] = useState();

   //Edit full name
   const handleEditFullname = () => {
      setEditFullname(true);
   };

   const handleBlurEditFullname = () => {
      setEditFullname(false);
   };

   //Update image
   const chooseFile = (inputFile) => {
      const file = inputFile.target.files[0];

      file.preview = URL.createObjectURL(file);

      setAlt(file);
   };

   const user = [
      {
         id: 0,
         fullname: 'Nguyễn Thanh Dũng',
         email: 'dungnguyen@gmail.com',
         date: '2001-09-22',
         adress: 'Phu Yen',
         sdt: '0343263672',
         taikhoan: 'admin',
         matkhau: '123',
         role: 0,
      },
      {
         id: 1,
         fullname: 'Nguyễn Thanh Dũng',
         email: 'andydung2607@gmail.com',
         date: '2001-09-22',
         adress: 'Long An',
         sdt: '0343263672',
         taikhoan: 'user',
         matkhau: '123',
         role: 1,
      },
      {
         id: 2,
         fullname: 'Nguyễn Minh Khang',
         email: 'nmk@gmail.com',
         date: '2001-09-22',
         adress: 'TPHCM',
         sdt: '0343263672',
         taikhoan: 'bartender',
         matkhau: '123',
         role: 2,
      },
   ];

   const changeFullname = (e) => {
      setFullname(e.target.value);
   };

   useEffect(() => {
      user.map((u) => {
         if (u.id == id) {
            setFullname(u.fullname);
            setRole(u.role);
         }
      });
   }, []);

   const renderRole = (idRole) => {
      if (idRole == 1) {
         return (
            <div>
               <i>Nhân viên phục vụ</i>
            </div>
         );
      } else if (idRole == 2) {
         return (
            <div>
               <i>Nhân viên pha chế</i>
            </div>
         );
      } else if (idRole == 0) {
         return (
            <div>
               <i>Quản lý</i>
            </div>
         );
      }
   };

   return (
      <div className={cx('wrapper')}>
         <div className={cx('profile-body')}>
            <div className={cx('form-img')}>
               <div className={cx('img-camera')}>
                  {!Alt ? (
                     <img
                        className={cx('img')}
                        src={
                           Alt
                              ? Alt.preview
                              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg'
                        }
                     />
                  ) : (
                     <img className={cx('img')} src={Alt.preview} />
                  )}
                  <label for="uploadAvatar">
                     <input className={cx('upload')} id="uploadAvatar" type="file" onChange={chooseFile} />
                     <div>
                        <FontAwesomeIcon className={cx('camera')} icon={faCamera} />
                     </div>
                  </label>
               </div>
               <div>
                  {!editFullname ? (
                     <InputChangeProfileAfter fullName={fullName} handleEditFullname={handleEditFullname} />
                  ) : (
                     <InputChangeProfile
                        fullName={fullName}
                        handleBlurEditFullname={handleBlurEditFullname}
                        changeFullname={changeFullname}
                     />
                  )}
               </div>
               <div className={cx('roleStaff')}>{renderRole(role)}</div>
            </div>
            {/* <Button title="Lưu" /> */}
            {user.map((u) => {
               if (u.id == id) {
                  return (
                     <div>
                        <div>Email: {u.email}</div>
                        <div>Adress: {u.adress}</div>
                        <div>sdt: {u.sdt}</div>
                        <input type="date" value={u.date} />
                     </div>
                  );
               }
            })}
         </div>
      </div>
   );
}

export default Profile;
