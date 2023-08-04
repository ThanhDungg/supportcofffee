import classNames from 'classnames/bind';
import styles from './InputChangeProfile.module.scss';

const cx = classNames.bind(styles);

function InputChangeProfile({ fullName, handleBlurEditFullname, changeFullname }) {
   return (
      <input
         className={cx('input')}
         defaultValue={fullName}
         onBlur={handleBlurEditFullname}
         onChange={changeFullname}
         onKeyPress={(e) => {
            e.key === 'Enter' && handleBlurEditFullname();
         }}
      />
   );
}

export default InputChangeProfile;
