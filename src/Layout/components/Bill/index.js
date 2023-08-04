import classNames from 'classnames/bind';
import styles from './Bill.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Close from '../../../components/Close';
import CoffeeBill from '../../../components/CoffeeBill';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

function Bill({ listCoffee, handleClose, handleTable, handleCancel }) {
   const [hidden, setHidden] = useState(true);
   const [total, setTotal] = useState(0);

   useEffect(() => {
      setTotal(0);
      listCoffee.map((item) => {
         setTotal((tt) => tt + item.quantity * item.price);
      });
   }, [listCoffee.length]);

   return (
      <div>
         {hidden ? (
            <FontAwesomeIcon
               className={cx('iconPrev')}
               icon={faAngleLeft}
               onClick={() => {
                  setHidden(false);
               }}
            />
         ) : (
            <div className={cx('wrapper')}>
               <div className={cx('header')}>Phiếu thanh toán</div>
               <div className={cx('listCoffee')}>
                  {listCoffee.map((item) => {
                     return (
                        <CoffeeBill
                           item={item}
                           handleClose={() => {
                              handleClose(item);
                           }}
                        />
                     );
                  })}
               </div>
               <Close
                  hanldeClose={() => {
                     setHidden(true);
                  }}
               />
               <div className={cx('total')}>
                  Tổng tiền: <i>{total.toLocaleString()} vnd</i>
               </div>
               <div className={cx('buy')}>
                  <Button title="Chọn bàn" click={handleTable} />
                  <Button title="Hủy" click={handleCancel} />
               </div>
            </div>
         )}
      </div>
   );
}

export default Bill;
