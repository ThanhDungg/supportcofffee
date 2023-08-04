import classNames from 'classnames/bind';
import styles from './CoffeePayBillUser.module.scss';
const cx = classNames.bind(styles);

function CoffeePayBillUser({ item }) {
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

   var tempStatusTopping = '';

   return (
      <div className={cx('wrapper')}>
         <div className={cx('spanten')}>
            <span>
               {item.Name_Coffee}{' '}
               {item.listsize.map((i) => {
                  if (parseInt(item.size) == i.id_size) {
                     tempStatusTopping = ' - ' + tempStatusTopping + i.name_size;
                  }
               })}
               {item.listCheckedTP.map((check) => {
                  listTopping.map((topping) => {
                     if (topping.id == check) {
                        tempStatusTopping =
                           tempStatusTopping + ' - ' + topping.name + ' - ' + topping.price.toLocaleString() + 'vnd, ';
                     }
                  });
               })}
               {tempStatusTopping}
            </span>
         </div>
         <span className={cx('span')}>
            {/* {item.listsize.map((i) => {
               if (parseInt(item.size) == i.id_size) return <span>{i.price.toLocaleString()}</span>;
            })} */}
            {item.price.toLocaleString()}vnd
         </span>
         <span className={cx('span')}>{item.quantity}</span>
         <span className={cx('span')}>{(item.quantity * item.price).toLocaleString()}vnd</span>
      </div>
   );
}

export default CoffeePayBillUser;
