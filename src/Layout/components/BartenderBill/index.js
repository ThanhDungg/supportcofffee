import classNames from 'classnames/bind';
import styles from './BartenderBill.module.scss';
import Close from '../../../components/Close';
import Button from '../../../components/Button';
import CoffeeBartenderBill from '../../../components/CoffeeBartenderBill';
import { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../../App';

const cx = classNames.bind(styles);

function BartenderBill({ listCoffee, list, index, setState }) {
   const socket = useContext(SocketContext);

   const [id_table, setID_table] = useState(listCoffee[0].id_table);

   const handleComplete = async () => {
      if (!window.confirm('Xác nhận hoàn tất!')) {
         return;
      }
      var tempObject = new Object();

      tempObject = {
         id_table: listCoffee[0].id_table,
         title: `Bill bàn số ${listCoffee[0].id_table} đã hoàn thành!`,
         noti: 'Thông báo hoàn thành!',
         type: 2,
      };
      await socket.emit('finish', tempObject);
      list.splice(index, 1);
      setState((state) => state + 1);
   };

   useEffect(() => {
      try {
         socket.on('approveChangeTable', async (data) => {
            if (listCoffee[0].id_table == data.id_table) {
               listCoffee[0].id_table = data.id_newtable;
               await setID_table(data.id_newtable);
            }
         });
      } catch (e) {
         console.log(e);
      }
   }, [socket]);

   return (
      <div className={cx('wrapper')}>
         <div className={cx('header')}>Bill bàn số {id_table}</div>
         <div className={cx('listCoffee')}>
            {listCoffee.length != 0 && listCoffee.length != undefined
               ? listCoffee.map((coffee) => {
                    return <CoffeeBartenderBill item={coffee} />;
                 })
               : ''}
         </div>
         <div className={cx('buy')}>
            <Button title="Hoàn tất" click={handleComplete} />
         </div>
      </div>
   );
}

export default BartenderBill;
