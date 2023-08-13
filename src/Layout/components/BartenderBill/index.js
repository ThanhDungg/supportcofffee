import classNames from 'classnames/bind';
import styles from './BartenderBill.module.scss';
import Close from '../../../components/Close';
import Button from '../../../components/Button';
import CoffeeBartenderBill from '../../../components/CoffeeBartenderBill';
import { useContext } from 'react';
import { SocketContext } from '../../../App';

const cx = classNames.bind(styles);

function BartenderBill({ listCoffee }) {
   const socket = useContext(SocketContext);

   const handleComplete = () => {
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
      console.log(tempObject);
      socket.emit('finish', tempObject);
   };
   return (
      <div className={cx('wrapper')}>
         <div className={cx('header')}>Bill bàn số {listCoffee[0].id_table}</div>
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
