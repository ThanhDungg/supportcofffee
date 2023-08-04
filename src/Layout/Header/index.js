import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import Button from '../../components/Button';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMugHot, faTableList } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header({ clickLogin, handlNotifi }) {
   const navigate = useNavigate();

   const [show, setShow] = useState(false);
   const handleMouseOver = () => {
      setShow(!show);
   };

   const clickLogout = () => {
      localStorage.removeItem('idUser');
      localStorage.removeItem('isLogin');
      localStorage.removeItem('idRole');

      navigate('/');
      window.location.reload();
   };

   const renderHeader = () => {
      if (!localStorage.getItem('isLogin')) {
         return <Button title="Login" click={clickLogin} />;
      } else if (parseInt(localStorage.getItem('idRole')) === 1) {
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
      } else if (parseInt(localStorage.getItem('idRole')) === 2) {
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
         );
      } else if (parseInt(localStorage.getItem('idRole')) === 0) {
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
         );
      }
   };

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
         <div>{renderHeader()}</div>
      </div>
   );
}

export default Header;
