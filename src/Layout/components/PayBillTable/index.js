import classNames from 'classnames/bind';
import styles from './PayBillTable.module.scss';
import Button from '../../../components/Button';
import CoffeePayBill from '../../../components/CoffeePayBill';

const cx = classNames.bind(styles);

function PayBillTable({ idBill, setShowPayBill }) {
   let timeReal = new Date();

   const handleHiddenPayBill = () => {
      setShowPayBill(false);
   };

   return (
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
                  <div>{'    '}--------------------------------------------------------------------</div>
                  <div>
                     <span className={cx('spanten')}>Tên coffee</span>
                     <span className={cx('span')}>Giá</span>
                     <span className={cx('span')}>Số lượng</span>
                     <span className={cx('span')}>Tổng</span>
                  </div>
                  <div className={cx('coffee')}>
                     <CoffeePayBill />
                     <CoffeePayBill />
                     <CoffeePayBill />
                     <CoffeePayBill />
                     <CoffeePayBill />
                     <CoffeePayBill />
                     <CoffeePayBill />
                  </div>
                  <div className={cx('sum')}>Tổng cộng: 20.000vnd</div>
               </div>
            </div>
            <div>
               <Button title="Xác nhận" />
               <Button title="Hủy" click={handleHiddenPayBill} />
            </div>
         </div>
      </div>
   );
}

export default PayBillTable;
