import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ placeholder = '', errorText = '', title = '', change, isPassword = false }) {
   return (
      <div>
         <div>{title}</div>
         {!isPassword ? (
            <input className={cx('input')} placeholder={placeholder} type="text" onChange={change} />
         ) : (
            <input className={cx('input')} placeholder={placeholder} type="password" onChange={change} />
         )}
         <div className={cx('error')}>{errorText}</div>
      </div>
   );
}

export default Input;
