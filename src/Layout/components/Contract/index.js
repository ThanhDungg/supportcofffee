import classNames from 'classnames/bind';
import styles from './Contract.module.scss';
import { Document, PDFViewer, Page, Text, View } from '@react-pdf/renderer';
import Close from '../../../components/Close';

const cx = classNames.bind(styles);

function Contract({ item, hanldeClose }) {
   //    return <PDFViewer className={cx('wrapper')}>hello</PDFViewer>;

   return (
      <div className={cx('wrapper')}>
         <Close hanldeClose={hanldeClose} />
         <PDFViewer className={cx('form-contract')}>
            <Document>
               <Page>
                  <View className={cx('text-contract')}>
                     <Text>{item.fullName}</Text>
                     <Text>Tôi là Nguyễn Thanh Dũng lớp 12A1</Text>
                  </View>
                  <View>
                     <Text className={cx('text-contract')}>{item.fullName}</Text>
                  </View>
               </Page>
            </Document>
         </PDFViewer>
      </div>
   );
}

export default Contract;
