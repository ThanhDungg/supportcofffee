import classNames from 'classnames/bind';
import styles from './ChangePassword.module.scss';

const cx = classNames.bind(styles);

function ChangePassword({ error, handleCloseChangePassword, handleAcpChangePassword, onChange }) {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            <div className={cx('body')}>
               <div className={cx('tbody')}>
                  <tr>
                     <td>Mật khẩu cũ: </td>
                     <td>
                        <input
                           type="password"
                           name="old-password"
                           placeholder="Nhập mật khẩu cũ"
                           className={cx('input')}
                           onChange={onChange}
                        />
                     </td>
                  </tr>
                  <tr>
                     <td>Mật khẩu mới: </td>
                     <td>
                        <input
                           type="password"
                           name="new-password"
                           placeholder="Nhập mật khẩu mới"
                           className={cx('input')}
                           onChange={onChange}
                        />
                     </td>
                  </tr>
                  <tr>
                     <td>Nhập lại mật khẩu mới: </td>
                     <td>
                        <input
                           type="password"
                           name="re-new-password"
                           placeholder="Nhập lại mật khẩu mới"
                           className={cx('input')}
                           onChange={onChange}
                        />
                     </td>
                  </tr>
               </div>
               <div className={cx('error')}>{error}</div>
               <div className={cx('btns')}>
                  <button className={cx('btn')} onClick={handleAcpChangePassword}>
                     Xác nhận
                  </button>
                  <button className={cx('btn')} onClick={handleCloseChangePassword}>
                     Hủy
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ChangePassword;
