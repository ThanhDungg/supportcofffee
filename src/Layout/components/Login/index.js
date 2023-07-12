import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Login({ clickClose, forgotpass, handleLogin, changeTaiKhoan, changeMatKhau }) {
   return (
      <div className={cx('login-form')}>
         <div className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('close')} icon={faClose} onClick={clickClose} />
            <img
               className={cx('img')}
               src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/345443153_1189417021749623_5664473820944885617_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=j3UY65Qg1FoAX8LSM-j&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDYy8jfEq18rWM_paDCzLPDlGhZ8U7A0C_HdJ_7cFjraw&oe=64A6D04E"
            />
            <span className={cx('login')}>
               <Input placeholder="Tai khoan" title="Tài khoản" change={changeTaiKhoan} />
               <Input placeholder="Mat khau" title="Mật Khẩu" change={changeMatKhau} isPassword={true} />
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
