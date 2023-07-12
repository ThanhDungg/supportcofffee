import classNames from 'classnames/bind';
import styles from './Bill.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Close from '../../../components/Close';
import CoffeeBill from '../../../components/CoffeeBill';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

function Bill({ listCoffee, handleClose, handleTable, handleCancel, handleAdd, handleAbs, quantity }) {
   const [hidden, setHidden] = useState(true);

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
                           handleAdd={handleAdd}
                           handleAbs={handleAbs}
                           quantity={quantity}
                        />
                     );
                  })}
               </div>
               <Close
                  hanldeClose={() => {
                     setHidden(true);
                  }}
               />
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
