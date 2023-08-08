import { useContext, useEffect, useState } from 'react';
import BodyUser from '../../Layout/BodyUser';
import HeaderUser from '../../Layout/HeaderUser';
import StatusCoffeeUser from '../../Layout/components/StatusCoffeeUser';
import BillUser from '../../Layout/components/BillUser';
import WaitConfirmUser from '../../Layout/components/WaitConfirmUser';
import PayBillUser from '../../Layout/components/PayBillUser';
import { getData } from '../../configs/fetchData';
import { menu_url } from '../../configs/config';
import { useParams } from 'react-router-dom';
import { SocketContext } from '../../App';

function HomeUserPage() {
   const { id } = useParams();

   const socket = useContext(SocketContext);

   const tempCoffee = {
      id: '',
      Name_Coffee: '',
      img: '',
      price: '',
      id_Type: '',
      listsize: [
         { id_size: '', name_size: '', price: '' },
         { id_size: '', name_size: '', price: '' },
         { id_size: '', name_size: '', price: '' },
      ],
   };

   const listType = [
      {
         id: 1,
         Name_Type: 'Coffee',
      },
      {
         id: 2,
         Name_Type: 'Sinh tố',
      },
      {
         id: 3,
         Name_Type: 'Trà sữa',
      },
   ];

   //    {
   //       id: 1,
   //       Name_Coffee: 'Capochino',
   //       img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
   //       id_Type: 1,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 2,
   //       Name_Coffee: 'Cà phê sữa',
   //       img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
   //       id_Type: 1,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 3,
   //       Name_Coffee: 'Cà phê đen đá',
   //       img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
   //       id_Type: 1,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 4,
   //       Name_Coffee: 'Sinh tố bơ',
   //       img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
   //       id_Type: 2,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 5,
   //       Name_Coffee: 'Sinh tố xoài',
   //       img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
   //       id_Type: 2,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 6,
   //       Name_Coffee: 'Trà sữa trân châu đường đen',
   //       img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
   //       id_Type: 3,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 7,
   //       Name_Coffee: 'Trà sữa matcha',
   //       img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
   //       id_Type: 3,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 8,
   //       Name_Coffee: 'Trà sữa việt quốc',
   //       img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
   //       id_Type: 3,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 9,
   //       Name_Coffee: 'Trà sữa việt quốc',
   //       img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
   //       id_Type: 3,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 10,
   //       Name_Coffee: 'Trà sữa việt quốc',
   //       img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
   //       id_Type: 3,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 11,
   //       Name_Coffee: 'Trà sữa việt quốc',
   //       img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
   //       id_Type: 3,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 12,
   //       Name_Coffee: 'Trà sữa việt quốc',
   //       img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
   //       id_Type: 3,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 13,
   //       Name_Coffee: 'Trà sữa việt quốc',
   //       img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
   //       id_Type: 3,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 14,
   //       Name_Coffee: 'Trà sữa việt quốc',
   //       img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
   //       id_Type: 3,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 15,
   //       Name_Coffee: 'Trà sữa việt quốc',
   //       img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
   //       id_Type: 3,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 16,
   //       Name_Coffee: 'Trà sữa việt quốc',
   //       img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
   //       id_Type: 3,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 17,
   //       Name_Coffee: 'Trà sữa việt quốc',
   //       img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
   //       id_Type: 3,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 18,
   //       Name_Coffee: 'Trà sữa việt quốc',
   //       img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
   //       id_Type: 3,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   //    {
   //       id: 19,
   //       Name_Coffee: 'Trà sữa việt quốc',
   //       img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
   //       id_Type: 3,
   //       listsize: [
   //          { id_size: 1, name_size: 'Size M', price: 15000 },
   //          { id_size: 2, name_size: 'Size S', price: 20000 },
   //          { id_size: 3, name_size: 'Size L', price: 25000 },
   //       ],
   //    },
   // ];

   const [listCoffee, setListCoffee] = useState([]);
   const [waitConfirm, setWaitConfirm] = useState(false);
   const [wait, setWait] = useState(true);

   const [quantity, setQuantity] = useState(1);
   const [quantityMoney, setQuantityMoney] = useState(0);

   const [listCoffeeBillUser, setListCoffeeBillUser] = useState([]);
   const [listCoffeeOrder, setListCoffeeOrder] = useState([]);
   const [listCheckTopping, setListCheckTopping] = useState([]);

   const [showStatusCoffee, setShowStatusCoffee] = useState(false);
   const [coffeeStatus, setCoffeeStatus] = useState(tempCoffee);

   useEffect(() => {
      const fetchData = async () => {
         const res = await getData(menu_url, '');
         setListCoffee(res.data.result);
      };
      fetchData();
   }, []);

   useEffect(() => {
      socket.emit('joinCustomer', id);
   }, [socket]);

   const handleClose = () => {
      setShowStatusCoffee(false);
   };

   const handleStatusCoffee = (id) => {
      setShowStatusCoffee(true);
      setCoffeeStatus(listCoffee.find((item) => item.id == id));
   };

   const handleAbsCoffee = () => {
      quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1);
   };

   const handleAddCoffee = () => {
      setQuantity(quantity + 1);
   };

   const handleBuyCoffee = async (item, quantity) => {
      await setListCheckTopping([]);
      let tempCheckTopping = document.querySelectorAll('[name = "checktopping"]');
      for (let i = 0; i < tempCheckTopping.length; i++) {
         if (tempCheckTopping[i].checked) {
            await listCheckTopping.push(tempCheckTopping[i].value);
         }
      }

      let tempCheckSize = document.querySelectorAll('[name ="size"]');
      for (let i = 0; i < tempCheckSize.length; i++) {
         if (tempCheckSize[i].checked) {
            let tempItem = new Object();
            tempItem = item;
            tempItem['size'] = tempCheckSize[i].getAttribute('id');
            tempItem['quantity'] = quantity;
            tempItem['listCheckedTP'] = listCheckTopping;
            tempItem['price'] = quantityMoney;
            await setListCoffeeBillUser((coffee) => [...coffee, tempItem]);
            setQuantity(1);
            break;
         }
      }
      await setShowStatusCoffee(false);
   };

   //Xóa 1 sản phẩm trong bill
   const handleCloseCoffeBill = async (coffe) => {
      let newCoffee = listCoffeeBillUser.map((item) => item.id).indexOf(coffe.id);
      await listCoffeeBillUser.splice(newCoffee, 1);
      await setListCoffeeBillUser((list) => [...list]);
   };

   // Hủy hết món trong bill
   const handleCancelBillUser = () => {
      setListCoffeeBillUser([]);
   };

   const handleOrder = async () => {
      if (listCoffeeBillUser.length == 0) {
         alert('Bạn chưa chọn món!');
         return;
      }
      listCoffeeBillUser.map(async (item) => {
         await setListCoffeeOrder((list) => [...list, item]);
      });

      await setListCoffeeBillUser([]);
      await setWaitConfirm(true);
      await setWait(true);
      await socket.emit('order', {
         id_table: id,
         listCoffeeOrder: listCoffeeBillUser,
         title: `Bàn số ${id} đặt món`,
         noti: 'Thông báo đặt món!',
      });
      setTimeout(() => {
         setWait(false);
      }, 5000);
   };

   useEffect(() => {
      socket.on('approve', (data) => {
         console.log(data);
         setWaitConfirm(false);
         alert(`${data.title}`);
      });

      socket.on('decline', (data) => {
         console.log(data);
         setWaitConfirm(false);
         alert(`${data.title}`);
         setListCoffeeOrder([]);
      });
   }, [socket]);

   const handleCancelOrder = () => {
      if (!window.confirm('Are you cancel order?')) {
         return;
      }
      socket.emit('decline', {
         tableNo: id,
         title: 'Khách đã hủy đơn.',
      });
      setListCoffeeOrder([]);
      setWaitConfirm(false);
   };

   return (
      <div>
         <HeaderUser />
         <BodyUser listType={listType} listCoffee={listCoffee} handleStatusCoffee={handleStatusCoffee} />
         {showStatusCoffee && (
            <StatusCoffeeUser
               coffee={coffeeStatus}
               handleClose={handleClose}
               handleAbsCoffee={handleAbsCoffee}
               handleAddCoffee={handleAddCoffee}
               setQuantityMoney={setQuantityMoney}
               quantityMoney={quantityMoney}
               quantity={quantity}
               handleBuyCoffee={handleBuyCoffee}
            />
         )}
         <BillUser
            listCoffee={listCoffeeBillUser}
            handleClose={handleCloseCoffeBill}
            handleCancelBillUser={handleCancelBillUser}
            handleOrder={handleOrder}
         />
         {waitConfirm && <WaitConfirmUser wait={wait} handleCancelOrder={handleCancelOrder} />}
         <PayBillUser listCoffeePay={listCoffeeOrder} />
      </div>
   );
}

export default HomeUserPage;
