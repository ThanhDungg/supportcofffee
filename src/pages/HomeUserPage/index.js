import { useContext, useEffect, useState } from 'react';
import BodyUser from '../../Layout/BodyUser';
import HeaderUser from '../../Layout/HeaderUser';
import StatusCoffeeUser from '../../Layout/components/StatusCoffeeUser';
import BillUser from '../../Layout/components/BillUser';
import WaitConfirmUser from '../../Layout/components/WaitConfirmUser';
import PayBillUser from '../../Layout/components/PayBillUser';
import { getData } from '../../configs/fetchData';
import { getBill, getTable, getTopping, menu_url } from '../../configs/config';
import { useNavigate, useParams } from 'react-router-dom';
import { SocketContext } from '../../App';
import TableChangeUser from '../../components/TableChangeUser';

function HomeUserPage() {
   const { id } = useParams();
   const navigate = useNavigate();

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

   const [state, setState] = useState(0);

   const [listCoffee, setListCoffee] = useState([]);
   const [listTopping, setListTopping] = useState([]);

   const [waitConfirm, setWaitConfirm] = useState(false);
   const [wait, setWait] = useState(true);

   const [quantity, setQuantity] = useState(1);
   const [quantityMoney, setQuantityMoney] = useState(0);

   const [listCoffeeBillUser, setListCoffeeBillUser] = useState([]);
   const [listCoffeeOrder, setListCoffeeOrder] = useState([]);
   const [listCheckTopping, setListCheckTopping] = useState([]);
   const [billDetails, setBillDetails] = useState();

   const [showStatusCoffee, setShowStatusCoffee] = useState(false);
   const [coffeeStatus, setCoffeeStatus] = useState(tempCoffee);

   const [showBtnChangeTable, setShowBtnChangeTable] = useState(false);
   const [showTableChange, setShowTableChange] = useState(false);
   let tempItem = new Object();

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await getData(menu_url, '');
            setListCoffee(res.data.result);

            const res2 = await getData(getTopping, '');
            setListTopping(res2.data.result);
         } catch (e) {
            console.log(e);
         }
      };
      fetchData();
   }, []);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await getData(getBill + `/${id}`, '');
            console.log(res);
            if (res.data.result.length == 0) {
            } else {
               setBillDetails(res.data.result[0]);
               setListCoffeeOrder(res.data.result[0].bill_details);
               setShowBtnChangeTable(true);
            }
         } catch (e) {
            console.log(e);
         }
      };
      fetchData();
   }, [state]);

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
            await listCheckTopping.push({
               id_topping: tempCheckTopping[i].getAttribute('id'),
               price: tempCheckTopping[i].value,
            });
         }
      }

      let tempCheckSize = document.querySelectorAll('[name ="size"]');
      for (let i = 0; i < tempCheckSize.length; i++) {
         if (tempCheckSize[i].checked) {
            tempItem = new Object();
            tempItem = item;
            tempItem['id_size_details'] = tempCheckSize[i].getAttribute('id');
            tempItem['quantity'] = quantity;
            tempItem['listCheckedTP'] = listCheckTopping;
            tempItem['price'] = quantityMoney;
            // listCoffeeBillUser.push(tempItem);
            setListCoffeeBillUser((list) => [...list, tempItem]);
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
      // listCoffeeBillUser.map(async (item) => {
      //    await setListCoffeeOrder((list) => [...list, item]);
      // });

      await setListCoffeeBillUser([]);
      await setWaitConfirm(true);
      await setWait(true);
      await socket.emit('order', {
         id_table: id,
         listCoffeeOrder: listCoffeeBillUser,
         title: `Bàn số ${id} đặt món`,
         noti: 'Thông báo đặt món!',
         type: 1,
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
         setState((state) => state + 1);
      });

      socket.on('decline', (data) => {
         console.log(data);
         setWaitConfirm(false);
         alert(`${data.title}`);
         setListCoffeeOrder([]);
      });

      socket.on('approveChangeTable', async (data) => {
         console.log(data);
         // alert('Bạn có thể đổi bàn.');
         await navigate(`/user/${data.id_newtable}`);
         await window.location.reload();
      });
   }, [socket]);

   const handleCancelOrder = () => {
      if (!window.confirm('Are you cancel order?')) {
         return;
      }
      setListCoffeeOrder([]);
      setWaitConfirm(false);
   };

   const handleReqChangetable = () => {
      setShowTableChange(true);
   };

   return (
      <div>
         <HeaderUser showBtnChangeTable={showBtnChangeTable} handleReqChangetable={handleReqChangetable} id={id} />
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
               listTopping={listTopping}
            />
         )}
         <BillUser
            listCoffee={listCoffeeBillUser}
            handleClose={handleCloseCoffeBill}
            handleCancelBillUser={handleCancelBillUser}
            handleOrder={handleOrder}
            listTopping={listTopping}
         />
         {waitConfirm && (
            <WaitConfirmUser wait={wait} handleCancelOrder={handleCancelOrder} setWaitConfirm={setWaitConfirm} />
         )}
         {showTableChange && <TableChangeUser setShowTableChange={setShowTableChange} idTable={id} socket={socket} />}
         <PayBillUser
            billDetails={billDetails}
            listCoffeePay={listCoffeeOrder}
            id={id}
            setWaitConfirm={setWaitConfirm}
         />
      </div>
   );
}

export default HomeUserPage;
