import { Link, useNavigate } from 'react-router-dom';

function Error() {
   const navigate = useNavigate();
   return (
      <div>
         <div>
            <h1>Không thể truy cập trang này!</h1>
         </div>
         <div>
            <Link to={navigate(-1)}>Back</Link>
         </div>
      </div>
   );
}

export default Error;
