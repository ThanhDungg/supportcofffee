import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({
   placeholder = '',
   errorText = '',
   title = '',
   change,
   isPassword = false,
   name,
   onKeyPress,
   maxLength,
}) {
   return (
      <div>
         <div>{title}</div>
         {!isPassword ? (
            <input
               name={name}
               className={cx('input')}
               placeholder={placeholder}
               type="text"
               onChange={change}
               onKeyPress={onKeyPress}
               maxLength={maxLength}
            />
         ) : (
            <input name={name} className={cx('input')} placeholder={placeholder} type="password" onChange={change} />
         )}
         <div className={cx('error')}>{errorText}</div>
      </div>
   );
}

export default Input;
