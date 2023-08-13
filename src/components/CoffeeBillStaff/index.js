import classNames from 'classnames/bind';
import styles from './CoffeeBill.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function CoffeeBillStaff({ item, handleClose, listTopping }) {
   let tempMoney = 0;
   const [price, setPrice] = useState(0);

   useEffect(() => {
      item.size_details.map((li) => {
         if (parseInt(li.id_size) === parseInt(item.size)) {
            setPrice(li.price);
         }
      });
   }, []);

   let statusTopping = '';

   return (
      <div className={cx('wrapper')}>
         <div>
            <img className={cx('img')} src={item.img} />
         </div>
         <div className={cx('name')}>
            <div>
               <b>{item.name_coffee}</b>
            </div>
            {item.size_details.map((size) => {
               if (parseInt(size.id_size) === parseInt(item.size)) {
                  return (
                     <div>
                        {size.size.name_size} - <i>{parseInt(size.price).toLocaleString()}</i>vnd
                     </div>
                  );
               }
            })}
            <span>
               <b>Số lượng:</b> <i>{item.quantity} ly</i>
            </span>
            <div>
               <b>Chi tiết:</b>
               {listTopping.map((tp) => {
                  item.listCheckedTP.map((checktp) => {
                     if (parseInt(checktp) == parseInt(tp.id)) {
                        statusTopping =
                           statusTopping + tp.name_topping + ' - ' + parseInt(tp.price).toLocaleString() + 'vnd' + ', ';
                        tempMoney = tempMoney + parseInt(tp.price);
                     }
                  });
               })}{' '}
               <i>{statusTopping}</i>
            </div>
            <div>
               <b>Tổng:</b> <i>{((parseInt(price) + tempMoney) * item.quantity).toLocaleString()}vnd</i>
            </div>
         </div>
         <div className={cx('btn-close')}>
            <FontAwesomeIcon className={cx('close')} icon={faClose} onClick={handleClose} />
         </div>
      </div>
   );
}

export default CoffeeBillStaff;
