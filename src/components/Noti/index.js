import styles from './Noti.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Noti({ titleNoti, contentNoti, time, handleAcp, handleCancel, handStatus, type }) {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('noti')}>
            <div className={cx('header-noti')}>
               <span>{titleNoti}</span>
               <span className={cx('time')}>{time}</span>
            </div>
            <div className={cx('content-noti')}>{contentNoti}</div>
         </div>
         {type == 1 ? (
            <div>
               <button className={cx('btn')} onClick={handleAcp}>
                  Xác nhận
               </button>
               {/* <button className={cx('btn')} onClick={handStatus}>
                  Chi tiết
               </button> */}
               <button className={cx('btn')} onClick={handleCancel}>
                  Hủy
               </button>
            </div>
         ) : (
            <div>
               <button className={cx('btn')} onClick={handleAcp}>
                  Xác nhận
               </button>
            </div>
         )}
      </div>
   );
}

export default Noti;
