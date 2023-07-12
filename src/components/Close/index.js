import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Close.module.scss';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Close({ hanldeClose }) {
   return <FontAwesomeIcon onClick={hanldeClose} className={cx('icon')} icon={faClose} />;
}

export default Close;
