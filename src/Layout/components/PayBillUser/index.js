import classNames from 'classnames/bind';
import styles from './PayBillUser.module.scss';
import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/Button';
import CoffeePayBillUser from '../../../components/CoffeePayBillUser';
import { SocketContext } from '../../../App';
import { getData } from '../../../configs/fetchData';
import { getBill } from '../../../configs/config';

const cx = classNames.bind(styles);

function PayBillUser({ listCoffeePay, id, setWaitConfirm, billDetails }) {
   const socket = useContext(SocketContext);
   let timeReal = new Date();
   const [hidden, setHidden] = useState(true);
   const [total, setTotal] = useState(0);
   const [totalMoney, setTotalMoney] = useState(0);

   const handleHiddenPayBill = () => {
      setHidden(true);
   };

   const handleRequestPayment = () => {
      if (listCoffeePay.length == 0) {
         alert('Hóa đơn đang trống');
         return;
      } else {
         if (!window.confirm('Bạn muốn thanh toán hóa đơn?')) {
            return;
         }
         setWaitConfirm(true);
         socket.emit('requestPayment', {
            id_table: id,
            title: `Thanh toán hóa đơn bàn số ${id}`,
            listCoffeePay: listCoffeePay,
            noti: 'Thông báo tính tiền!',
            type: 2,
         });
      }
   };

   console.log(listCoffeePay);

   var temp = 0;
   var tempTotal = 0;

   return (
      <div>
         {hidden ? (
            <FontAwesomeIcon
               className={cx('iconPrev')}
               onClick={() => {
                  setHidden(false);
               }}
               icon={faMoneyCheckDollar}
            />
         ) : (
            <div className={cx('wrapper')}>
               <div className={cx('body')}>
                  <div className={cx('paybill-body')}>
                     -------------------------------------------------------
                     <div className={cx('paybill-title')}>Hóa đơn</div>
                     -------------------------------------------------------
                     <div className={cx('bill-content')}>
                        <div>Mã số bill: {billDetails != undefined ? billDetails.id : ''}</div>
                        <div>
                           Thời gian: {timeReal.getHours()}:{timeReal.getMinutes()}:{timeReal.getSeconds()} ngày{' '}
                           {timeReal.getDate()}/{timeReal.getMonth() + 1}/{timeReal.getFullYear()}{' '}
                        </div>
                        <div>{'    '}--------------------------------------------------------------</div>
                        <div>
                           <span className={cx('spanten')}>Tên coffee</span>
                           <span className={cx('span')}>Giá</span>
                           <span className={cx('span')}>SL</span>
                           <span className={cx('span')}>Tổng</span>
                        </div>
                        <div className={cx('coffee')}>
                           {listCoffeePay != undefined
                              ? listCoffeePay.map((coffee) => {
                                   return <CoffeePayBillUser item={coffee} />;
                                })
                              : ''}
                        </div>
                        {listCoffeePay.map((item) => {
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
                     <Button title="Tính tiền" click={handleRequestPayment} />
                     <Button title="Hủy" click={handleHiddenPayBill} />
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default PayBillUser;
