import classNames from 'classnames/bind';
import styles from './BartenderBody.module.scss';

const cx = classNames.bind(styles);

function BartenderBody({ handleDone }) {
   return (
      <div className={cx('wrapper')}>
         <div>Bartender do something</div>
         <button className={cx('btn')} onClick={handleDone}>
            Done
         </button>
      </div>
   );
}

export default BartenderBody;
