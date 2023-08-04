import classNames from 'classnames/bind';
import styles from './InputChangeProfileAfter.module.scss';

const cx = classNames.bind(styles);

function InputChangeProfileAfter({ fullName, handleEditFullname }) {
   return (
      <div className={cx('fullname')} onClick={handleEditFullname}>
         {fullName}
      </div>
   );
}

export default InputChangeProfileAfter;
