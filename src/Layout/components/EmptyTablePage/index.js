import classNames from 'classnames/bind';
import styles from './EmptyTablePage.module.scss';
import Table from '../../../components/Table';
import Close from '../../../components/Close';

const cx = classNames.bind(styles);

function EmptyTablePage({ listTable, handleClose, status }) {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('place-table')}>
            <Close hanldeClose={handleClose} />
            {listTable.map((tb) => {
               if (tb.status == status) {
                  return <Table table={tb} tableName={tb.name_table} status={tb.status} />;
               }
            })}
         </div>
      </div>
   );
}

export default EmptyTablePage;
