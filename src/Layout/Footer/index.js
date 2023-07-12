import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faAddressBook,
   faCodeBranch,
   faEnvelope,
   faLocationDot,
   faNoteSticky,
   faPhone,
   faUser,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
   const containerStyles = {
      width: '200px',
      height: '200px',
   };

   const center = {
      lat: 10.8479923,
      lng: 106.7840844,
   };

   const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: 'YOUR_API_KEY',
   });
   const [map, setMap] = useState(null);

   const onLoad = useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);

      setMap(map);
   }, []);

   const onUnmount = useCallback(function callback(map) {
      setMap(null);
   }, []);

   return (
      <div className={cx('wrapper')}>
         {isLoaded ? (
            <div className={cx('map')}>
               <GoogleMap
                  mapContainerStyle={containerStyles}
                  center={center}
                  zoom={8}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
               ></GoogleMap>
            </div>
         ) : (
            <></>
         )}
         <div className={cx('adress-contact')}>
            <div className={cx('adress-title')}>Thông tin chi nhánh</div>
            <div>
               <FontAwesomeIcon className={cx('icon')} icon={faUser} />: Nguyễn Thanh Dũng
            </div>
            <div>
               <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />: Email: andydung2607@gmail.com
            </div>
            <div>
               <FontAwesomeIcon className={cx('icon')} icon={faPhone} />: 0343263672
            </div>
            <div>
               <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />: 97 Man Thiện, Hiệp Phú, Thủ Đức, Hồ Chí
               Minh
            </div>
            <div>
               <FontAwesomeIcon className={cx('icon')} icon={faCodeBranch} />: Thủ Đức (Quận 9 cũ)
            </div>
         </div>
         <div className={cx('adress-contact')}>
            <div className={cx('adress-title')}>Phương thức liên hệ</div>
            <div>
               <FontAwesomeIcon className={cx('icon', 'icon-contact')} icon={faAddressBook} />
               :facebook
            </div>
            <div>
               <FontAwesomeIcon className={cx('icon', 'icon-contact')} icon={faAddressBook} />
               :instagram
            </div>

            <div className={cx('note')}>
               <FontAwesomeIcon className={cx('icon')} icon={faNoteSticky} />: CoffeeNTD kính chào quý khách, hân hạnh
               được phục vụ quý khách. Chúc quý khách có một ngày tốt lành.
               <br />
               Nếu có thắc mắc, mọi chi tiết xin liên hệ đến admin thông qua thông tin liên hệ đã sẵn có
            </div>
         </div>
      </div>
   );
}

export default Footer;
