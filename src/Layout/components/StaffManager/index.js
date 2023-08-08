import classNames from 'classnames/bind';
import styles from './StaffManager.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPlus } from '@fortawesome/free-solid-svg-icons';
import ColumnStaff from '../../../components/ColumnStaff';

const cx = classNames.bind(styles);

function StaffManager({ handleAddStaff, handleLockStaff, onClickContract, listStaff }) {
   let tempList = [];

   let tempStaff = {
      id: '',
      fullName: '',
      date: '',
      adress: '',
      Email: '',
      sdt: '',
      status: '',
      id_Role: '',
   };
   const staffRole = [
      { id: 1, Name_Role: 'Quản lý' },
      { id: 2, Name_Role: 'Nhân viên phục vụ' },
      { id: 3, Name_Role: 'Nhân viên pha chế' },
   ];
   // const listStaff = [
   //    {
   //       id: 1,
   //       fullName: 'Nguyễn Thanh Dũng',
   //       date: '26/7/2001',
   //       adress: 'Phu Yen',
   //       Email: 'andydung2607@gmail.com',
   //       sdt: '0343263672',
   //       status: 2,
   //       id_Role: 1,
   //    },
   //    {
   //       id: 2,
   //       fullName: 'Nguyễn Minh Khang',
   //       date: '22/09/2001',
   //       adress: 'HCM',
   //       Email: 'nmk@gmail.com',
   //       sdt: '0343263672',
   //       status: 2,
   //       id_Role: 3,
   //    },
   //    {
   //       id: 3,
   //       fullName: 'Võ Đông Duy',
   //       date: '19/09/2001',
   //       adress: 'Long An',
   //       Email: 'vodongduy@gmail.com',
   //       sdt: '0343263672',
   //       status: 2,
   //       id_Role: 2,
   //    },
   //    {
   //       id: 4,
   //       fullName: 'Nguyen Thai Tuong',
   //       date: '19/09/2001',
   //       adress: 'Nghe An',
   //       Email: 'vodongduy@gmail.com',
   //       sdt: '0343263672',
   //       status: 1,
   //       id_Role: 2,
   //    },
   //    {
   //       id: 5,
   //       fullName: 'Nguyen Doan Thong',
   //       date: '19/09/2001',
   //       adress: 'Ha Tinh',
   //       Email: 'vodongduy@gmail.com',
   //       sdt: '0343263672',
   //       status: 1,
   //       id_Role: 3,
   //    },
   // ];

   const listStatus = [
      { id: 1, status_name: 'Khóa' },
      {
         id: 2,
         status_name: 'Hoạt động',
      },
   ];

   const [listStf, setListStf] = useState(listStaff);
   const [valRole, setValRole] = useState(0);
   const [valStatus, setValStatus] = useState(0);

   useEffect(() => {
      if (valRole == 0) {
         if (valStatus == 0) {
            tempList = listStaff;
         } else {
            tempList = [];
            listStaff.map((lSdf) => {
               if (lSdf.status == valStatus) {
                  tempList.push(lSdf);
               }
            });
         }
      } else {
         if (valStatus == 0) {
            tempList = [];
            listStaff.map((lSdf) => {
               if (lSdf.id_Role == valRole) {
                  tempList.push(lSdf);
               }
            });
         } else {
            tempList = [];
            listStaff.map((lSdf) => {
               if (lSdf.id_Role == valRole && lSdf.status == valStatus) {
                  tempList.push(lSdf);
               }
            });
         }
      }
      if (tempList.length == 0) {
         tempList.push(tempStaff);
      }
      setListStf(tempList);
   }, [valRole, valStatus]);

   const changeValStaffRole = (e) => {
      console.log(e.target.value);
      setValRole(e.target.value);
   };

   const changeValStaffStatus = (e) => {
      console.log(e.target.value);
      setValStatus(e.target.value);
   };

   return (
      <div className={cx('wrapper')}>
         <div className={cx('body')}>
            <div className={cx('place-select')}>
               <span>Chức vụ: </span>
               <select className={cx('select-tag')} onChange={changeValStaffRole}>
                  <option className={cx('option')} value={0}>
                     Tất cả
                  </option>
                  {staffRole.map((stR) => {
                     return (
                        <option className={cx('option')} value={stR.id}>
                           {stR.Name_Role}
                        </option>
                     );
                  })}
               </select>
               <span>Trạng thái: </span>
               <select className={cx('select-tag', 'select-tag-status')} onChange={changeValStaffStatus}>
                  <option className={cx('option')} value={0}>
                     Tất cả
                  </option>
                  {listStatus.map((stS) => {
                     return (
                        <option className={cx('option')} value={stS.id}>
                           {stS.status_name}
                        </option>
                     );
                  })}
               </select>
               <button className={cx('btn-add-staff')} onClick={handleAddStaff}>
                  <FontAwesomeIcon icon={faPlus} />
               </button>
               <button className={cx('btn-lock-staff')} onClick={handleLockStaff}>
                  <FontAwesomeIcon icon={faLock} />
               </button>
            </div>
            <table className={cx('place-column')}>
               <tr className={cx('title-row')}>
                  <td className={cx('title-column')}></td>
                  <td className={cx('title-column')}>ID</td>
                  <td className={cx('title-column')}>Họ tên</td>
                  <td className={cx('title-column')}>Ngày sinh</td>
                  <td className={cx('title-column')}>Dịa chỉ</td>
                  <td className={cx('title-column')}>Email</td>
                  <td className={cx('title-column')}>Số điện thoại</td>
                  <td className={cx('title-column')}>Trạng thái</td>
                  <td className={cx('title-column')}>Chi tiết</td>
               </tr>
               {listStf.map((item) => {
                  return <ColumnStaff item={item} onClickContract={onClickContract} />;
               })}
            </table>
         </div>
      </div>
   );
}

export default StaffManager;
