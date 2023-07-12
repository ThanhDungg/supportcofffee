import classNames from 'classnames/bind';
import styles from './Img.module.scss';

const cx = classNames.bind(styles);

function Img({ src }) {
   return <img className={cx('img')} src={src} />;
}

export default Img;
