import { useEffect, useState } from 'react';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import EmptyTablePage from '../../Layout/components/EmptyTablePage';
import TableBody from '../../Layout/components/TableBody';
import PayBillTable from '../../Layout/components/PayBillTable';
import { getData, postData } from '../../configs/fetchData';
import { getBill, getTable, payBill } from '../../configs/config';

function TablePage() {
   const listTopping = [
      {
         id: 1,
         name: 'Trân châu đen',
         price: 5000,
      },
      {
         id: 2,
         name: 'Trân châu trắng',
         price: 7000,
      },
      {
         id: 3,
         name: 'Thạch',
         price: 9000,
      },
   ];

   const [idTable, setIdTable] = useState(0);
   const [id, setId] = useState(0);

   const [listCoffeePayBill, setListCoffeePayBill] = useState([]);
   const [listTable, setListTable] = useState([]);
   const [stateTable, setStateTable] = useState(0);

   useEffect(() => {
      const fetchData = async () => {
         const res = await getData(getTable, '');
         console.log(res);
         setListTable(res.data.result);
      };
      fetchData();
   }, [stateTable]);

   const [bill, setBill] = useState();

   const [showChangeTable, setShowChangeTable] = useState(false);
   const [showtablePairing, setShowtablePairing] = useState(false);
   const [showPayBill, setShowPayBill] = useState(false);
   const [show, setShow] = useState(false);

   const changeTable = () => {
      setShowChangeTable(true);
   };

   const handleClose = () => {
      setShowChangeTable(false);
   };

   const handleShowTablePairing = () => {
      setShowtablePairing(true);
   };

   const handleCloseTablePairing = () => {
      setShowtablePairing(false);
   };

   const handleShowPayBill = async (id) => {
      const res = await getData(getBill + `/${id}`, '');
      setIdTable(id);

      setId(id);
      setBill(res.data.result[0]);
      setListCoffeePayBill(res.data.result[0].bill_details);
      setShowPayBill(true);
      console.log(res);
   };

   const handlePayment = async () => {
      if (!window.confirm(`Bạn muốn thanh toán bill bàn số ${idTable}?`)) {
         return;
      }
      try {
         const res = await postData(payBill + `/${idTable}`, {}, localStorage.getItem('accessToken'));
         console.log(res);
         if (res.data.message == 'success') {
            listTable.map((tbl) => {
               if (tbl.id == id) {
                  tbl.status = !tbl.status;
                  setShowPayBill(false);
               }
            });
         } else {
            alert('Lỗi');
         }
      } catch (e) {
         console.log('Lỗi');
      }
   };

   return (
      <div>
         <Header show={show} setShow={setShow} />
         <TableBody
            listTable={listTable}
            showChangeTable={changeTable}
            showTablePairing={handleShowTablePairing}
            handleShowPayBill={handleShowPayBill}
         />
         {showChangeTable && <EmptyTablePage listTable={listTable} handleClose={handleClose} status={0} />}
         {showtablePairing && <EmptyTablePage listTable={listTable} handleClose={handleCloseTablePairing} status={1} />}
         {showPayBill && (
            <PayBillTable
               setShowPayBill={setShowPayBill}
               showPayBill={showPayBill}
               list={listCoffeePayBill}
               listTopping={listTopping}
               bill={bill}
               handlePayment={handlePayment}
            />
         )}
         <Footer />
      </div>
   );
}

export default TablePage;
