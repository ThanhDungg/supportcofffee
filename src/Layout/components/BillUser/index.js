import classNames from 'classnames/bind';
import styles from './BillUser.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Close from '../../../components/Close';
import Button from '../../../components/Button';
import CoffeeBill from '../../../components/CoffeeBill';

const cx = classNames.bind(styles);

function BillUser({ listCoffee, handleClose, handleCancelBillUser, handleOrder }) {
   const [hidden, setHidden] = useState(true);
   const [total, setTotal] = useState(0);
   console.log(listCoffee);

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
               onClick={() => {
                  setHidden(false);
               }}
               icon={faAngleLeft}
            />
         ) : (
            <div className={cx('wrapper')}>
               <div className={cx('header')}>Phiếu thanh toán</div>
               <div className={cx('listCoffee')}>
                  {listCoffee.map((coffee) => {
                     return (
                        <CoffeeBill
                           item={coffee}
                           handleClose={() => {
                              handleClose(coffee);
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
                  <Button title="Đặt món" click={handleOrder} />
                  <Button title="Hủy món" click={handleCancelBillUser} />
               </div>
            </div>
         )}
      </div>
   );
}

export default BillUser;
