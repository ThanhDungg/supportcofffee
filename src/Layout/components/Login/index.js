import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Login({ clickClose, forgotpass, handleLogin, changeTaiKhoan, changeMatKhau, errorText }) {
   return (
      <div className={cx('login-form')}>
         <div className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('close')} icon={faClose} onClick={clickClose} />
            <img
               className={cx('img')}
               src="https://www.acouplecooks.com/wp-content/uploads/2020/09/Latte-Art-066s.jpg"
            />
            <span className={cx('login')}>
               <Input placeholder="Tai khoan" title="Tài khoản" change={changeTaiKhoan} />
               <Input placeholder="Mat khau" title="Mật Khẩu" change={changeMatKhau} isPassword={true} />
               <div className={cx('error')}>{errorText}</div>
               <div>
                  <Button title="Đăng nhập" click={handleLogin} />
               </div>
               <div className={cx('forgot')} onClick={forgotpass}>
                  Quên mật khẩu
               </div>
            </span>
         </div>
      </div>
   );
}

export default Login;
