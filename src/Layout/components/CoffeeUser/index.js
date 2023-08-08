import classNames from 'classnames/bind';
import styles from './CoffeeUser.module.scss';

const cx = classNames.bind(styles);

function CoffeeUser({ coffee, handleStatusCoffee }) {
   return (
      <div
         className={cx('coffee')}
         onClick={() => {
            handleStatusCoffee(coffee.id);
         }}
      >
         <div className={cx('name-coffee')}>{coffee.name_coffee}</div>
         <div className={cx('img-coffee')}>
            <img className={cx('img')} src={coffee.img} />
         </div>
         <div className={cx('price')}>{parseInt(coffee.size_details[0].price).toLocaleString()}VND</div>
      </div>
   );
}

export default CoffeeUser;
