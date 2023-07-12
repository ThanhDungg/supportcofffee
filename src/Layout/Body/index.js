import Menu from '../../components/Menu';
import Slides from '../components/Slides';

function Body({ clickStatus, listCoffee, listType }) {
   return (
      <div>
         <Slides />
         <Menu listCoffee={listCoffee} listType={listType} clickStatus={clickStatus} />
      </div>
   );
}

export default Body;
