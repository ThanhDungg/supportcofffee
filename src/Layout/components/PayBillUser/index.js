import classNames from 'classnames/bind';
import styles from './PayBillUser.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/Button';
import CoffeePayBillUser from '../../../components/CoffeePayBillUser';

const cx = classNames.bind(styles);

function PayBillUser({ listCoffeePay }) {
   let timeReal = new Date();
   const [hidden, setHidden] = useState(true);
   const [total, setTotal] = useState(0);

   const handleHiddenPayBill = () => {
      setHidden(true);
   };

   useEffect(() => {
      setTotal(0);
      listCoffeePay.map((item) => {
         setTotal((tt) => tt + item.price * item.quantity);
      });
   }, [listCoffeePay.length]);

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
                        <div>
                           Mã số bill: {timeReal.getFullYear()}
                           {timeReal.getMonth() + 1}
                           {timeReal.getDate()}
                           {timeReal.getHours()}
                           {timeReal.getMinutes()}
                           {timeReal.getSeconds()}
                        </div>
                        <div>Khách hàng: Nguyễn Thanh Dũng</div>
                        <div>SDT: 0343263672</div>
                        <div>Bàn số: 5, 6.</div>
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
                           {listCoffeePay.map((coffee) => {
                              return <CoffeePayBillUser item={coffee} />;
                           })}
                        </div>
                        <div className={cx('sum')}>Tổng cộng: {total.toLocaleString()}vnd</div>
                     </div>
                  </div>
                  <div>
                     <Button title="Tính tiền" />
                     <Button title="Hủy" click={handleHiddenPayBill} />
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default PayBillUser;
