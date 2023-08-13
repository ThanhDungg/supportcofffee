import BartenderPage from '../pages/BartenderPage';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import HomeUserPage from '../pages/HomeUserPage';
import ProfilePage from '../pages/ProfilePage';
import PromotionPage from '../pages/PromotionPage';
import StaffManagerPage from '../pages/StaffManagerPage';
import TablePage from '../pages/TablePage';

const publicsRoutes = [
   { path: '/', component: HomePage, Layout: HomePage },
   { path: '/bartender', component: BartenderPage, Layout: BartenderPage },
   { path: '/table', component: TablePage, Layout: TablePage },
   { path: '/profile', component: ProfilePage, Layout: ProfilePage },
   { path: '/managerstaff', component: StaffManagerPage, Layout: StaffManagerPage },
   { path: '/promotion', component: PromotionPage, Layout: PromotionPage },
   { path: '/user/:id', component: HomeUserPage, Layout: HomeUserPage },
   { path: '*', component: ErrorPage, Layout: ErrorPage },
];

const privateRoutes = [];

export { publicsRoutes, privateRoutes };
