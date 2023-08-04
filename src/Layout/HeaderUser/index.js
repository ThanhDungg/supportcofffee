import classNames from 'classnames/bind';
import styles from './HeaderUser.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function HeaderUser() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('title')}>
            <div>COFFEE NTD</div>
         </div>
      </div>
   );
}

export default HeaderUser;
