import classNames from 'classnames/bind';
import styles from './CoffeebartenderBill.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function CoffeeBartenderBill({ item, handleClose }) {
   let tempMoney = 0;
   const [price, setPrice] = useState(0);

   useEffect(() => {
      item.size_details.map((li) => {
         if (parseInt(li.id_size) === parseInt(item.id_size_details)) {
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
         <div>{/* <img className={cx('img')} src={item.img} /> */}</div>
         <div className={cx('name')}>
            <div className={cx('name-size')}>
               <div>
                  <b>{item.name_coffee}</b>
               </div>
               {item.size_details.map((size) => {
                  if (parseInt(size.id_size) === parseInt(item.id_size_details)) {
                     return (
                        <div>
                           {size.size.name_size} - <i>{parseInt(size.price).toLocaleString()}</i>vnd
                        </div>
                     );
                  }
               })}
            </div>

            <div>
               <b>Chi tiết:</b>
               {listTopping.map((tp) => {
                  item.listCheckedTP.map((checktp) => {
                     if (parseInt(checktp.id_topping) == parseInt(tp.id)) {
                        statusTopping = statusTopping + tp.name + ' - ' + tp.price.toLocaleString() + 'vnd' + ', ';
                        tempMoney = tempMoney + tp.price;
                     }
                  });
               })}{' '}
               <i>{statusTopping}</i>
            </div>
            <span>
               <b>Số lượng:</b> <i>{item.quantity} ly</i>
            </span>
            <div>
               <b>Tổng:</b> <i>{((parseInt(price) + tempMoney) * item.quantity).toLocaleString()}vnd</i>
            </div>
         </div>
      </div>
   );
}

export default CoffeeBartenderBill;
