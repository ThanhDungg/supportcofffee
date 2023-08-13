import classNames from 'classnames/bind';
import styles from './BartenderAllBill.module.scss';
import BartenderBill from '../components/BartenderBill';

const cx = classNames.bind(styles);

function BartenderAllBill({ list }) {
   console.log(list);
   return (
      <div className={cx('wrapper')}>
         <div className={cx('coffee')}>
            {list.map((listChild) => {
               return <BartenderBill listCoffee={listChild} />;
            })}
         </div>
      </div>
   );
}

export default BartenderAllBill;
