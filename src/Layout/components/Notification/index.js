import classNames from 'classnames/bind';
import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

function Notification({ success }) {
   return (
      <div className={cx('wrapper')}>
         {success ? (
            <div>
               <div className={cx('noti-title-success')}>Thong bao</div>
               <div className={cx('noti')}>Thanh cong</div>
            </div>
         ) : (
            <div>
               <div className={cx('noti-title-fail')}>Thong bao</div>
               <div className={cx('noti')}>That bai</div>
            </div>
         )}
      </div>
   );
}

export default Notification;
