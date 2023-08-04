import classNames from 'classnames/bind';
import styles from './WaitConfirmUser.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function WaitConfirmUser({ wait, handleCancelOrder }) {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('wait-title')}>Đang đợi xác nhận</div>
         <div>
            <FontAwesomeIcon className={cx('icon')} icon={faSpinner} />
         </div>
         <div>
            {wait ? (
               <button
                  className={cx('btn')}
                  onClick={() => {
                     alert('Bạn chưa thể hủy yêu cầu.');
                  }}
               >
                  Hủy
               </button>
            ) : (
               <button className={cx('btn2')} onClick={handleCancelOrder}>
                  Hủy
               </button>
            )}
         </div>
      </div>
   );
}

export default WaitConfirmUser;
