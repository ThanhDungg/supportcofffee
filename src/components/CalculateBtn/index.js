import classNames from 'classnames/bind';
import styles from './Calculate.module.scss';

const cx = classNames.bind(styles);

function CalculateBtn({ title, onClick }) {
   return (
      <button className={cx('calbtn')} onClick={onClick}>
         {title}
      </button>
   );
}

export default CalculateBtn;
