import classNames from 'classnames/bind';
import styles from './TableBody.module.scss';
import Table from '../../../components/Table';

const cx = classNames.bind(styles);

function TableBody({ listTable, showChangeTable, showTablePairing, handleShowPayBill }) {
   return (
      <div className={cx('wrapper')}>
         {listTable.map((tb) => {
            return (
               <Table
                  isTablePage={true}
                  table={tb}
                  showChangeTable={showChangeTable}
                  showTablePairing={showTablePairing}
                  handleShowPayBill={handleShowPayBill}
               />
            );
         })}
      </div>
   );
}

export default TableBody;
