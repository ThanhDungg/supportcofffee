import classNames from 'classnames/bind';
import styles from './Table.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStapler } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Table({
   tableName,
   status,
   children2,
   isTablePage = false,
   showChangeTable,
   showPayBill,
   setShowPayBill,
   showTablePairing,
   chooseTbl,
}) {
   const [choose, setChoose] = useState(true);
   const [choose2, setChoose2] = useState(true);

   const handleTableFull = () => {
      setChoose2(false);
   };

   const handleCancelTableFull = () => {
      setChoose2(true);
   };

   const handleTableEmpty = () => {
      setChoose(false);
   };

   const handleCancelTableEmpty = () => {
      setChoose(true);
   };

   const handleShowPayBill = () => {
      setShowPayBill(true);
   };

   return status ? (
      <div className={!isTablePage ? cx('full-table') : cx('full-tablepage')}>
         {!isTablePage ? (
            <div>
               <FontAwesomeIcon className={cx('icon-full')} icon={faStapler} />
               <div className={cx('name-table')}>{tableName} - Full</div>
            </div>
         ) : (
            <div>
               {choose2 ? (
                  <div>
                     <FontAwesomeIcon className={cx('icon-fulltablepage')} icon={faStapler} onClick={handleTableFull} />
                     <div className={cx('name-table')}>{tableName} - Full</div>
                  </div>
               ) : (
                  <div>
                     <button className={cx('btn-paytbale')} onClick={handleShowPayBill}>
                        Thanh toán
                     </button>
                     <br />
                     <button className={cx('btn-choosetable')} onClick={showChangeTable}>
                        Đổi bàn
                     </button>
                     <br />
                     <button className={cx('btn-canceltable')} onClick={handleCancelTableFull}>
                        Hủy
                     </button>
                  </div>
               )}
            </div>
         )}
      </div>
   ) : (
      <div className={cx('empty-table')}>
         {choose ? (
            <div>
               <FontAwesomeIcon className={cx('icon-empty')} icon={faStapler} onClick={handleTableEmpty} />
               <div className={cx('name-table')}>{tableName} - Empty</div>
               {children2}
            </div>
         ) : (
            <div className={cx('btn-place')}>
               {!isTablePage ? (
                  <div>
                     <button className={cx('btn-choose')} onClick={chooseTbl}>
                        Chọn
                     </button>
                     <br />
                     <button className={cx('btn-cancel')} onClick={handleCancelTableEmpty}>
                        Hủy
                     </button>
                  </div>
               ) : (
                  <div>
                     <button className={cx('btn-choose')} onClick={showTablePairing}>
                        Ghép bàn
                     </button>
                     <br />
                     <button className={cx('btn-cancel')} onClick={handleCancelTableEmpty}>
                        Hủy
                     </button>
                  </div>
               )}
            </div>
         )}
      </div>
   );
}

export default Table;
