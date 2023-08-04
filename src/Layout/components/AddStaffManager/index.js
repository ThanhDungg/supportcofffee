import classNames from 'classnames/bind';
import styles from './AddStaffManager.module.scss';
import Close from '../../../components/Close';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

function AddStaffManager({ hanldeClose }) {
   const staffRole = [
      { id: 1, Name_Role: 'Quản lý' },
      { id: 2, Name_Role: 'Nhân viên phục vụ' },
      { id: 3, Name_Role: 'Nhân viên pha chế' },
   ];

   return (
      <div className={cx('wrapper')}>
         <div className={cx('body-add-staff')}>
            <Close hanldeClose={hanldeClose} />
            <div className={cx('form-add-staff')}>
               <div className={cx('title-form-add-staff')}>Thêm nhân viên</div>
               <div className={cx('body-form-add-staff')}>
                  <Input placeholder="Tên nhân viên" title="Họ tên" />
                  <Input placeholder="Email" title="Email" />
                  <Input placeholder="Số điện thoại" title="Số điện thoại" />
                  <Input placeholder="Địa chỉ" title="Địa chỉ" />
                  <div>Ngày sinh</div>
                  <input className={cx('input-date')} type="date" />
                  <div className={cx('select-role')}>
                     <div>Chức vụ</div>
                     <select className={cx('select-tag')}>
                        {staffRole.map((stf) => {
                           return <option value={stf.id}>{stf.Name_Role}</option>;
                        })}
                     </select>
                  </div>
               </div>
               <div className={cx('btns')}>
                  <Button title="Thêm" />
                  <Button title="Hủy" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default AddStaffManager;
