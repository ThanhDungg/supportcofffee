import classNames from 'classnames/bind';
import styles from './CoffeeBill.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function CoffeeBill({ item, handleClose, quantity }) {
   const [quantityBill, setQuantityBill] = useState(quantity);
   const handleAdd = () => {
      setQuantityBill(quantityBill + 1);
   };

   const handleAbs = () => {
      quantityBill <= 1 ? setQuantityBill(quantityBill) : setQuantityBill(quantityBill - 1);
   };

   return (
      <div className={cx('wrapper')}>
         <div>
            <img className={cx('img')} src={item.img} />
         </div>
         <div className={cx('name')}>
            <div>{item.Name_Coffee}</div>
            <div>{parseInt(item.price).toLocaleString()}vnd</div>
            <div>Size: L</div>
            <button className={cx('btn')} onClick={handleAbs}>
               -
            </button>
            {'    '}
            <span>{quantityBill}</span>
            {'    '}
            <button className={cx('btn')} onClick={handleAdd}>
               +
            </button>
            <div>Tổng: {(parseInt(item.price) * quantityBill).toLocaleString()}vnd</div>
         </div>
         <div className={cx('btn-close')}>
            <FontAwesomeIcon className={cx('close')} icon={faClose} onClick={handleClose} />
         </div>
      </div>
   );
}

export default CoffeeBill;
