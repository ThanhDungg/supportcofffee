import classNames from 'classnames/bind';
import styles from './Slides.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { listSlide } from '../../../configs/slides';

const cx = classNames.bind(styles);

function Slides() {
   const [indexSlide, setIndexSlide] = useState(0);

   const handleNext = () => {
      if (indexSlide == listSlide.length - 1) {
         setIndexSlide(indexSlide);
      } else {
         setIndexSlide((index) => index + 1);
      }
   };

   const handlePrev = () => {
      indexSlide <= 0 ? setIndexSlide(0) : setIndexSlide((index) => index - 1);
   };

   return (
      <div className={cx('wrapper')}>
         <FontAwesomeIcon className={cx('icon-prev')} icon={faChevronLeft} onClick={handlePrev} />
         <FontAwesomeIcon className={cx('icon-next')} icon={faChevronRight} onClick={handleNext} />
         <img className={cx('slide')} src={listSlide[indexSlide].img} />
      </div>
   );
}

export default Slides;
