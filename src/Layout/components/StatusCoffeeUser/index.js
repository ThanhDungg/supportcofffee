import classNames from 'classnames/bind';
import styles from './StatusCoffeeUser.module.scss';

import Close from '../../../components/Close';
import CalculateBtn from '../../../components/CalculateBtn';
import { useEffect, useState } from 'react';
import Radio from '../../../components/Radio';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

function StatusCoffeeUser({
   coffee,
   handleClose,
   handleBuyCoffee,
   quantity,
   handleAbsCoffee,
   handleAddCoffee,
   setQuantityMoney,
   quantityMoney,
}) {
   const listTopping = [
      {
         id: 1,
         name: 'Trân châu đen',
         price: 5000,
      },
      {
         id: 2,
         name: 'Trân châu trắng',
         price: 7000,
      },
      {
         id: 3,
         name: 'Thạch',
         price: 9000,
      },
   ];

   const [state, setState] = useState(1);

   var temp;
   var tempCheckbox;
   var tempMoney;
   var tempListCheckTopping = [];

   useEffect(() => {
      tempListCheckTopping = [];
      tempMoney = 0;
      temp = document.querySelectorAll('[name = "size"]');
      for (let i = 0; i < temp.length; i++) {
         if (temp[i].checked) {
            tempMoney = +temp[i].value;
         }
      }
      tempCheckbox = document.querySelectorAll('[name = "checktopping"]');
      for (let i = 0; i < tempCheckbox.length; i++) {
         if (tempCheckbox[i].checked) {
            tempListCheckTopping.push(tempCheckbox[i].value);
         }
      }
      listTopping.map((topping) => {
         tempListCheckTopping.map((checkTP) => {
            if (parseInt(checkTP) == topping.id) {
               tempMoney = +tempMoney + topping.price;
            }
         });
      });
      setQuantityMoney(tempMoney);
   }, [state]);

   const handleChangeSize = () => {
      setState(state + 1);
   };

   return (
      <div className={cx('wrapper')}>
         <Close hanldeClose={handleClose} />
         <div className={cx('placeCoffee')}>
            <div>
               <img className={cx('img')} src={coffee.img} />
            </div>
            <div className={cx('place-info')}>
               <div className={cx('nameCoffee')}>{coffee.name_coffee}</div>
               <div className={cx('place-choose-size')} id="place-size">
                  {coffee.size_details.map((size) => {
                     if (coffee.size_details[coffee.size_details.length - 1]) {
                        return (
                           <Radio
                              name={'size'}
                              ischecked={true}
                              value={size.price}
                              id={size.id_size}
                              title={size.size.name_size}
                              price={parseInt(size.price).toLocaleString()}
                              onClick={handleChangeSize}
                           />
                        );
                     } else {
                        return (
                           <Radio
                              name={'size'}
                              value={size.price}
                              id={size.id_size}
                              title={size.size.name_size}
                              price={parseInt(size.price).toLocaleString()}
                              onClick={handleChangeSize}
                           />
                        );
                     }
                  })}
                  <div>
                     <CalculateBtn title={'-'} onClick={handleAbsCoffee} />
                     {'    '}
                     {quantity}
                     {'    '}
                     <CalculateBtn title={'+'} onClick={handleAddCoffee} />
                  </div>
                  {listTopping.map((topping) => {
                     return (
                        <div>
                           <input onClick={handleChangeSize} name="checktopping" type="checkbox" value={topping.id} />{' '}
                           {topping.name} - {topping.price.toLocaleString()}vnd
                        </div>
                     );
                  })}
                  <div>Tổng tiền: {(quantity * quantityMoney).toLocaleString()}vnd</div>
                  <Button
                     title="Mua"
                     click={() => {
                        handleBuyCoffee(coffee, quantity);
                     }}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default StatusCoffeeUser;
