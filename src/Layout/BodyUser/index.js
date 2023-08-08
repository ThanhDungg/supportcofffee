import classNames from 'classnames/bind';
import styles from './BodyUser.module.scss';

import { useState } from 'react';
import CoffeeUser from '../components/CoffeeUser';

const cx = classNames.bind(styles);

function BodyUser({ listType, listCoffee, handleStatusCoffee }) {
   const [valueType, setValueType] = useState(0);
   const [nameType, setNameType] = useState('Tất cả');

   const onChangValueSelect = (e) => {
      setValueType(e.target.value);
      setNameType(e.target[e.target.selectedIndex].text);
   };

   return (
      <div className={cx('wrapper')}>
         <div className={cx('search')}>
            {/* <input className={cx('input')} placeholder="Search" />
            <span>
               <FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
            </span> */}
            {/* <FontAwesomeIcon className={cx('chariot')} icon={faCartShopping} /> */}
            <select className={cx('select-type')} onChange={onChangValueSelect}>
               <option value={0} selected>
                  Tất cả
               </option>
               {listType.map((type) => {
                  return <option value={type.id}>{type.Name_Type}</option>;
               })}
            </select>
         </div>
         <div className={cx('container')}>
            <div className={cx('place-item')}>
               <div className={cx('title-type')}>{nameType}</div>
               <div className={cx('place-coffee')}>
                  {listCoffee.length != 0
                     ? listCoffee.map((coffee) => {
                          if (valueType == 0) {
                             return <CoffeeUser coffee={coffee} handleStatusCoffee={handleStatusCoffee} />;
                          } else {
                             if (coffee.id_type == valueType) {
                                return <CoffeeUser coffee={coffee} handleStatusCoffee={handleStatusCoffee} />;
                             }
                          }
                       })
                     : ''}
               </div>
            </div>
         </div>
      </div>
   );
}

export default BodyUser;
