import classNames from 'classnames/bind';
import styles from './BartenderAllBill.module.scss';
import BartenderBill from '../components/BartenderBill';
import { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../App';

const cx = classNames.bind(styles);

function BartenderAllBill({ list }) {
   const [listCoffee, setListCoffee] = useState(list);
   const [state, setState] = useState(0);

   useEffect(() => {}, [state]);

   return (
      <div className={cx('wrapper')}>
         <div className={cx('coffee')}>
            {list.map((listChild, index) => {
               return <BartenderBill listCoffee={listChild} list={list} index={index} setState={setState} />;
            })}
         </div>
      </div>
   );
}

export default BartenderAllBill;
