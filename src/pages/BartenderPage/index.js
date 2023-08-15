import { useNavigate } from 'react-router-dom';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import BartenderBody from '../../Layout/components/BartenderBody';
import { useContext, useEffect, useState } from 'react';
import Error from '../../Layout/Error';
import Button from '../../components/Button';
import CoffeePayBillUser from '../../components/CoffeePayBillUser';
import BartenderBill from '../../Layout/components/BartenderBill';
import BartenderAllBill from '../../Layout/BartenderAllBill';
import { SocketContext } from '../../App';

function BartenderPage() {
   const navigate = useNavigate();

   // const list = [
   //    [
   //       {
   //          id_size_details: '3',
   //          img: 'https://drive.google.com/uc?export=view&id=1QurVD-24aXUDnlfslnd90iw-2Hnf1PRF',
   //          name_coffee: 'Trà đào',
   //          quantity: 1,
   //          listCheckedTP: ['1', '2'],
   //          size_details: [
   //             {
   //                id: 7,
   //                id_size: 1,
   //                price: '20000.0000',
   //                size: {
   //                   name_size: 'S',
   //                },
   //             },
   //             {
   //                id: 8,
   //                id_size: 2,
   //                price: '23000.0000',
   //                size: {
   //                   name_size: 'M',
   //                },
   //             },
   //             {
   //                id: 9,
   //                id_size: 3,
   //                price: '27000.0000',
   //                size: {
   //                   name_size: 'L',
   //                },
   //             },
   //          ],
   //       },
   //       {
   //          id_size_details: '1',
   //          img: 'https://drive.google.com/uc?export=view&id=1QurVD-24aXUDnlfslnd90iw-2Hnf1PRF',
   //          name_coffee: 'Trà đào',
   //          quantity: 2,
   //          listCheckedTP: [],
   //          size_details: [
   //             {
   //                id: 10,
   //                id_size: 1,
   //                price: '20000.0000',
   //                size: {
   //                   name_size: 'S',
   //                },
   //             },
   //             {
   //                id: 11,
   //                id_size: 2,
   //                price: '23000.0000',
   //                size: {
   //                   name_size: 'M',
   //                },
   //             },
   //             {
   //                id: 12,
   //                id_size: 3,
   //                price: '27000.0000',
   //                size: {
   //                   name_size: 'L',
   //                },
   //             },
   //          ],
   //       },
   //    ],
   //    [
   //       {
   //          id_size_details: '3',
   //          img: 'https://drive.google.com/uc?export=view&id=1QurVD-24aXUDnlfslnd90iw-2Hnf1PRF',
   //          name_coffee: 'Trà đào',
   //          quantity: 1,
   //          listCheckedTP: ['1', '2'],
   //          size_details: [
   //             {
   //                id: 7,
   //                id_size: 1,
   //                price: '20000.0000',
   //                size: {
   //                   name_size: 'S',
   //                },
   //             },
   //             {
   //                id: 8,
   //                id_size: 2,
   //                price: '23000.0000',
   //                size: {
   //                   name_size: 'M',
   //                },
   //             },
   //             {
   //                id: 9,
   //                id_size: 3,
   //                price: '27000.0000',
   //                size: {
   //                   name_size: 'L',
   //                },
   //             },
   //          ],
   //       },
   //       {
   //          id_size_details: '1',
   //          img: 'https://drive.google.com/uc?export=view&id=1QurVD-24aXUDnlfslnd90iw-2Hnf1PRF',
   //          name_coffee: 'Trà đào',
   //          quantity: 2,
   //          listCheckedTP: ['1'],
   //          size_details: [
   //             {
   //                id: 10,
   //                id_size: 1,
   //                price: '20000.0000',
   //                size: {
   //                   name_size: 'S',
   //                },
   //             },
   //             {
   //                id: 11,
   //                id_size: 2,
   //                price: '23000.0000',
   //                size: {
   //                   name_size: 'M',
   //                },
   //             },
   //             {
   //                id: 12,
   //                id_size: 3,
   //                price: '27000.0000',
   //                size: {
   //                   name_size: 'L',
   //                },
   //             },
   //          ],
   //       },
   //    ],
   //    [
   //       {
   //          id_size_details: '3',
   //          img: 'https://drive.google.com/uc?export=view&id=1QurVD-24aXUDnlfslnd90iw-2Hnf1PRF',
   //          name_coffee: 'Trà đào',
   //          quantity: 1,
   //          listCheckedTP: ['1', '2'],
   //          size_details: [
   //             {
   //                id: 7,
   //                id_size: 1,
   //                price: '20000.0000',
   //                size: {
   //                   name_size: 'S',
   //                },
   //             },
   //             {
   //                id: 8,
   //                id_size: 2,
   //                price: '23000.0000',
   //                size: {
   //                   name_size: 'M',
   //                },
   //             },
   //             {
   //                id: 9,
   //                id_size: 3,
   //                price: '27000.0000',
   //                size: {
   //                   name_size: 'L',
   //                },
   //             },
   //          ],
   //       },
   //       {
   //          id_size_details: '1',
   //          img: 'https://drive.google.com/uc?export=view&id=1QurVD-24aXUDnlfslnd90iw-2Hnf1PRF',
   //          name_coffee: 'Trà đào',
   //          quantity: 2,
   //          listCheckedTP: [],
   //          size_details: [
   //             {
   //                id: 10,
   //                id_size: 1,
   //                price: '20000.0000',
   //                size: {
   //                   name_size: 'S',
   //                },
   //             },
   //             {
   //                id: 11,
   //                id_size: 2,
   //                price: '23000.0000',
   //                size: {
   //                   name_size: 'M',
   //                },
   //             },
   //             {
   //                id: 12,
   //                id_size: 3,
   //                price: '27000.0000',
   //                size: {
   //                   name_size: 'L',
   //                },
   //             },
   //          ],
   //       },
   //    ],
   //    [
   //       {
   //          id_size_details: '3',
   //          img: 'https://drive.google.com/uc?export=view&id=1QurVD-24aXUDnlfslnd90iw-2Hnf1PRF',
   //          name_coffee: 'Trà đào',
   //          quantity: 1,
   //          listCheckedTP: ['1', '2'],
   //          size_details: [
   //             {
   //                id: 7,
   //                id_size: 1,
   //                price: '20000.0000',
   //                size: {
   //                   name_size: 'S',
   //                },
   //             },
   //             {
   //                id: 8,
   //                id_size: 2,
   //                price: '23000.0000',
   //                size: {
   //                   name_size: 'M',
   //                },
   //             },
   //             {
   //                id: 9,
   //                id_size: 3,
   //                price: '27000.0000',
   //                size: {
   //                   name_size: 'L',
   //                },
   //             },
   //          ],
   //       },
   //       {
   //          id_size_details: '1',
   //          img: 'https://drive.google.com/uc?export=view&id=1QurVD-24aXUDnlfslnd90iw-2Hnf1PRF',
   //          name_coffee: 'Trà đào',
   //          quantity: 2,
   //          listCheckedTP: [],
   //          size_details: [
   //             {
   //                id: 10,
   //                id_size: 1,
   //                price: '20000.0000',
   //                size: {
   //                   name_size: 'S',
   //                },
   //             },
   //             {
   //                id: 11,
   //                id_size: 2,
   //                price: '23000.0000',
   //                size: {
   //                   name_size: 'M',
   //                },
   //             },
   //             {
   //                id: 12,
   //                id_size: 3,
   //                price: '27000.0000',
   //                size: {
   //                   name_size: 'L',
   //                },
   //             },
   //          ],
   //       },
   //    ],
   // ];

   const [show, setShow] = useState(false);
   const [bodyNotifi, setBodyNotifi] = useState(false);
   const [listBillBartender, setListBillBartender] = useState([]);
   const [id_table, setID_table] = useState('');

   const socket = useContext(SocketContext);

   useEffect(() => {
      socket.on('requestBartending', (data) => {
         setListBillBartender((listBill) => [...listBill, data]);
         console.log(data);
      });
   }, [socket]);

   const handlNotifi = () => {
      setBodyNotifi(!bodyNotifi);
   };

   const handleLogout = async () => {
      await localStorage.removeItem('isLogin');
      await navigate('/');
      await window.location.reload();
   };

   return (
      <div>
         {localStorage.getItem('isLogin') == 1 ? (
            <div>
               <Header
                  isLogin={localStorage.getItem('isLogin')}
                  clickLogout={handleLogout}
                  show={show}
                  setShow={setShow}
                  handlNotifi={handlNotifi}
                  setListCoffeeBartender={setListBillBartender}
               />
               <BartenderAllBill list={listBillBartender} />
               <Footer />
            </div>
         ) : (
            <Error />
         )}
      </div>
   );
}

export default BartenderPage;
