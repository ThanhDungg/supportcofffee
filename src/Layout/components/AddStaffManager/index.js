import classNames from 'classnames/bind';
import styles from './AddStaffManager.module.scss';
import Close from '../../../components/Close';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useState } from 'react';
import { postData } from '../../../configs/fetchData';
import { addStaff } from '../../../configs/config';

const cx = classNames.bind(styles);

function AddStaffManager({ hanldeClose }) {
   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

   const staffRole = [
      { id: 3, Name_Role: 'Quản lý' },
      { id: 2, Name_Role: 'Nhân viên phục vụ' },
      { id: 1, Name_Role: 'Nhân viên pha chế' },
   ];

   const [error, setError] = useState('');

   const handleAddStaff = async () => {
      if (document.querySelector('input[name="fullname"]').value == '') {
         await setError('Chưa nhập họ tên.');
      } else if (document.querySelector('input[name="email"]').value == '') {
         await setError('Chưa nhập email.');
      } else if (!filter.test(document.querySelector('input[name="email"]').value)) {
         setError('Email không đúng định dạng');
      } else if (document.querySelector('input[name="sdt"]').value == '') {
         setError('Chưa nhập số điện thoại');
      } else {
         try {
            const res = await postData(
               addStaff,
               {
                  fullname: document.querySelector('[name="fullname"]').value,
                  adress: document.querySelector('[name="address"]').value,
                  email: document.querySelector('[name="email"]').value,
                  sdt: document.querySelector('[name="sdt"]').value,
                  id_role: document.querySelector('[name="role"]').value,
               },
               localStorage.getItem('accessToken'),
            );
            console.log(res);
            if (res.data.message == 'Create successfull') {
               alert('Thêm thành công!');
               window.location.reload();
            }
         } catch (e) {
            console.log(e);
         }
      }
   };

   return (
      <div className={cx('wrapper')}>
         <div className={cx('body-add-staff')}>
            <Close hanldeClose={hanldeClose} />
            <div className={cx('form-add-staff')}>
               <div className={cx('title-form-add-staff')}>Thêm nhân viên</div>
               <div className={cx('body-form-add-staff')}>
                  <Input placeholder="Tên nhân viên" title="Họ tên" name={'fullname'} />
                  <Input placeholder="Email" title="Email" name={'email'} />
                  <Input
                     placeholder="Số điện thoại"
                     title="Số điện thoại"
                     name={'sdt'}
                     onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                           event.preventDefault();
                        }
                     }}
                     maxLength={10}
                  />
                  <Input placeholder="Địa chỉ" title="Địa chỉ" name={'address'} />
                  <div className={cx('select-role')}>
                     <div>Chức vụ</div>
                     <select className={cx('select-tag')} name="role">
                        {staffRole.map((stf) => {
                           return <option value={stf.id}>{stf.Name_Role}</option>;
                        })}
                     </select>
                  </div>
               </div>
               <div className={cx('error')}>{error}</div>
               <div className={cx('btns')}>
                  <Button title="Thêm" click={handleAddStaff} />
                  <Button title="Hủy" click={hanldeClose} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default AddStaffManager;
