import BartenderPage from '../pages/BartenderPage';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import TablePage from '../pages/TablePage';

const publicsRoutes = [
   { path: '/', component: HomePage, Layout: HomePage },
   { path: '/bartender', component: BartenderPage, Layout: BartenderPage },
   { path: '/table', component: TablePage, Layout: TablePage },
   { path: '/profile/:id', component: ProfilePage, Layout: ProfilePage },
   { path: '*', component: ErrorPage, Layout: ErrorPage },
];

const privateRoutes = [];

export { publicsRoutes, privateRoutes };
