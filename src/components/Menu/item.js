import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Item({ id, Name_Coffee = 'ABC', img, price, onclick }) {
   return (
      <div className={cx('item')} onClick={onclick}>
         <div className={cx('name-coffee')}>{Name_Coffee}</div>
         <img className={cx('img')} src={img} />
         <div>{parseInt(price).toLocaleString()}vnd</div>
      </div>
   );
}

export default Item;
