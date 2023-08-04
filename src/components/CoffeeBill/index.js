import classNames from 'classnames/bind';
import styles from './CoffeeBill.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function CoffeeBill({ item, handleClose }) {
   let tempMoney = 0;
   const [price, setPrice] = useState(0);

   useEffect(() => {
      item.listsize.map((li) => {
         if (parseInt(li.id_size) === parseInt(item.size)) {
            setPrice(li.price);
         }
      });
   }, []);

   let statusTopping = '';

   const listTopping = [
      {
         id: 1,
         name: 'Trân châu đen',
         price: 5000,
      },
      {
         id: 2,
         name: 'Trân châu trắng',
         price: 7000,
      },
      {
         id: 3,
         name: 'Thạch',
         price: 9000,
      },
   ];

   return (
      <div className={cx('wrapper')}>
         <div>
            <img className={cx('img')} src={item.img} />
         </div>
         <div className={cx('name')}>
            <div>
               <b>{item.Name_Coffee}</b>
            </div>
            {item.listsize.map((size) => {
               if (parseInt(size.id_size) === parseInt(item.size)) {
                  return (
                     <div>
                        {size.name_size} - <i>{size.price.toLocaleString()}</i>vnd
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
                        statusTopping = statusTopping + tp.name + ' - ' + tp.price.toLocaleString() + 'vnd' + ', ';
                        tempMoney += tp.price;
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

export default CoffeeBill;
