import { useContext, useEffect, useState } from 'react';
import Body from '../../Layout/Body';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import Login from '../../Layout/components/Login';
import ForgotPassWord from '../../Layout/components/ForgotPassWord';
import Coffee from '../../Layout/components/Coffee';
import { useNavigate } from 'react-router-dom';
import Bill from '../../Layout/components/Bill';
import TableHome from '../../Layout/components/TableHome';
import Loading from '../../Layout/components/Loading';
import { getData, postData } from '../../configs/fetchData';
import { getTopping, login_Url, menu_url } from '../../configs/config';
import { SocketContext } from '../../App';

function HomePage() {
   const navigate = useNavigate();
   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

   const temp = {
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

   const [price, setPrice] = useState(0);

   const [renderLogin, setRenderLogin] = useState(false);
   const [renderForgot, setRenderForgot] = useState(false);
   const [coffee, setCoffee] = useState(false);
   const [table, setTable] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const [item, setItem] = useState(temp);

   const [quantityCoffee, setQuantityCoffee] = useState(1);

   const [listCheckTopping, setListCheckTopping] = useState([]);

   const [listCoffeeBill, setListCoffeeBill] = useState([]);
   const [listCoffee, setListCoffee] = useState([]);

   const [listTopping, setListTopping] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await getData(menu_url, '');
            setListCoffee(res.data.result);

            const res1 = await getData(getTopping, '');
            setListTopping(res1.data.result);
         } catch (e) {
            console.log(e);
         }
      };
      fetchData();
   }, []);

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

   // const listCoffee = [
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

   const listTable = [
      { id: 1, Name: 'Ban 1', Status: 1 },
      { id: 2, Name: 'Ban 2', Status: 1 },
      { id: 3, Name: 'Ban 3', Status: 0 },
      { id: 4, Name: 'Ban 4', Status: 0 },
      { id: 5, Name: 'Ban 5', Status: 1 },
      { id: 6, Name: 'Ban 6', Status: 1 },
      { id: 7, Name: 'Ban 7', Status: 1 },
      { id: 8, Name: 'Ban 4', Status: 0 },
      { id: 9, Name: 'Ban 5', Status: 1 },
      { id: 10, Name: 'Ban 6', Status: 1 },
      { id: 11, Name: 'Ban 7', Status: 1 },
      { id: 12, Name: 'Ban 4', Status: 0 },
      { id: 13, Name: 'Ban 5', Status: 1 },
      { id: 14, Name: 'Ban 6', Status: 1 },
      { id: 15, Name: 'Ban 7', Status: 1 },
   ];

   //login
   const clickLogin = () => {
      setRenderLogin(true);
      setRenderForgot(false);
   };

   //Tắt form login
   const clickCloseLogin = () => {
      setRenderLogin(false);
      setRenderForgot(false);
   };

   //Tắt form quên mật khẩu
   const clickCloseForgot = () => {
      setRenderLogin(false);
      setRenderForgot(false);
   };

   //Quên mật khẩu
   const clickForgot = () => {
      setRenderLogin(false);
      setRenderForgot(true);
   };

   //Đổi password
   const changePassword = () => {
      setRenderLogin(true);
      setRenderForgot(false);
   };

   //click login
   const user = [
      { id: 0, taikhoan: 'admin', matkhau: '123', role: 0 },
      { id: 1, taikhoan: 'user', matkhau: '123', role: 1 },
      { id: 2, taikhoan: 'bartender', matkhau: '123', role: 2 },
   ];
   const [taikhoan, setTaikhoan] = useState('');
   const [matkhau, setMatkhau] = useState('');
   const [errorMsg, setErrorMsg] = useState('');

   let tempItem = new Object();
   const changeTaiKhoan = (e) => {
      setTaikhoan(e.target.value);
      setErrorMsg('');
   };

   const changeMatKhau = (e) => {
      setMatkhau(e.target.value);
      setErrorMsg('');
   };

   const socket = useContext(SocketContext);
   //Login
   const handleLogin = async () => {
      if (taikhoan == '') {
         setErrorMsg('Bạn chưa nhập tài khoản');
      } else if (!filter.test(taikhoan)) {
         setErrorMsg('Email chưa đúng định dạng');
      } else if (matkhau == '') {
         setErrorMsg('Bạn chưa nhập mật khẩu');
      } else {
         setIsLoading(true);
         const res = await postData(login_Url, { email: taikhoan, password: matkhau }, '');
         if (res.data.data != undefined) {
            setIsLoading(false);
            localStorage.setItem('accessToken', res.data.data.accessToken);
            localStorage.setItem('isLogin', 1);
            localStorage.setItem('idRole', res.data.data.staffDetail.id_role);
            setRenderLogin(false);
            if (res.data.data.staffDetail.id_role == 2) {
               socket.emit('joinStaff', res.data.data.accessToken);
            } else if (res.data.data.staffDetail.id_role == 1) {
               socket.emit('joinBartender', res.data.data.accessToken);
               navigate('/bartender');
            }
         } else {
            setErrorMsg(res.data.message);
            setIsLoading(false);
         }
      }
   };

   //Xem chi tiết coffee để mua
   const clickStatus = (id) => {
      setQuantityCoffee(1);
      setCoffee(true);
      listCoffee.map((item) => {
         if (item.id == id) {
            setItem(item);
         }
      });
   };

   //tắt bản chọn coffee
   const handleClose = () => {
      setCoffee(false);
   };

   //Thêm 1 sản phẩm vào bill thanh toán
   const handleBuy = async (coffee, quantity) => {
      if (localStorage.getItem('isLogin')) {
         let tempCheckTopping = document.getElementById('list-topping');
         await setListCheckTopping([]);

         for (let i = 0; i < tempCheckTopping.childElementCount; i++) {
            if (tempCheckTopping.childNodes[i].childNodes[0].checked) {
               // await setListCheckTopping((tp) => [...tp, tempCheckTopping.childNodes[i].childNodes[0].value]);
               await listCheckTopping.push(tempCheckTopping.childNodes[i].childNodes[0].value);
            }
         }

         let tempCheckSize = document.querySelectorAll('[name = "check"]');
         for (let i = 0; i < tempCheckSize.length; i++) {
            if (tempCheckSize[i].checked) {
               tempItem = new Object();
               tempItem = coffee;
               tempItem['quantity'] = quantity;
               tempItem['listCheckedTP'] = listCheckTopping;
               tempItem['price'] = price;
               listCoffee.map(async (item) => {
                  if (item.id == coffee.id) {
                     tempItem['size'] = tempCheckSize[i].getAttribute('id');
                  }
               });
               setListCoffeeBill((list) => [item, ...list]);
               setQuantityCoffee(1);

               break;
            }
         }
         await setCoffee(false);
      } else {
         setCoffee(false);
         setRenderLogin(true);
      }
   };

   //Xóa 1 sản phẩm trong bill
   const handleCloseCoffeBill = async (coffe) => {
      let newCoffee = listCoffeeBill.map((item) => item.id).indexOf(coffe.id);
      await listCoffeeBill.splice(newCoffee, 1);
      await setListCoffeeBill((list) => [...list]);
   };

   //Hiện bản chọn bàn
   const handleTable = () => {
      if (listCoffeeBill.length == 0) {
         alert('Bạn chưa chọn món!');
         return;
      }
      setTable(true);
   };

   //tắt bản chọn bàn
   const tableClose = () => {
      setTable(false);
   };

   //Xóa hết tất cả sản phẩm có trong bill
   const handleCancelBill = () => {
      setListCoffeeBill([]);
   };

   //Thêm coffee trong form Coffe
   const handleAddCoffee = () => {
      setQuantityCoffee(quantityCoffee + 1);
   };

   //Giảm coffee trong form Coffee
   const handleAbsCoffee = () => {
      quantityCoffee <= 1 ? setQuantityCoffee(quantityCoffee) : setQuantityCoffee(quantityCoffee - 1);
   };

   const chooseTbl = async () => {
      if (!window.confirm('Ban muon chon ban nay?')) {
         return;
      }
      //call API

      window.location.reload();
   };

   return (
      <div>
         <Header clickLogin={clickLogin} isLogin={localStorage.getItem('isLogin')} />
         <Body clickStatus={clickStatus} listCoffee={listCoffee} listType={listType} />
         {coffee && (
            <Coffee
               coffee={item}
               handleClose={handleClose}
               handleBuy={handleBuy}
               handleAbsCoffee={handleAbsCoffee}
               handleAddCoffee={handleAddCoffee}
               quantityCoffee={quantityCoffee}
               price={price}
               setPrice={setPrice}
               listTopping={listTopping}
            />
         )}
         <Bill
            listCoffee={listCoffeeBill}
            handleClose={handleCloseCoffeBill}
            handleTable={handleTable}
            handleCancel={handleCancelBill}
            listTopping={listTopping}
         />
         {table && <TableHome listTable={listTable} handleClose={tableClose} chooseTbl={chooseTbl} />}
         {renderLogin && (
            <Login
               clickClose={clickCloseLogin}
               forgotpass={clickForgot}
               handleLogin={handleLogin}
               changeTaiKhoan={changeTaiKhoan}
               changeMatKhau={changeMatKhau}
               errorText={errorMsg}
            />
         )}

         {renderForgot && <ForgotPassWord clickClose={clickCloseForgot} changePassword={changePassword} />}
         <Footer />
         {isLoading && <Loading />}
      </div>
   );
}

export default HomePage;
