import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import Button from '../../components/Button';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMugHot, faTableList } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header({ clickLogin, clickLogout, show, setShow, handlNotifi }) {
   const handleMouseOver = () => {
      setShow(!show);
   };

   const renderHeader = () => {
      if (!localStorage.getItem('isLogin')) {
         return <Button title="Login" click={clickLogin} />;
      } else if (parseInt(localStorage.getItem('isLogin')) === 1) {
         return (
            <div className={cx('form-profile')}>
               <div>
                  <Link to={'/table'}>
                     <FontAwesomeIcon className={cx('icon-list-table')} icon={faTableList} />
                  </Link>
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
                        <div className={cx('profile')}>
                           <Link className={cx('profile-link')} to={`/profile/${localStorage.getItem('idUser')}`}>
                              Profile
                           </Link>
                        </div>
                        <div className={cx('logout')} onClick={clickLogout}>
                           Logout
                        </div>
                     </div>
                  )}
               </div>
            </div>
         );
      } else if (parseInt(localStorage.getItem('isLogin')) === 2) {
         return (
            <div className={cx('form-profile')}>
               <Link to={'/bartender'}>
                  <div>
                     <FontAwesomeIcon className={cx('icon-cup')} icon={faMugHot} onClick={handlNotifi} />
                  </div>
               </Link>
               <div>
                  <FontAwesomeIcon className={cx('bell')} icon={faBell} onClick={handlNotifi} />
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
                        <div className={cx('profile')}>
                           <Link className={cx('profile-link')} to={`/profile/${localStorage.getItem('idUser')}`}>
                              Profile
                           </Link>
                        </div>
                        <div className={cx('logout')} onClick={clickLogout}>
                           Logout
                        </div>
                     </div>
                  )}
               </div>
            </div>
         );
      }
   };

   return (
      <div className={cx('wrapper')}>
         <Link to={'/'} className={cx('logo')}>
            <p className={cx('title-logo')}>COFFEE NTD</p>
         </Link>
         <div className={cx('sidebar')}>
            <ul className={cx('row-sidebar')}>HOME</ul>
            <ul className={cx('row-sidebar')}>MENU</ul>
            <ul className={cx('row-sidebar')}>CONTACT</ul>
         </div>
         <div>
            {
               /* {!isLogin ? (
               <Button title="Login" click={clickLogin} />
            ) : (
               <div className={cx('form-profile')}>
                  <div>
                     <FontAwesomeIcon className={cx('bell')} icon={faBell} onClick={handlNotifi} />
                     <Link to={'/table'}>
                        <FontAwesomeIcon className={cx('icon-list-table')} icon={faTableList} />
                     </Link>
                  </div>
                  <div className={cx('place-profile')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                     <div>
                        <img
                           className={cx('img')}
                           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg"
                        />
                     </div>
                     {show && <Button title="Đăng xuất" click={clickLogout} />}
                  </div>
               </div>
            )} */
               renderHeader()
            }
         </div>
      </div>
   );
}

export default Header;
