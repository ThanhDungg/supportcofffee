import classNames from 'classnames/bind';
import styles from './ChooseTable.module.scss';

const cx = classNames.bind(styles);

function Choosetable() {
   return <div className={cx('wrapper')}>Choose</div>;
}

export default Choosetable;
