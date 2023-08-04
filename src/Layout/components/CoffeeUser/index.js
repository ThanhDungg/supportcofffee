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
         <div className={cx('name-coffee')}>{coffee.Name_Coffee}</div>
         <div className={cx('img-coffee')}>
            <img className={cx('img')} src={coffee.img} />
         </div>
         <div className={cx('price')}>{coffee.listsize[0].price.toLocaleString()}VND</div>
      </div>
   );
}

export default CoffeeUser;
