import classNames from 'classnames/bind';
import styles from './HeaderUser.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function HeaderUser({ showBtnChangeTable, handleReqChangetable }) {
   return (
      <div className={cx('wrapper')}>
         {showBtnChangeTable && (
            <button className={cx('btn')} onClick={handleReqChangetable}>
               Đổi bàn
            </button>
         )}

         <div className={showBtnChangeTable ? cx('title') : cx('title2')}>
            <div>COFFEE NTD</div>
         </div>
      </div>
   );
}

export default HeaderUser;
