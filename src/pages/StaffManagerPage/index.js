import { useEffect, useState } from 'react';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import Notification from '../../Layout/components/Notification';
import StaffManager from '../../Layout/components/StaffManager';
import AddStaffManager from '../../Layout/components/AddStaffManager';
import Contract from '../../Layout/components/Contract';

function StaffManagerPage() {
   const [showNoti, setShowNoti] = useState(false);
   const [addStaff, setAddStaff] = useState(false);
   const [success, setSuccess] = useState(false);
   const [showContract, setShowContract] = useState(false);

   const [item, setItem] = useState({});

   const listStaff = [
      {
         id: 1,
         fullName: 'Nguyễn Thanh Dũng',
         date: '26/7/2001',
         adress: 'Phu Yen',
         Email: 'andydung2607@gmail.com',
         sdt: '0343263672',
         status: 1,
         id_Role: 1,
      },
      {
         id: 2,
         fullName: 'Nguyễn Minh Khang',
         date: '22/09/2001',
         adress: 'HCM',
         Email: 'nmk@gmail.com',
         sdt: '0343263672',
         status: 1,
         id_Role: 3,
      },
      {
         id: 3,
         fullName: 'Võ Đông Duy',
         date: '19/09/2001',
         adress: 'Long An',
         Email: 'vodongduy@gmail.com',
         sdt: '0343263672',
         status: 1,
         id_Role: 2,
      },
      {
         id: 4,
         fullName: 'Nguyen Thai Tuong',
         date: '19/09/2001',
         adress: 'Nghe An',
         Email: 'vodongduy@gmail.com',
         sdt: '0343263672',
         status: 1,
         id_Role: 2,
      },
      {
         id: 5,
         fullName: 'Nguyen Doan Thong',
         date: '19/09/2001',
         adress: 'Ha Tinh',
         Email: 'vodongduy@gmail.com',
         sdt: '0343263672',
         status: 0,
         id_Role: 3,
      },
   ];

   const handleAddStaff = () => {
      setAddStaff(true);
      // setShowNoti(true);
      // setSuccess(true);
      // setTimeout(() => {
      //    setShowNoti(false);
      // }, 3500);
   };

   const handleLockStaff = () => {
      setShowNoti(true);
      setSuccess(false);
      setTimeout(() => {
         setShowNoti(false);
      }, 3500);
   };

   const hanldeClose = () => {
      setAddStaff(false);
   };

   const onClickContract = (id) => {
      setShowContract(true);
      listStaff.map((it) => {
         if (it.id == id) {
            setItem(it);
         }
      });
   };

   const hanldeCloseContract = () => {
      setShowContract(false);
   };

   return (
      <div>
         <Header />
         <StaffManager
            handleAddStaff={handleAddStaff}
            handleLockStaff={handleLockStaff}
            onClickContract={onClickContract}
            listStaff={listStaff}
         />
         {showContract && <Contract hanldeClose={hanldeCloseContract} item={item} />}
         {showNoti && <Notification success={success} />}
         {addStaff && <AddStaffManager hanldeClose={hanldeClose} />}
         <Footer />
      </div>
   );
}

export default StaffManagerPage;
