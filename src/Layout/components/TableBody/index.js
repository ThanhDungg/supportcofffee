import classNames from 'classnames/bind';
import styles from './TableBody.module.scss';
import Table from '../../../components/Table';

const cx = classNames.bind(styles);

function TableBody({ listTable, showChangeTable }) {
   return (
      <div className={cx('wrapper')}>
         {listTable.map((tb) => {
            return (
               <Table isTablePage={true} tableName={tb.Name} status={tb.Status} showChangeTable={showChangeTable} />
            );
         })}
      </div>
   );
}

export default TableBody;