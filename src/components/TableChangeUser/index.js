import classNames from 'classnames/bind';
import styles from './TableChangeUser.module.scss';
import Table from '../Table';
import { useEffect, useState } from 'react';
import { getData } from '../../configs/fetchData';
import { getTable, getTopping, menu_url } from '../../configs/config';
import Close from '../Close';
import TableUser from '../TableUser';

const cx = classNames.bind(styles);

function TableChangeUser({ setShowTableChange, idTable }) {
   const [listTable, setListTable] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res3 = await getData(getTable, '');
            setListTable(res3.data.result);
            console.log(res3);
         } catch (e) {
            console.log(e);
         }
      };
      fetchData();
   }, []);

   const handleChangeTable = async (id) => {
      if (!window.confirm(`Bạn muốn đổi từ bàn ${idTable} sang bàn ${id}`)) {
         return;
      }
      try {
         alert(`Vui lòng qua bàn số ${id} để quét lại mã QR, hóa đơn đã được chuyển sang bàn ${id}`);
      } catch (e) {
         console.log(e);
      }
   };

   return (
      <div className={cx('wrapper')}>
         <div className={cx('body')}>
            <Close
               hanldeClose={() => {
                  setShowTableChange(false);
               }}
            />
            {listTable.map((table) => {
               if (table.status == true) {
                  return <TableUser table={table} handleChangeTable={handleChangeTable} />;
               }
            })}
         </div>
      </div>
   );
}

export default TableChangeUser;
