import classNames from 'classnames/bind';
import styles from './CoffeePayBillUser.module.scss';
import { useEffect, useState } from 'react';
import { getData } from '../../configs/fetchData';
import { getTopping } from '../../configs/config';
const cx = classNames.bind(styles);

function CoffeePayBillUser({ item }) {
   var tempStatusTopping = '';

   const [price, setPrice] = useState(0);

   console.log(item);

   useEffect(() => {
      setPrice((pri) => pri + parseInt(item.price));

      item.topping_details.map((tp) => {
         setPrice((pri) => pri + parseInt(tp.price));
      });
   }, []);

   return (
      <div className={cx('wrapper')}>
         <div className={cx('spanten')}>
            <span>
               {item != undefined ? item.size_detail.coffee.name_coffee : ''}{' '}
               {item != undefined ? parseInt(item.size_detail.price).toLocaleString() : ''}
               {item != undefined
                  ? item.topping_details.map((tp) => {
                       tempStatusTopping =
                          tempStatusTopping +
                          tp.topping.name_topping +
                          ' - ' +
                          parseInt(tp.price).toLocaleString() +
                          'vnd';
                    })
                  : ''}
               {tempStatusTopping}
            </span>
         </div>
         <span className={cx('span')}>
            {/* {item.listsize.map((i) => {
               if (parseInt(item.size) == i.id_size) return <span>{i.price.toLocaleString()}</span>;
            })} */}
            {price.toLocaleString()}vnd
         </span>
         <span className={cx('span')}>{item.quantity}</span>
         <span className={cx('span')}>{(item.quantity * price).toLocaleString()}vnd</span>
      </div>
   );
}

export default CoffeePayBillUser;
