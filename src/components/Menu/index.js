import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Item from './item';

const cx = classNames.bind(styles);

function Menu({ listCoffee, listType, clickStatus }) {
   return (
      <div className={cx('wrapper')} id="menu">
         {listType.map((item) => {
            return (
               <div className={cx('name-type')}>
                  <div className={cx('name')}>{item.Name_Type}</div>
                  <div className={cx('list-item')}>
                     {listCoffee.map((temp) => {
                        if (temp.id_Type == item.id) {
                           return (
                              <Item
                                 onclick={() => {
                                    clickStatus(temp.id);
                                 }}
                                 Name_Coffee={temp.Name_Coffee}
                                 img={temp.img}
                                 price={temp.listsize[0].price}
                              />
                           );
                        }
                     })}
                  </div>
               </div>
            );
         })}
      </div>
   );
}

export default Menu;
