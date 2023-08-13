import classNames from 'classnames/bind';
import styles from './PayBillTable.module.scss';
import Button from '../../../components/Button';
import CoffeePayBill from '../../../components/CoffeePayBill';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function PayBillTable({ list, setShowPayBill, listTopping, bill, handlePayment }) {
   let timeReal = new Date();

   const [total, setTotal] = useState(0);

   const handleHiddenPayBill = () => {
      setShowPayBill(false);
   };

   var temp = 0;
   var tempTotal = 0;

   useEffect(() => {
      setTotal(0);
      list.map((coffee) => {
         coffee.topping_details.map((tp) => {
            setTotal((price) => price + parseInt(tp.price));
         });
         setTotal((price) => (price + parseInt(coffee.price)) * coffee.quantity);
      });
   }, [list.length]);
   console.log(list);

   return (
      <div className={cx('wrapper')}>
         <div className={cx('body')}>
            <div className={cx('paybill-body')}>
               -------------------------------------------------------
               <div className={cx('paybill-title')}>Hóa đơn</div>
               -------------------------------------------------------
               <div className={cx('bill-content')}>
                  <div>Mã số bill:{bill.id}</div>
                  <div>
                     Thời gian: {timeReal.getHours()}:{timeReal.getMinutes()}:{timeReal.getSeconds()} ngày{' '}
                     {timeReal.getDate()}/{timeReal.getMonth() + 1}/{timeReal.getFullYear()}{' '}
                  </div>
                  <div>{'    '}--------------------------------------------------------------------</div>
                  <div>
                     <span className={cx('spanten')}>Tên coffee</span>
                     <span className={cx('span')}>Giá</span>
                     <span className={cx('span')}>Số lượng</span>
                     <span className={cx('span')}>Tổng</span>
                  </div>
                  <div className={cx('coffee')}>
                     {list.map((item) => {
                        return <CoffeePayBill item={item} listTopping={listTopping} />;
                     })}
                  </div>
                  {list.map((item) => {
                     temp = parseInt(item.price);
                     item.topping_details.map((tp) => {
                        temp = temp + parseInt(tp.price);
                     });
                     tempTotal = tempTotal + temp * item.quantity;
                  })}
                  <div className={cx('sum')}>Tổng cộng: {tempTotal.toLocaleString()}vnd</div>
               </div>
            </div>
            <div>
               <Button title="Xác nhận" click={handlePayment} />
               <Button title="Hủy" click={handleHiddenPayBill} />
            </div>
         </div>
      </div>
   );
}

export default PayBillTable;
