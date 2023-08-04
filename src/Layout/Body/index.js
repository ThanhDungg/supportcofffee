import Menu from '../../components/Menu';
import Slides from '../components/Slides';

import classNames from 'classnames/bind';
import styles from './Body.module.scss';

const cx = classNames.bind(styles);

function Body({ clickStatus, listCoffee, listType }) {
   return (
      <div>
         <Slides />
         <div className={cx('body')}>
            <Menu listCoffee={listCoffee} listType={listType} clickStatus={clickStatus} />
         </div>
      </div>
   );
}

export default Body;
