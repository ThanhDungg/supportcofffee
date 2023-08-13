import classNames from 'classnames/bind';
import styles from './CoffeePayBill.module.scss';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function CoffeePayBill({ item, listTopping }) {
   const [name_size, setName_size] = useState('');

   const [price, setPrice] = useState(0);

   const [statusTopping, setStatusTopping] = useState('');
   var tempTopping = '';

   useEffect(() => {
      setPrice((pri) => pri + parseInt(item.price));
      item.topping_details.map((tp) => {
         setPrice((pri) => pri + parseInt(tp.price));
         setStatusTopping(
            (status) => status + tp.topping.name_topping + ' - ' + `${parseInt(tp.price).toLocaleString()}` + 'vnd, ',
         );
         tempTopping =
            tempTopping + tp.topping.name_topping + ' - ' + `${parseInt(tp.price).toLocaleString()}` + 'vnd, ';
      });
   }, []);
   return (
      <div className={cx('wrapper')}>
         <div className={cx('spanten')}>
            <span>
               {item.size_detail.coffee.name_coffee} {parseInt(item.price).toLocaleString()} : {statusTopping}
            </span>
         </div>
         <span className={cx('span')}>{price.toLocaleString()}vnd</span>
         <span className={cx('span')}>{item.quantity}</span>
         <span className={cx('span')}>{(price * item.quantity).toLocaleString()}vnd</span>
      </div>
   );
}

export default CoffeePayBill;
