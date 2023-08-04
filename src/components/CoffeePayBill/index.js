import classNames from 'classnames/bind';
import styles from './CoffeePayBill.module.scss';
const cx = classNames.bind(styles);

function CoffeePayBill({ item, price = 20000, quantity = 3 }) {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('spanten')}>
            <span>CoffeePayadsasdasdasdadadsdadasdadasdasdasdasdasdasdasdBill</span>
         </div>
         <span className={cx('span')}>{price.toLocaleString()}vnd</span>
         <span className={cx('span')}>{quantity}</span>
         <span className={cx('span')}>{(price * quantity).toLocaleString()}vnd</span>
      </div>
   );
}

export default CoffeePayBill;
