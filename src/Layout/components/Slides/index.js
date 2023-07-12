import classNames from 'classnames/bind';
import styles from './Slides.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Slides() {
   return (
      <div className={cx('wrapper')}>
         <FontAwesomeIcon className={cx('icon-prev')} icon={faChevronLeft} />
         <FontAwesomeIcon className={cx('icon-next')} icon={faChevronRight} />
         <img className={cx('slide')} src="https://media.slidesgo.com/storage/8827178/coffee-vibes1626864387.jpg" />
      </div>
   );
}

export default Slides;
