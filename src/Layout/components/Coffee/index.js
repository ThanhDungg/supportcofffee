import classNames from 'classnames/bind';
import styles from './Coffee.module.scss';
import Img from '../../../components/Img';
import Close from '../../../components/Close';
import Radio from '../../../components/Radio';
import { useState } from 'react';
import CalculateBtn from '../../../components/CalculateBtn';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

function Coffee({
   type = 'Trà sữa',
   coffee,
   handleClose,
   handleBuy,
   handleAddCoffee,
   handleAbsCoffee,
   quantityCoffee,
}) {
   const [isCheck1, setIsCheck1] = useState(false);
   const [isCheck2, setIsCheck2] = useState(false);

   const handleChange = (e, check1, check2) => {
      check1(e.target.checked);
      check2(!e.target.checked);
   };

   return (
      <div className={cx('wrapper')}>
         <div className={cx('coffee')}>
            <Close hanldeClose={handleClose} />
            <div>
               <Img className={cx('coffee-img')} src={coffee.img} />
            </div>
            <div className={cx('title')}>
               <p className={cx('name-coffee')}>
                  {coffee.Name_Coffee} - <i>{type}</i>
               </p>
               <div>
                  Giá: <span className={cx('price')}>{parseInt(coffee.price).toLocaleString()}vnd</span>
               </div>
               <div>
                  <Radio
                     id={'sizeM'}
                     name={'Check'}
                     title={'Size M'}
                     ischecked={true}
                     handleChange={(e) => {
                        handleChange(e, setIsCheck1, setIsCheck2);
                     }}
                  />
                  <Radio
                     id={'sizeL'}
                     name={'Check'}
                     title={'Size L'}
                     ischecked={false}
                     handleChange={(e) => {
                        handleChange(e, setIsCheck2, setIsCheck1);
                     }}
                  />
               </div>
               <div>
                  Tổng tiền:{' '}
                  <span className={cx('total')}>
                     {(parseInt(coffee.price) * quantityCoffee).toLocaleString()}
                     vnd
                  </span>
               </div>
               <div className={cx('quantity')}>
                  Số lượng:
                  <CalculateBtn title={'-'} onClick={handleAbsCoffee} />
                  {'    '}
                  {quantityCoffee}
                  {'    '}
                  <CalculateBtn title={'+'} onClick={handleAddCoffee} />
               </div>
               <div className={cx('btn')}>
                  <Button
                     title="Mua"
                     click={() => {
                        handleBuy(coffee.id);
                     }}
                  />
               </div>
               <p className={cx('note')}>
                  Mô tả:{' '}
                  <i>
                     {
                        'Đây là thức uống được ưa chuộng nhiều nhất trong các sản phẩm bán chạy ngày hôm nay. Bạn có thể thử thưởng thức 1 cốc để cảm nhận mùi vị yêu thương của cửa hàng.'
                     }
                  </i>
               </p>
            </div>
         </div>
      </div>
   );
}

export default Coffee;
