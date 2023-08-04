import { HIGHLAND_BACKGROUND_1, HIGHLAND_BACKGROUND_2, tempImg } from '../../configs/config';
import styles from './PromotionBody.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PromotionBody() {
   return (
      <div>
         PromotionBody
         <div className={cx('place-img')}>
            <img className={cx('img-background')} src={HIGHLAND_BACKGROUND_1} />
            <span className={cx('title-promotion')}>Khuyen mai 1</span>
         </div>
         <div>
            <img src={HIGHLAND_BACKGROUND_2} />
         </div>
      </div>
   );
}

export default PromotionBody;
