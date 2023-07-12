import classNames from 'classnames/bind';
import styles from './TableHome.module.scss';
import Table from '../../../components/Table';
import Pay from '../../../components/Pay';
import ChooseTable from '../../../components/ChooseTable';
import Close from '../../../components/Close';

const cx = classNames.bind(styles);

function TableHome({ listTable, handleClose }) {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('Close')}>
            <Close hanldeClose={handleClose} />
         </div>
         <div className={cx('table')}>
            {listTable.map((table) => {
               return <Table tableName={table.Name} status={table.Status} children2={<ChooseTable />} />;
            })}
         </div>
      </div>
   );
}

export default TableHome;
