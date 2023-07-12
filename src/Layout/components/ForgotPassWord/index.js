import classNames from 'classnames/bind';
import styles from './ForgotPassWord.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

const cx = classNames.bind(styles);

function ForgotPassWord({ clickClose, changePassword }) {
   return (
      <div className={cx('login-form')}>
         <div className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('close')} icon={faClose} onClick={clickClose} />
            <img
               className={cx('img')}
               src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/345443153_1189417021749623_5664473820944885617_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=j3UY65Qg1FoAX8LSM-j&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDYy8jfEq18rWM_paDCzLPDlGhZ8U7A0C_HdJ_7cFjraw&oe=64A6D04E"
            />
            <span className={cx('login')}>
               <Input placeholder="Nhập SDT" title="Số điện thoại" />
               <Button title="Send OTP" />

               <Input placeholder="Nhập OTP" title="OTP" />
               <Input placeholder="Mật khẩu" title="Mật Khẩu mới" />
               <Input placeholder="Nhập lại mật khẩu" title="Nhập lại mật khẩu" />
               <div>
                  <Button title="Change" click={changePassword} />
               </div>
            </span>
         </div>
      </div>
   );
}

export default ForgotPassWord;
