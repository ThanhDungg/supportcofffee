import classNames from 'classnames/bind';
import styles from './Coffee.module.scss';
import Img from '../../../components/Img';
import Close from '../../../components/Close';
import Radio from '../../../components/Radio';
import CalculateBtn from '../../../components/CalculateBtn';
import Button from '../../../components/Button';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Coffee({
   coffee,
   handleClose,
   handleBuy,
   handleAddCoffee,
   handleAbsCoffee,
   quantityCoffee,
   price,
   setPrice,
   listTopping,
}) {
   const [state, setState] = useState(0);

   useEffect(() => {
      let tempCheckSize = document.querySelectorAll('[name = "check"]');
      for (let i = 0; i < tempCheckSize.length; i++) {
         if (tempCheckSize[i].checked) {
            setPrice(tempCheckSize[i].value);
         }
      }

      let tempCheckTP = document.querySelectorAll('[name = "checktopping"]');
      for (let i = 0; i < tempCheckTP.length; i++) {
         if (tempCheckTP[i].checked) {
            listTopping.map((tp) => {
               if (tp.id == tempCheckTP[i].value) {
                  setPrice((pri) => parseInt(pri) + parseInt(tp.price));
               }
            });
         }
      }
   }, [state]);

   const handleSetState = () => {
      setState(state + 1);
   };

   return (
      <div className={cx('wrapper')}>
         <div className={cx('coffee')}>
            <Close hanldeClose={handleClose} />
            <div>
               <Img className={cx('coffee-img')} src={coffee.img} />
            </div>
            <div className={cx('title')}>
               <p className={cx('name-coffee')}>{coffee.name_coffee}</p>
               <div id="list-size">
                  {coffee.size_details.map((size) => {
                     if (size.id_size == coffee.size_details[coffee.size_details.length - 1].id_size) {
                        return (
                           <Radio
                              id={size.id_size}
                              name={'check'}
                              title={size.size.name_size}
                              ischecked={true}
                              value={parseInt(size.price)}
                              onClick={handleSetState}
                              price={parseInt(size.price).toLocaleString()}
                           />
                        );
                     }
                     return (
                        <Radio
                           id={size.id_size}
                           name={'check'}
                           title={size.size.name_size}
                           ischecked={false}
                           value={parseInt(size.price)}
                           onClick={handleSetState}
                           price={parseInt(size.price).toLocaleString()}
                        />
                     );
                  })}
               </div>

               <div className={cx('quantity')}>
                  Số lượng:
                  <CalculateBtn title={'-'} onClick={handleAbsCoffee} />
                  {'    '}
                  {quantityCoffee}
                  {'    '}
                  <CalculateBtn title={'+'} onClick={handleAddCoffee} />
               </div>
               <div id="list-topping" className={cx('note')}>
                  {listTopping.map((t) => {
                     return (
                        <div className={cx('topping')}>
                           <input
                              className={cx('check-topping')}
                              type="checkbox"
                              name="checktopping"
                              value={t.id}
                              onClick={handleSetState}
                           />
                           {t.name_topping} - {parseInt(t.price).toLocaleString()}vnd
                        </div>
                     );
                  })}
               </div>
               <div>
                  Tổng tiền:{' '}
                  <span className={cx('total')}>
                     {(parseInt(price) * quantityCoffee).toLocaleString()}
                     vnd
                  </span>
               </div>
               <div className={cx('btn')}>
                  <Button
                     title="Mua"
                     click={() => {
                        handleBuy(coffee, quantityCoffee);
                     }}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Coffee;
