import { useNavigate } from 'react-router-dom';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import BartenderBody from '../../Layout/components/BartenderBody';
import { useState } from 'react';
import Error from '../../Layout/Error';

function BartenderPage() {
   const navigate = useNavigate();

   const [show, setShow] = useState(false);
   const [bodyNotifi, setBodyNotifi] = useState(false);

   const handleMouseOut = () => {
      setShow(false);
   };
   const handleMouseOver = () => {
      setShow(true);
   };

   const handlNotifi = () => {
      setBodyNotifi(!bodyNotifi);
   };

   const handleDone = () => {
      alert('Done');
   };

   const handleLogout = async () => {
      await localStorage.removeItem('isLogin');
      await navigate('/');
      await window.location.reload();
   };

   return (
      <div>
         {localStorage.getItem('isLogin') == 2 ? (
            <div>
               <Header
                  isLogin={localStorage.getItem('isLogin')}
                  clickLogout={handleLogout}
                  show={show}
                  setShow={setShow}
                  handlNotifi={handlNotifi}
               />
               {!bodyNotifi ? <BartenderBody handleDone={handleDone} /> : <div>Body notification</div>}
               <Footer />
            </div>
         ) : (
            <Error />
         )}
      </div>
   );
}

export default BartenderPage;
