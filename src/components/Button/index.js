import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ title = '', click }) {
   return (
      <button className={cx('btn')} onClick={click}>
         {title}
      </button>
   );
}

export default Button;
