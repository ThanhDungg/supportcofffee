import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import Button from '../../components/Button';
import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMugHot, faTableList } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Noti from '../../components/Noti';
import { SocketContext } from '../../App';

const cx = classNames.bind(styles);

function Header({ clickLogin, handlNotifi }) {
   const listTable = [
      { id: 1, Name: 'Ban 1', Status: 1 },
      { id: 2, Name: 'Ban 2', Status: 1 },
      { id: 3, Name: 'Ban 3', Status: 0 },
      { id: 4, Name: 'Ban 4', Status: 0 },
      { id: 5, Name: 'Ban 5', Status: 1 },
      { id: 6, Name: 'Ban 6', Status: 1 },
      { id: 7, Name: 'Ban 7', Status: 1 },
      { id: 8, Name: 'Ban 8', Status: 0 },
      { id: 9, Name: 'Ban 9', Status: 1 },
      { id: 10, Name: 'Ban 10', Status: 1 },
      { id: 11, Name: 'Ban 11', Status: 1 },
      { id: 12, Name: 'Ban 12', Status: 0 },
      { id: 13, Name: 'Ban 13', Status: 1 },
      { id: 14, Name: 'Ban 14', Status: 1 },
      { id: 15, Name: 'Ban 15', Status: 1 },
   ];
   const socket = useContext(SocketContext);
   const navigate = useNavigate();

   const [listNoti, setListNoti] = useState([]);

   const [show, setShow] = useState(false);
   const handleMouseOver = () => {
      setShow(!show);
   };

   const clickLogout = () => {
      localStorage.removeItem('isLogin');

      navigate('/');
      window.location.reload();
   };

   const handleAcp = async (id) => {
      if (!window.confirm('Xác nhận đơn!')) {
         return;
      }
      await socket.emit('approve', {
         tableNo: id,
         title: 'Đơn đã được xác nhận',
      });
      await setListNoti((list) => list.filter((item) => item.id_table != id));
   };

   useEffect(() => {
      socket.on('decline', (data) => {
         console.log(data);
      });
   }, [socket]);

   const handleCancel = async (id) => {
      if (!window.confirm('Bạn muốn hủy đơn?')) {
         return;
      }

      socket.emit('decline', {
         tableNo: id,
         title: 'Đơn đã hủy.',
      });
      await setListNoti((list) => list.filter((item) => item.id_table != id));
   };

   useEffect(() => {
      socket.on('order', (data) => {
         console.log(data);
         setListNoti((list) => [data, ...list]);
      });
   }, [socket]);

   // const renderHeader = () => {
   //    if (!localStorage.getItem('isLogin')) {
   //       return <Button title="Login" click={clickLogin} />;
   //    } else if (parseInt(localStorage.getItem('idRole')) === 1) {
   //       return (
   //          <div className={cx('form-profile')}>
   //             <div>
   //                <Link to={'/table'}>
   //                   <FontAwesomeIcon className={cx('icon-list-table')} icon={faTableList} />
   //                </Link>
   //             </div>
   //             <div className={cx('noti-staff')}>
   //                <div>
   //                   <FontAwesomeIcon className={cx('icon-list-table')} icon={faBell} />
   //                </div>
   //                <div className={cx('thongbao')}>
   //                   <Noti
   //                      titleNoti={'Thông báo tính tiền!'}
   //                      contentNoti={'Bàn số 2 thông báo tính tiền'}
   //                      time={'10:12:12'}
   //                   />
   //                   <Noti titleNoti={'Thông báo đặt món!'} contentNoti={'Bàn số 6 đặt món.'} time={'10:12:12'} />
   //                   <Noti titleNoti={'Thông báo đặt món!'} contentNoti={'Bàn số 5 đặt món.'} time={'10:12:12'} />
   //                </div>
   //             </div>
   //             <div className={cx('place-profile')} onClick={handleMouseOver}>
   //                <div>
   //                   <img
   //                      className={cx('img')}
   //                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg"
   //                   />
   //                </div>

   //                {show && (
   //                   <div className={cx('profile-logout')}>
   //                      <div className={cx('profile')}>
   //                         <Link className={cx('profile-link')} to={`/profile/${localStorage.getItem('idUser')}`}>
   //                            Profile
   //                         </Link>
   //                      </div>
   //                      <div className={cx('logout')} onClick={clickLogout}>
   //                         Logout
   //                      </div>
   //                   </div>
   //                )}
   //             </div>
   //          </div>
   //       );
   //    } else if (parseInt(localStorage.getItem('idRole')) === 2) {
   //       return (
   //          <div className={cx('form-profile')}>
   //             <Link to={'/bartender'}>
   //                <div>
   //                   <FontAwesomeIcon className={cx('icon-cup')} icon={faMugHot} onClick={handlNotifi} />
   //                </div>
   //             </Link>
   //             <div>
   //                <FontAwesomeIcon className={cx('bell')} icon={faBell} onClick={handlNotifi} />
   //             </div>
   //             <div className={cx('place-profile')} onClick={handleMouseOver}>
   //                <div>
   //                   <img
   //                      className={cx('img')}
   //                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg"
   //                   />
   //                </div>
   //                {show && (
   //                   <div className={cx('profile-logout')}>
   //                      <Link className={cx('profile-link')} to={`/profile/${localStorage.getItem('idUser')}`}>
   //                         <div className={cx('profile')}>Profile</div>
   //                      </Link>

   //                      <div className={cx('logout')} onClick={clickLogout}>
   //                         Logout
   //                      </div>
   //                   </div>
   //                )}
   //             </div>
   //          </div>
   //       );
   //    } else if (parseInt(localStorage.getItem('idRole')) === 0) {
   //       return (
   //          <div className={cx('form-profile')}>
   //             <div>
   //                <Link to={'/table'}>
   //                   <FontAwesomeIcon className={cx('icon-list-table')} icon={faTableList} />
   //                </Link>
   //             </div>
   //             <div className={cx('place-profile')} onClick={handleMouseOver}>
   //                <div>
   //                   <img
   //                      className={cx('img')}
   //                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg"
   //                   />
   //                </div>

   //                {show && (
   //                   <div className={cx('profile-logout')}>
   //                      <Link to={'/managerstaff'} className={cx('profile-link')}>
   //                         <div className={cx('profile')}>Staff</div>
   //                      </Link>

   //                      <Link className={cx('profile-link')}>
   //                         <div className={cx('profile')}>Coffee</div>
   //                      </Link>

   //                      <Link className={cx('profile-link')} to={`/profile/${localStorage.getItem('idUser')}`}>
   //                         <div className={cx('profile')}>Profile</div>
   //                      </Link>
   //                      <div className={cx('logout')} onClick={clickLogout}>
   //                         Logout
   //                      </div>
   //                   </div>
   //                )}
   //             </div>
   //          </div>
   //       );
   //    }
   // };

   return (
      <div className={cx('wrapper')}>
         <Link to={'/'} className={cx('logo')}>
            <p className={cx('title-logo')}>COFFEE NTD</p>
         </Link>
         <div className={cx('sidebar')}>
            <label for="menu">
               <ul className={cx('row-sidebar')}>MENU</ul>
            </label>
            <label for="contract">
               <ul className={cx('row-sidebar')}>LIÊN HỆ</ul>
            </label>
         </div>
         {/* <div>{renderHeader()}</div> */}
         {localStorage.getItem('isLogin') ? (
            <div className={cx('form-profile')}>
               <div>
                  <Link to={'/table'}>
                     <FontAwesomeIcon className={cx('icon-list-table')} icon={faTableList} />
                  </Link>
               </div>
               <div className={cx('noti-staff')}>
                  <div>
                     <FontAwesomeIcon className={cx('icon-list-table')} icon={faBell} />
                  </div>
                  <div className={cx('thongbao')}>
                     {listNoti.map((noti) => {
                        return (
                           <Noti
                              titleNoti={noti.noti}
                              contentNoti={noti.title}
                              time={'10:12:12'}
                              handleAcp={() => {
                                 handleAcp(noti.id_table);
                              }}
                              handleCancel={() => {
                                 handleCancel(noti.id_table);
                              }}
                           />
                        );
                     })}
                  </div>
               </div>
               <div className={cx('place-profile')} onClick={handleMouseOver}>
                  <div>
                     <img
                        className={cx('img')}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg"
                     />
                  </div>

                  {show && (
                     <div className={cx('profile-logout')}>
                        <Link to={'/managerstaff'} className={cx('profile-link')}>
                           <div className={cx('profile')}>Staff</div>
                        </Link>

                        <Link className={cx('profile-link')}>
                           <div className={cx('profile')}>Coffee</div>
                        </Link>

                        <Link className={cx('profile-link')} to={`/profile/${localStorage.getItem('idUser')}`}>
                           <div className={cx('profile')}>Profile</div>
                        </Link>
                        <div className={cx('logout')} onClick={clickLogout}>
                           Logout
                        </div>
                     </div>
                  )}
               </div>
            </div>
         ) : (
            <Button title="Login" click={clickLogin} />
         )}
      </div>
   );
}

export default Header;
