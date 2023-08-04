import { useState } from 'react';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import EmptyTablePage from '../../Layout/components/EmptyTablePage';
import TableBody from '../../Layout/components/TableBody';
import PayBillTable from '../../Layout/components/PayBillTable';

function TablePage() {
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

   return (
      <div>
         <Header show={show} setShow={setShow} />
         <TableBody
            listTable={listTable}
            showChangeTable={changeTable}
            setShowPayBill={setShowPayBill}
            showTablePairing={handleShowTablePairing}
         />
         {showChangeTable && <EmptyTablePage listTable={listTable} handleClose={handleClose} status={0} />}
         {showtablePairing && <EmptyTablePage listTable={listTable} handleClose={handleCloseTablePairing} status={1} />}
         {showPayBill && <PayBillTable setShowPayBill={setShowPayBill} showPayBill={showPayBill} />}
         <Footer />
      </div>
   );
}

export default TablePage;
