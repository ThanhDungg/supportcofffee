import classNames from 'classnames/bind';
import styles from './ColumnStaff.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlock, faLock, faFileContract } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ColumnStaff({ item, onClickContract }) {
   return (
      <tr className={cx('row')}>
         <td>
            <input
               className={cx('checkbox')}
               type="checkbox"
               value={item.id}
               onChange={(e) => {
                  console.log(e.target.value);
                  console.log(e.target.checked);
               }}
            />
         </td>
         <td className={cx('column', 'column-id')}>{item.id}</td>
         <td className={cx('column', 'column-name')}>{item.fullName}</td>
         <td className={cx('column', 'column-adress')}>{item.adress}</td>
         <td className={cx('column', 'column-email')}>{item.Email}</td>
         <td className={cx('column', 'column-sdt')}>{item.sdt}</td>
         <td className={cx('column', 'column-status')}>{item.status == 2 ? 'Hoạt động' : 'Khóa'}</td>
         <td
            className={cx('column', 'column-icon')}
            onClick={() => {
               onClickContract(item.id);
            }}
         >
            <FontAwesomeIcon icon={faFileContract} />
         </td>
      </tr>
   );
}

export default ColumnStaff;
