import { useEffect, useState } from 'react';
import Body from '../../Layout/Body';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import Login from '../../Layout/components/Login';
import ForgotPassWord from '../../Layout/components/ForgotPassWord';
import Coffee from '../../Layout/components/Coffee';
import { useNavigate } from 'react-router-dom';
import Bill from '../../Layout/components/Bill';
import TableHome from '../../Layout/components/TableHome';

function HomePage() {
   const navigate = useNavigate();

   const [renderLogin, setRenderLogin] = useState(false);
   const [renderForgot, setRenderForgot] = useState(false);
   const [isLogin, setIsLogin] = useState(false);
   const [coffee, setCoffee] = useState(false);
   const [table, setTable] = useState(false);
   const [show, setShow] = useState(false);

   const [item, setItem] = useState();
   const [type, setType] = useState('');
   const [quantityCoffee, setQuantityCoffee] = useState(1);
   const [quantityBill, setQuantityBill] = useState(1);

   const [listCoffeeBill, setListCoffeeBill] = useState([]);

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

   const listCoffee = [
      {
         id: 1,
         Name_Coffee: 'Capochino',
         img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
         price: 50000,
         id_Type: 1,
      },
      {
         id: 2,
         Name_Coffee: 'Cà phê sữa',
         img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
         price: 20000,
         id_Type: 1,
      },
      {
         id: 3,
         Name_Coffee: 'Cà phê đen đá',
         img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
         price: 20000,
         id_Type: 1,
      },
      {
         id: 4,
         Name_Coffee: 'Sinh tố bơ',
         img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
         price: 20000,
         id_Type: 2,
      },
      {
         id: 5,
         Name_Coffee: 'Sinh tố xoài',
         img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
         price: 20000,
         id_Type: 2,
      },
      {
         id: 6,
         Name_Coffee: 'Trà sữa trân châu đường đen',
         img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
         price: 20000,
         id_Type: 3,
      },
      {
         id: 7,
         Name_Coffee: 'Trà sữa matcha',
         img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/640px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
         price: 20000,
         id_Type: 3,
      },
      {
         id: 8,
         Name_Coffee: 'Trà sữa việt quốc',
         img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
         price: 20000,
         id_Type: 3,
      },
      {
         id: 8,
         Name_Coffee: 'Trà sữa việt quốc',
         img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
         price: 20000,
         id_Type: 3,
      },
      {
         id: 8,
         Name_Coffee: 'Trà sữa việt quốc',
         img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
         price: 20000,
         id_Type: 3,
      },
      {
         id: 8,
         Name_Coffee: 'Trà sữa việt quốc',
         img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
         price: 20000,
         id_Type: 3,
      },
      {
         id: 8,
         Name_Coffee: 'Trà sữa việt quốc',
         img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
         price: 20000,
         id_Type: 3,
      },
      {
         id: 8,
         Name_Coffee: 'Trà sữa việt quốc',
         img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
         price: 20000,
         id_Type: 3,
      },
      {
         id: 8,
         Name_Coffee: 'Trà sữa việt quốc',
         img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
         price: 20000,
         id_Type: 3,
      },
      {
         id: 8,
         Name_Coffee: 'Trà sữa việt quốc',
         img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
         price: 20000,
         id_Type: 3,
      },
      {
         id: 8,
         Name_Coffee: 'Trà sữa việt quốc',
         img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
         price: 20000,
         id_Type: 3,
      },
      {
         id: 8,
         Name_Coffee: 'Trà sữa việt quốc',
         img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
         price: 20000,
         id_Type: 3,
      },
      {
         id: 8,
         Name_Coffee: 'Trà sữa việt quốc',
         img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
         price: 20000,
         id_Type: 3,
      },
      {
         id: 8,
         Name_Coffee: 'Trà sữa việt quốc',
         img: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg',
         price: 20000,
         id_Type: 3,
      },
   ];

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
      { id: 8, Name: 'Ban 4', Status: 0 },
      { id: 9, Name: 'Ban 5', Status: 1 },
      { id: 10, Name: 'Ban 6', Status: 1 },
      { id: 11, Name: 'Ban 7', Status: 1 },
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
      { id: 1, taikhoan: 'user1', matkhau: '123', role: 1 },
      { id: 2, taikhoan: 'bartender', matkhau: '123', role: 2 },
   ];
   const [taikhoan, setTaikhoan] = useState('');
   const [matkhau, setMatkhau] = useState('');

   const changeTaiKhoan = (e) => {
      setTaikhoan(e.target.value);
   };

   const changeMatKhau = (e) => {
      setMatkhau(e.target.value);
      console.log(e.target.value);
   };

   const handleLogin = () => {
      user.map(async (u) => {
         if (u.taikhoan === taikhoan && u.matkhau === matkhau) {
            await localStorage.setItem('isLogin', u.role);
            await localStorage.setItem('idUser', u.id);
            await setIsLogin(true);
            await setRenderLogin(false);
            navigate('/');
            // if (localStorage.getItem('isLogin') == 1) {
            // } else if (localStorage.getItem('isLogin') == 2) {
            //    navigate('/bartender');
            // }
         }
      });
   };

   //Logout
   const handleLogout = async () => {
      await localStorage.removeItem('isLogin');
      await localStorage.removeItem('idUser');
      setIsLogin(false);
      await window.location.reload();
   };

   //Xem chi tiết coffee để mua
   const clickStatus = (id) => {
      setCoffee(true);
      listCoffee.map((item) => {
         if (item.id == id) {
            setItem(item);
            listType.map((ty) => {
               if (item.id_Type == ty.id) {
                  setType(ty.Name_Type);
               }
            });
         }
      });
   };

   //tắt bản chọn coffee
   const handleClose = () => {
      setCoffee(false);
   };

   //Thêm 1 sản phẩm vào bill thanh toán
   const handleBuy = (id) => {
      if (localStorage.getItem('isLogin')) {
         setCoffee(false);
         listCoffee.map((item) => {
            if (item.id == id) {
               setListCoffeeBill((list) => [...list, item]);
               setQuantityBill(quantityCoffee);
               setQuantityCoffee(1);
            }
         });
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
      await console.log(listCoffeeBill);
   };

   //Hiện bản chọn bàn
   const handleTable = () => {
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

   //thêm coffee trong bill
   const handleAdd = () => {
      setQuantityBill(quantityBill + 1);
   };

   //Giảm coffee trong bill
   const handleAbs = () => {
      quantityBill <= 1 ? setQuantityBill(quantityBill) : setQuantityBill(quantityBill - 1);
   };

   //Thêm coffee trong form Coffe
   const handleAddCoffee = () => {
      setQuantityCoffee(quantityCoffee + 1);
   };

   //Giảm coffee trong form Coffee
   const handleAbsCoffee = () => {
      quantityCoffee <= 1 ? setQuantityCoffee(quantityCoffee) : setQuantityCoffee(quantityCoffee - 1);
   };

   const handleMouseOver = () => {
      setShow(true);
   };

   const handleMouseOut = () => {
      setShow(false);
   };

   return (
      <div>
         <Header
            clickLogin={clickLogin}
            isLogin={localStorage.getItem('isLogin')}
            clickLogout={handleLogout}
            show={show}
            setShow={setShow}
         />
         <Body clickStatus={clickStatus} listCoffee={listCoffee} listType={listType} />
         {coffee && (
            <Coffee
               coffee={item}
               handleClose={handleClose}
               type={type}
               handleBuy={handleBuy}
               handleAbsCoffee={handleAbsCoffee}
               handleAddCoffee={handleAddCoffee}
               quantityCoffee={quantityCoffee}
            />
         )}
         <Bill
            listCoffee={listCoffeeBill}
            handleClose={handleCloseCoffeBill}
            handleTable={handleTable}
            handleCancel={handleCancelBill}
            quantity={quantityBill}
         />
         {table && <TableHome listTable={listTable} handleClose={tableClose} />}
         {renderLogin && (
            <Login
               clickClose={clickCloseLogin}
               forgotpass={clickForgot}
               handleLogin={handleLogin}
               changeTaiKhoan={changeTaiKhoan}
               changeMatKhau={changeMatKhau}
            />
         )}
         {renderForgot && <ForgotPassWord clickClose={clickCloseForgot} changePassword={changePassword} />}
         <Footer />
      </div>
   );
}

export default HomePage;
